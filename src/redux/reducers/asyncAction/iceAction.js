import axios from "../../../axios"


export const getIceCoffe=()=>{
    return async(dispatch)=>{
        dispatch(addICPending)
        try {
            const {data}=await axios.get('iced')
            console.log(data);
            dispatch(addICSuccess(data))
        } catch (error) {
            dispatch(addICError(err))   
        }
    }
}

const addICPending = () => {
    return {
        type: 'PENDING'
    }
}
const addICSuccess = (data) => {
    return {
        type: 'SUCCESS',
        payload: data
    }
}
const addICError = (err) => ({ type: 'ERROR', payload: err })

