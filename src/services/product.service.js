import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

export default {
    getAll() {
        return axios
            .get("https://dev-loan-api.sitama.co.id/api/v1/cms/productrate/P0000001", {
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

    postCrate() {
        return axios
            .post("https://dev-loan-api.sitama.co.id/api/v1/cms/blog/create", {
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

    postUpdate(id) {
        return axios
            .get("https://dev-loan-api.sitama.co.id/api/v1/cms/blog/update/" + id, {
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
            .get("https://dev-loan-api.sitama.co.id/api/v1/cms/blog/delete/" + id, {
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
