import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

export default {
  getAll() {
    return axios
      .get(`${process.env.VUE_APP_URL}api/v1/cms/faq`, {
        headers: {
          Authorization: "Bearer " + user.data.access_token,
          X_USER_ID: user.data.id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },

  getShow(id) {
    return axios
      .get(`${process.env.VUE_APP_URL}api/v1/cms/faq/show/` + id, {
        headers: {
          Authorization: "Bearer " + user.data.access_token,
          X_USER_ID: user.data.id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },

  getDelete(id) {
    return axios
      .get(`${process.env.VUE_APP_URL}api/v1/cms/faq/delete/` + id, {
        headers: {
          Authorization: "Bearer " + user.data.access_token,
          X_USER_ID: user.data.id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },

  postCrate(params) {
    return axios
      .post(`${process.env.VUE_APP_URL}api/v1/cms/faq/create`, params, {
        headers: {
          Authorization: "Bearer " + user.data.access_token,
          X_USER_ID: user.data.id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },
  postUpdate(id, params) {
    return axios
      .post(`${process.env.VUE_APP_URL}api/v1/cms/faq/update/` + id, params, {
        headers: {
          Authorization: "Bearer " + user.data.access_token,
          X_USER_ID: user.data.id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },
};
