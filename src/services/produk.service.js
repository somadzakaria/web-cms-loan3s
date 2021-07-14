import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export default {
  getAll() {
    return axios.get("https://dev-loan-api.sitama.co.id/api/v1/cms/product",
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

   getDelete(id) {
    return axios.get(
      "https://dev-loan-api.sitama.co.id/api/v1/cms/product/delete/"+id,
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
   getShow(id) {
    return axios.get(
      "http://127.0.0.1:8000/api/v1/cms/product/show/"+id,
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

  postCrate(produk){
    return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/product/create",produk,{
      headers: {
          'Authorization': "Bearer " + user.data.access_token,
          'X_USER_ID': user.data.id,
          'Content-Type': "application/json",
        }
    }).then((response) => {
          return response.data;
        })
        .catch((error) =>{
          return error.response.data;
        });
  },

  postUpdate(id,produk){
    return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/product/update/"+id,produk,{
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
 