import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotCoffe } from '../redux/reducers/asyncAction/hotAction'
import '../App.css'

const Hot = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotCoffe())
    }, [])
    const { hotData, status } = useSelector(state => state.hot)
    console.log(hotData);
    console.log(status);
    if (hotData === []) {
        return <h2>Loading...</h2>
    }
    return (
        <div className='carts'>
            {hotData.map((el) => (
                 <div className="cart">
                    <h4>{el.title}</h4>
                    <img width={200} src={el.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Hot