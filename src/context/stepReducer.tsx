import { FINISH_FIRST, FINISH_SECOND, FINISH_THIRD, FINISH_FOURTH, FINISH_FIFTH } from './types';


interface Action  {
    type: string;
    payload: object | string | null
}
const handlers = {
    [FINISH_FIRST]: (state: object, action: Action) => ({
        ...state,
        step1: action.payload,
    }),
    [FINISH_SECOND]: (state: object, action: Action) => ({
        ...state,
        step2: action.payload,
    }),
    [FINISH_THIRD]: (state: object, action: Action) => ({
        ...state,
        step3: action.payload,
    }),
    [FINISH_FOURTH]: (state: object, action: Action) => ({
        ...state,
        step4: action.payload,
    }),
    [FINISH_FIFTH]: (state: object, action: Action) => ({
        ...state,
        step5: action.payload,
    }),
    DEFAULT: (state: object):object => state,
};

export const stepReducer = (state: object, action: Action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
