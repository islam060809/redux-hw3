

const iceStste = {
    iceData: [],
    state: '',
    err: ''
}

const iceReducer = (state = iceStste, action) => {
    const { type, payload } = action

    switch (type) {
        case 'PENDING':
            return { ...state, status: "pending" };
        case 'SUCCESS':
            return { ...state, status: "success", iceData: payload };
        case 'ERROR':
            return { ...state, status: "error", err: payload };
        default:
            return state
    }
}

export default iceReducer