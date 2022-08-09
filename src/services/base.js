import axios from "axios";

class BaseService {

    base = "";
    baseURL = process.env.TZ;

    constructor(subURl = "") {
        this.base = `${process.env.VUE_APP_BASE_URL}${subURl}`;
    }

    async get() {
        const res = await axios.get(`${this.base}`);
        return res.data;
    }

    async post(id, data) {
        const res = await axios.post(`${this.base}/${id}`, data);
        return res.data;
    }

    async update(id, data) {
        const res = await axios.patch(`${this.base}/${id}`, data);
        return res.data;
    }

    async delete(id) {
        const res = await axios.post(`${this.base}/${id}`);
        return res.data;
    }
}

export default BaseService;
