

const hotStste = {
    hotData: [],
    state: '',
    err: ''
}

const hotReducer = (state = hotStste, action) => {
    const { type, payload } = action

    switch (type) {
        case 'PENDING':
            return { ...state, status: "pending" };
        case 'SUCCESS':
            return { ...state, status: "success", hotData: payload };
        case 'ERROR':
            return { ...state, status: "error", err: payload };
        default:
            return state
    }
}

export default hotReducer