import React from 'react'
import '../css/count_button.css'

function Afterson({inc_son_fun,dec_son_fun,son_count,dau_count}) {
  
  return (
    <div className='after-son'>
   {son_count<=0?( <button className='counter-button' onClick={(a)=>{a.preventDefault()}}></button>):( <button className='counter-button' onClick={dec_son_fun}>-</button>)}
 
    <div className='count'>{son_count}</div>
    {(son_count>5)||(dau_count+son_count>=4)?( <button className='counter-button' onClick={(a)=>{a.preventDefault()}}></button>):( <button className='counter-button' onClick={inc_son_fun}>+</button>)
    }
    {/* <button className='counter-button' onClick={inc_son_fun}>+</button> */}
</div>
  )
}

export default Afterson