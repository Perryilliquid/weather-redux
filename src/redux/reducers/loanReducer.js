
export const LOAN_FETCH_DETAILS = 'aspire/loan/fetchDetails';
export const LOAN_FETCH_LIST = 'aspire/loan/fetchList';

const initialState = {
    details: {},
    list: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAN_FETCH_DETAILS: {
            return {
                ...state,
                details: action.details
            };
        }
        case LOAN_FETCH_LIST: {
            return {
                ...state,
                list: action.list
            };
        }
        default:
            return state;
    }
}
