<template>
  <div class="home">
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div class="container">
        <div class="card login-card d-flex">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body text-center">
                <p class="login-card-description h5">Ganti Password</p>
                <p class="card-description mb-5">
                  Masukkan password baru Anda
                </p>
                <form action="#!">
                  <div class="form-group" @submit.prevent="onSubmit">
                      <div class="col-4">
                      <em>
                          <img src="../../assets/gmail.png" style="position:absolute; margin:8px 0px 0px -100px; ">
                     </em>
                      </div>
                      <div class="col-12">
                           <label for="email" class="sr-only">Email</label>
                    <input
                      type="text"
                      id="email"
                      class="form-control"
                      v-model="account"
                      placeholder="Password Baru"
                    />
                    </div>
                  </div>
                  <div class="form-group" @submit.prevent="onSubmit">
                      <div class="col-4">
                      <em>
                          <img src="../../assets/gmail.png" style="position:absolute; margin:8px 0px 0px -100px; ">
                     </em>
                      </div>
                      <div class="col-12">
                           <label for="email" class="sr-only">Email</label>
                    <input
                      type="text"
                      id="email"
                      class="form-control"
                      v-model="account"
                      placeholder="Confirm Password Baru"
                    />
                    </div>
                  </div>
                  <input
                    class="btn btn-block login-btn mb-4 mt-4"
                    type="submit"
                    value="Masukan"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "ForgetPassword",
  data() {
    return {
      account: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let loading = this.$loading.show();
      this.$store.dispatch("auth/otp", this.account).then(
        () => {
          loading.hide();
          sessionStorage.setItem("Otp", "reset-password");
          router.push("Otp");
        },
        (error) => {
          loading.hide();
          this.error = true;
          this.message = error.response.data.message;
          this.$swal.fire({
            icon: "error",
            title: "Opss...",
            text: "Your account not found",
          });
        }
      );
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Karla", sans-serif;
  background-color: #d0d0ce;
  min-height: 100vh;
}
.card {
  max-width: 700px;
  margin: auto;
}

.card-description {
  font-family: "Poppins";
  font-size: 19px;
}

.brand-wrapper {
  margin-bottom: 19px;
}
.brand-wrapper .logo {
  height: 37px;
}

.login-card {
  border: 0;
  border-radius: 27.5px;
  box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);
  overflow: hidden;
}

.login-card .card-body {
  padding: 85px 60px 60px;
}

@media (max-width: 422px) {
  .login-card .card-body {
    padding: 35px 24px;
  }
}
.login-card-description {
  font-size: 30px;
   color: #444444;
     font-style: normal;
  font-weight: 600;

  font-family: "Poppins";
  margin-bottom: 23px;
}
.login-card form {
  max-width: 400px;
  margin: auto
}
.login-card .form-control {
  border: 1px solid #4b4c4d;
  padding: 15px 25px;
 
  min-height: 45px;
  font-size: 18px;
  font-family: "Poppins";
  font-weight: 600;
  line-height: 15;
  font-weight: normal;
}
.login-card .form-control::-webkit-input-placeholder {
  color: #919aa3;
}
.login-card .form-control::-moz-placeholder {
  color: #919aa3;
}
.login-card .form-control:-ms-input-placeholder {
  color: #919aa3;
}
.login-card .form-control::-ms-input-placeholder {
  color: #919aa3;
}
.login-card .form-control::placeholder {
  color: #919aa3;
}
.login-card .login-btn {
  padding: 13px 20px 12px;
  background: #007aff;
  border-radius: 30px !important;
  border-radius: 4px;
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  color: #fff;
}

/* .login-card .login-btn:hover {
  background: #007aff;
  background-color: transparent;
  color: #007aff;
} */
.login-card .forgot-password-link {
      background: #007aff;
  font-size: 14px;
  color: #919aa3;
  
  margin-bottom: 12px;
}
.login-card-footer-text {
  font-size: 16px;
  color: #0d2366;
  margin-bottom: 60px;
}
@media (max-width: 767px) {
  .login-card-footer-text {
    margin-bottom: 24px;
  }
}
.login-card-footer-nav a {
  font-size: 14px;
  color: #919aa3;
}
</style>
