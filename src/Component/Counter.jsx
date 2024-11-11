import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'

const Counter = () => {
    const [amount,setAmount] = useState(0)
    const {count} = useSelector(state=>state.counterReducer)
    const dispatch = useDispatch()

    const handleIncrementAmount = ()=>{
      if(amount){
        // dispatch action
        dispatch(incrementByAmount(+amount)) 
      }else{
        alert("Please enter a valid amount!!!")
      }
    }
  return (
    <div style={{height:'100vh'}} className='bg-dark text-center'>
        <h1 className=' text-light'>Counter App</h1>
        <div style={{marginLeft:'300px',marginRight:'300px',borderRadius:'10px'}} className='border mt-5'>
          <h1 className='mt-5 text-light fw-bolder'>{count}</h1>
          <div  className='mt-4 '>
            <button onClick={()=>dispatch(decrement())} className='btn bg-warning p-2'>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn ms-5 bg-danger p-2'>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn ms-5 bg-success p-2'>INCREMENT</button>
          </div>
          <div className='d-flex p-5'>
            <input onChange={e=>setAmount(e.target.value)} type="text" className='ms-5 w-50 mt-5 ' />
            <button onClick={handleIncrementAmount} className='btn m-3 mt-5 p-2 bg-primary'>INCREMENT BY AMOUNT</button>
          </div>
        </div>
    </div>
  )
}

export default Counter