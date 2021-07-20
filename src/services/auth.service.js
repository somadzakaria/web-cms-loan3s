import axios from "axios";
export default{
    getOtp(account){
        return axios.get("https://dev-loan-api.sitama.co.id/api/v1/otp/" + account);
    }
}