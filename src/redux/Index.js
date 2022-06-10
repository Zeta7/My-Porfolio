import actions from './Actions';

const INITIAL_STATE = {
    Language: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.setLanguage:
            return {
                ...state,
                Language: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
