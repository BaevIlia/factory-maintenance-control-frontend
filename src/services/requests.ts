import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5122",
    headers:{
        "Content-Type": "application/json",
    }
});

export default {
    getRequests() {
        return apiClient.get('/requests');
    },
    getRequest(id: number){
        return apiClient.get(`/requests/${id}`);
    }
}