import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export default {
  getAll() {
    return axios.get("https://dev-loan-api.sitama.co.id/api/v1/cms/loan/ApprovalList",
        {
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
        });
  },



   getShow(id) {
    return axios.get(
      "https://dev-loan-api.sitama.co.id/api/v1/cms/loan/ApprovalShow/"+id,
        {   headers: {
            'Authorization': "Bearer " + user.data.access_token,
            'X_USER_ID': user.data.id,
            'Content-Type': "application/json",
          }}  
      )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        });
  },


  postUpdate(id,params){
    return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/loan/ApprovalSubmit/"+id,params,{
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
 