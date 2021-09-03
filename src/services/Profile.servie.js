import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export default {
  postUpdate(id,profile){
    return axios.post(`${process.env.VUE_APP_URL}api/v1/cms/ChangeProfile`+id,profile,{
        headers: {
            'Authorization': "Bearer " + user.data.access_token,
            'X_USER_ID': user.data.id,
            'Content-Type': "application/json",
          }
      }
    ).then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        });
  }
};
 