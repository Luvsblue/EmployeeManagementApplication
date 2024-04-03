import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";

class EmployeeService {
    getAll() {
        return axios.get(BASE_URL);
    }

    save(data) {
        return axios.post(BASE_URL, data);
    }

    update(id, data) {
        return axios.put(`${BASE_URL}/${id}`, data);
    }

    getById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    delete(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new EmployeeService();
