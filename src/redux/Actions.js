export const actions = {
    setLanguage: 'SET_IS_LANGUAGE',
};

export const setIsLanguage = (params) => ({
    type: actions.setLanguage,
    payload: params,
});

export const getLanguage = (params) => {
    return (dispatch) => {
        dispatch(setIsLanguage(params));
    };
};
