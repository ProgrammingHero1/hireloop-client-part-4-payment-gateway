import { serverFetch } from "../core/server";

export const getRecruiterCompany = async (recruiterId) => {
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}