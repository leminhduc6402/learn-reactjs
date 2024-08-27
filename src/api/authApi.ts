import axiosClient from "./axiosClient";

const authApi = {
    getAll(params) {
        const url = "/auth";
        return axiosClient.get(url, { params });
    },
    get(id: number) {
        const url = `/auth/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/auth`;
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/auth/${data.id}`;
        return axiosClient.patch(url, data);
    },
    delete(id: number) {
        const url = `/auth/${id}`;
        return axiosClient.delete(url);
    },
};
export default authApi;
