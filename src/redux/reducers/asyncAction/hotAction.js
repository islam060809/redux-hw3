import axios from "../../../axios"


export const getHotCoffe=()=>{
    return async(dispatch)=>{
        dispatch(addHCPending)
        try {
            const {data}=await axios.get('hot')
            console.log(data);
            dispatch(addHCSuccess(data))
        } catch (error) {
            dispatch(addHCError(err))   
        }
    }
}

const addHCPending = () => {
    return {
        type: 'PENDING'
    }
}
const addHCSuccess = (data) => {
    return {
        type: 'SUCCESS',
        payload: data
    }
}
const addHCError = (err) => ({ type: 'ERROR', payload: err })

