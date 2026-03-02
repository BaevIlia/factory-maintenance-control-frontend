import apiClient from "@/services/apiClient.ts";

export default {
    login(email: string, password: string) {
        return apiClient.post(`/auth`, {email, password});
    }
}