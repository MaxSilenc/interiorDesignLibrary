import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',
});


export const getProjects = (nowPage, themeId, type, search) =>{
    return instance.get("http://127.0.0.1:8000/projects/" + nowPage + '/' + themeId + '/' + type + '?search=' + search).then(respons => {
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
  return instance.get('http://127.0.0.1:8000/like?pr_id=' + projectId  + '&author=' + author).then(respons => {
      return respons.data
  })
};

export const setLike = (projectId, author, key) => {
    return instance.post('http://127.0.0.1:8000/like/', "project_id=" + projectId + "&author=" + author + "&key=" + key).then(respons => {
        return respons.data;
    })
};
export const registrationApi = (data) =>{
    return instance.post('http://127.0.0.1:8000/reg/', "login=" + data.login + "&password=" + data.password + "&passwordRep=" + data.passwordRep + "&email=" + data.email).then(respons => {
        return respons.data;
    })
};

export const socialRegApi = (email) =>{
    return instance.post('http://127.0.0.1:8000/social_reg/',"email=" + email).then(respons => {
        return respons.data;
    })
};

export const getThemes = () => {
    return instance.get('http://127.0.0.1:8000/themes/').then(respons => {
        return respons.data;
    })
};

export const changeCred = (data, id) =>{
    return instance.put('http://127.0.0.1:8000/reg/', "id=" + id + "&login=" + data.login + "&email=" + data.email
    + '&name=' + data.name + "&lastName=" + data.lastName).then(respons => {
        return respons.data;
    })
};

export const getChat = (username) =>{
    return instance.get('http://127.0.0.1:8000/chat?username=' + username).then(respons => {
        return respons.data
    })
};

export const updateMessage = (id, text, chatId) =>{
    return instance.put("http://127.0.0.1:8000/chat/", "id="+id+'&text='+text+'&chatId='+chatId).then(respons => {
        return respons.data
    });
};

export const addMessage = (text, projectId, author) =>{
    return instance.post("http://127.0.0.1:8000/chat/", 'text='+text+ '&username='+author+'&chatId='+projectId).then(respons => {
        return respons.data
    });
};

export const getProjectsInWork = (user_id) =>{
    return instance.get('http://127.0.0.1:8000/projectInWork?user_id='+user_id).then(respons=>{
        return respons.data
    });
};

export const getEmptyChats = (adminname) =>{
    return instance.get("http://127.0.0.1:8000/emptyChats/?adminname=" + adminname).then(respons =>{
        return respons.data;
    })
};

export const setAdminToChat = (id, adminname) =>{
    return instance.put("http://127.0.0.1:8000/emptyChats/", 'id='+id + '&adminname='+adminname).then(respons =>{
        return respons.data;
    })
};

export const addProject = (data) =>{
    return instance.post("http://127.0.0.1:8000/projects/1/all/all/",
        data,
        {
            headers: {
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            }
        }
    ).then(respons =>{
        return respons.data;
    })
};

export const addThemeOrType = (themeOrType, name) =>{
    return instance.post('http://127.0.0.1:8000/themes/', 'typesOrThemes='+themeOrType+'&name='+name).then(respons =>{
        return respons.data;
    })
};

export const updateThemeOrType = (themeOrType, id, newName) =>{
    return instance.put('http://127.0.0.1:8000/themes/', 'typesOrThemes='+themeOrType+'&id='+id+'&newName='+newName).then(respons =>{
        return respons.data;
    })
};
