import axios from "axios";


class Forgotpassword{
    postVerifikaiOtp(account,otp){
        return axios.post('https://dev-loan-api.sitama.co.id/api/v1/otp/verifikasi', {
            account: account,
            otp_code: otp,
        });
    }
    getOtp(otp) {
        return axios.get('https://dev-loan-api.sitama.co.id/api/v1/otp/'+ otp);
    }
    resetPassword(params) {
        return axios.post('https://dev-loan-api.sitama.co.id/api/v1/reset-password', params);
    }
}

export default new Forgotpassword();