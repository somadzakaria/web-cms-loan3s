import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
// const apiClient = axios.create({
//   baseURL: "https://dev-loan-api.sitama.co.id",
//   withCredentials: true,
//   headers: {
//     'Authorization': "Bearer " + user.data.access_token,
//     'X_USER_ID': user.data.id,
//     'Content-Type': "application/json",
//   },
// });

export default {
  getAll() {
    return axios.get("https://dev-loan-api.sitama.co.id/api/v1/cms/blog",
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
    // return axios.get("/api/v1/cms/blog");
  },
   getDelete(id) {
    return axios.get(
      "https://dev-loan-api.sitama.co.id/api/v1/cms/blog/delete/"+id,
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
    // return axios.get("/api/v1/cms/blog");
  },
  postCreate(){
    return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/create",
      {
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

//   getBlog(id) {
//     return apiClient.get("/api/v1/cms/blog" + id);
//   },
};
