
export const getCommentsBlockPage = (state) => {
    return state.commentsBlockPage
};

export const getAuthDude = (state) =>{
    return state.auth;
};

export const getProjectPage = (state) =>{
    return state.projectsPage;
};

export const getSlides = (state) =>{
    return state.sliderSectionPage.slideArr;
};

export const getPersonalAreaData = (state) =>{
    return state.personalArea;
};

export const getEmptyChats = state =>{
    return state.adminPage.emptyChats
};

export const getMyChats = state =>{
    return state.adminPage.myChats
};

export const getMessages = state =>{
    return state.adminPage.messages
};