<template>
<div class="home">
    <div class="bg-login">
    <header>
      <div class="container text-center">
        <div class="row">
          <div class="col-xl-12 col-sm-12">
            <img src="../assets/bfi.png" alt="" class="bfi" />
            <form @submit.prevent="login">
              <div class="col-3 mt-5 mx-auto">
                <label class="sr-only" for="inlineFormInputGroup">Email</label>
                <div class="input-group mb-4">
                  <input type="text" class="form-control" id="inlineFormInputGroup" v-model="email" placeholder="E-mail" style="color: #fff" />
                </div>
                <div class="input-group mb-4">
                  <input type="password" class="form-control" id="inlineFormInputGroup" v-model="password" placeholder="password" />
                </div>
                <div class="form-group mt-3">
                  <button class="btn btn-login" type="submit">Masuk</button>
                </div>
                <div class="form-group mt-3">
                  <a href="#" style="color:white; font-family:'Poppins';">Lupa Password</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      let loading = this.$loading.show();
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          loading.hide();
          this.$router.push({
            name: "blog",
          });
        });
    },
  },
};
</script>
<style scoped>
.bg-login {
  background-image: url("../assets/bg2.png");
  width: 100% !important;
  height: 800px !important;
}

.bfi {
  margin-top: 130px;
}

.form-control {
  background-color: transparent;
  color: #fff !important;
  width: 100%;
  font-family: "Poppins";
  font-size: 14px;
}

.btn-login {
  margin-top: 20px;
  width: 250px;
  height: 45px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: #05539a;
}
</style>
