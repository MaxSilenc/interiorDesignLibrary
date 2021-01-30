import * as axios from "axios";

const instanc = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/'
});


export const getProjects = (nowPage) =>{
    return instanc.get("http://127.0.0.1:8000/projects?page=" + nowPage).then(respons => {
        return respons.data
    });
};

export const currUser = () => {
    return instanc.get("http://127.0.0.1:8000/curr").then(respons => {
        return respons.data
    });
};

export const getCurrProject = (projectId) =>{
    return instanc.get("http://127.0.0.1:8000/projectPage/" + projectId).then(respons => {
        return respons.data
    });
};

export const getCurrProjectComment = (projectId) =>{
    return instanc.get("http://127.0.0.1:8000/comments/" + projectId).then(respons => {
        return respons.data
    });
};