import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export default {
    getAll(years) {
        return axios({method: 'post',
        url:`${process.env.VUE_APP_URL}api/v1/cms/dashboard`,
        data:{
          'year':years
        },
        headers: {
            'Authorization': "Bearer " + user.data.access_token,
            'X_USER_ID': user.data.user.id,
            'Content-Type': "application/json",
          },   
      })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        }); }
      };
 