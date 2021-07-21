import axios from "axios";
class auth{

    getOtp(account){
        return axios.get("https://dev-loan-api.sitama.co.id/api/v1/otp/"+ account);
    }

    changePassword(params){
        return axios.get("https://dev-loan-api.sitama.co.id/api/v1/reset-password"+ params)
    }
}

export default new auth();