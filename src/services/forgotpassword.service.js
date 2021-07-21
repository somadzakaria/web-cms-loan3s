import axios from "axios";
class Forgotpassword{
getOtp(Account){
    axios.get('https://dev-loan-api.sitama.co.id/api/v1/otp/' + Account);
 }
}

export default new Forgotpassword();