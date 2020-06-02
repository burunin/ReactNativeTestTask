import {FINISH_FIRST, FINISH_SECOND, FINISH_THIRD, FINISH_FOURTH, FINISH_FIFTH} from './types';

const handlers = {
    [FINISH_FIRST]: (state, action) => ({
        ...state,
        step1: action.payload,
    }),
    [FINISH_SECOND]: (state, action) => ({
        ...state,
        step2: action.payload,
    }),
    [FINISH_THIRD]: (state, action) => ({
        ...state,
        step3: action.payload,
    }),
    [FINISH_FOURTH]: (state, action) => ({
        ...state,
        step4: action.payload,
    }),
    [FINISH_FIFTH]: (state, action) => ({
        ...state,
        step5: action.payload,
    }),
    DEFAULT: state => state,
};

export const stepReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
