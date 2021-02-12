import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',
});


export const getProjects = (nowPage) =>{
    return instance.get("http://127.0.0.1:8000/projects?page=" + nowPage).then(respons => {
        return respons.data
    });
};

export const currUser = () => {
    return instance.post("http://127.0.0.1:8000/curr/", 'key=' + localStorage.token).then(respons => {
        return respons.data
    });
};

export const login = (data) => {
    return instance.post("http://127.0.0.1:8000/loginReact/", "username=" + data.login + "&password=" + data.password).then(respons => {
        return respons.data
    });
};

export const getCurrProject = (projectId) =>{
    return instance.get("http://127.0.0.1:8000/projectPage/" + projectId).then(respons => {
        return respons.data
    });
};

export const getCurrProjectComment = (projectId) =>{
    return instance.get("http://127.0.0.1:8000/comments/" + projectId).then(respons => {
        return respons.data
    });
};

export const updateComment = (id, text, projectId) =>{
    return instance.put("http://127.0.0.1:8000/comments/" + projectId + "/", "id="+id+'&text='+text).then(respons => {
        return respons.data
    });
};

export const addComment = (text, projectId, author) =>{
    return instance.post("http://127.0.0.1:8000/comments/" + projectId + "/", 'text='+text+ '&author='+author).then(respons => {
        return respons.data
    });
};

export const like = (projectId, author) => {
  return instance.get('http://127.0.0.1:8000/like/' + projectId + '/' + author + '/').then(respons => {
      return respons.data
  })
};