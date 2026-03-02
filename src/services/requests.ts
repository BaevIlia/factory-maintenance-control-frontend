import apiClient from "@/services/apiClient.ts";

export default {
    getRequests() {
        return apiClient.get('/requests');
    },
    getRequest(id: number){
        return apiClient.get(`/requests/${id}`);
    }
}