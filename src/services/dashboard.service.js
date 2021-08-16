import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export default {
    getAll() {
        return axios({method: 'post',
        url:"https://dev-loan-api.sitama.co.id/api/v1/cms/dashboard",
        headers: {
            'Authorization': "Bearer " + user.data.access_token,
            'X_USER_ID': user.data.id,
            'Content-Type': "application/json",
          }
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        }); }
      };
 