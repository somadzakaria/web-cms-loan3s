<template>
  <div class="home">
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div class="container">
        <div class="card login-card d-flex">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body text-center">
                <p class="login-card-description h5">Masukkan Kode OTP</p>
                <p class="card-description mb-5">
                  Kode OTP anda sudah dikirim ke email/nomor Anda
                </p>
                <form
                  class="digit-group"
                  @submit.prevent="handleVerify($event)"
                >
                  <input
                    type="text"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                    @keypress="isNumber($event)"
                    v-model="otp.code1"
                    v-on:keyup="$event.target.nextElementSibling.focus()"
                    placeholder="0"
                    maxlength="1"
                    required
                  />
                  <input
                    type="text"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                    @keypress="isNumber($event)"
                    v-model="otp.code2"
                    v-on:keyup="$event.target.nextElementSibling.focus()"
                    placeholder="0"
                    maxlength="1"
                    required
                  />
                  <input
                    type="text"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                    @keypress="isNumber($event)"
                    v-model="otp.code3"
                    v-on:keyup="$event.target.nextElementSibling.focus()"
                    placeholder="0"
                    maxlength="1"
                    required
                  />
                  <input
                    type="text"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                    @keypress="isNumber($event)"
                    v-model="otp.code4"
                    v-on:keyup="$event.target.nextElementSibling.focus()"
                    placeholder="0"
                    maxlength="1"
                    required
                  />
                  <input
                    type="text"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                    @keypress="isNumber($event)"
                    v-model="otp.code5"
                    v-on:keyup="$event.target.nextElementSibling.focus()"
                    placeholder="0"
                    maxlength="1"
                    required
                  />
                  <input
                    type="text"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                    @keypress="isNumber($event)"
                    v-model="otp.code6"
                    v-on:keyup="$event.target.nextElementSibling.focus()"
                    placeholder="0"
                    maxlength="1"
                    required
                  />
                  <div class="resend-otp">
                    <a href="#" v-on:click.prevent="handleResendOTP($event)"
                      >Kirim ulang kode OTP</a
                    >
                  </div>
                  <div class="container mb-4">
                    <button class="btn gm-otp-code-button" type="submit">
                      Verifikasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

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

/* .login-card .login-btn:hover {
  background: #007aff;
  background-color: transparent;
  color: #007aff;
} */

/* WKWKW */
.gm-otp-code h5 {
  color: #444444;
  font-family: "inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.03em;
}

.gm-otp-code p {
  color: #444444;
  font-family: "inter";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
}

.gm-otp-code h4 {
  color: #444444;
  font-family: "inter";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.03em;
  padding: 30px;
}

.gm-otp-code-button {
  background-color: #148dcd;
  color: #ffffff;
  border-radius: 90px;
  height: 40px;
  width: auto;
  padding: 6px 50px 20px 50px;
}

.gm-form-ganti-password .input-container input {
  width: 85%;
}

.digit-group input {
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #757575;
  border-radius: 5px;
  box-sizing: border-box;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-family: "inter";
  font-weight: 600;
  font-style: normal;
  color: #148dcd;
  margin: 0 2px;
}

.digit-group input:hover {
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #757575;
  border-radius: 5px;
  box-sizing: border-box;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-family: "inter";
  font-weight: 600;
  font-style: normal;
  color: #148dcd;
  margin: 0 2px;
}

.resend-otp {
  margin: 40px;
}

.resend-otp a {
  color: #148dcd;
  font-family: "inter";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
}

.expired {
  color: #fe0000;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Styles */
  .digit-group input {
    width: 36px;
    height: 60px;
    background-color: #ffffff;
    border: 1px solid #757575;
    border-radius: 5px;
    box-sizing: border-box;
    line-height: 50px;
    text-align: center;
    font-size: 24px;
    font-family: "inter";
    font-weight: 600;
    font-style: normal;
    color: #148dcd;
    margin: 0 2px;
  }

  .digit-group input:hover {
    width: 36px;
    height: 60px;
    background-color: #ffffff;
    border: 1px solid #757575;
    border-radius: 5px;
    box-sizing: border-box;
    line-height: 50px;
    text-align: center;
    font-size: 24px;
    font-family: "inter";
    font-weight: 600;
    font-style: normal;
    color: #148dcd;
    margin: 0 2px;
  }

  .change-number {
    font-size: 14px;
  }
}
</style>
