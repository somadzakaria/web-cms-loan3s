import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

class Menu {
   getMenu(id) {
    return axios.get(
      `${process.env.VUE_APP_URL}api/v1/cms/menu/`+id,
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
  }

}

export default new Menu();