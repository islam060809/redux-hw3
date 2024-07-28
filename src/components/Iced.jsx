import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIceCoffe } from '../redux/reducers/asyncAction/iceAction'
import '../App.css'

const Iced = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIceCoffe())
  }, [])
  const { iceData, status } = useSelector(state => state.iced)
  console.log(iceData);
  console.log(status);

  if (iceData === []) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='carts'>
      {iceData.map((el) => (
        <div className="cart">
          <h4>{el.title}</h4>
          <img width={200} src={el.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Iced