import React from 'react'
import { useState } from 'react'
import '../css/count_button.css'

function Afterdaughter({inc_dau_fun,dec_dau_fun,dau_count,son_count}) {
  
  return (
    <div className='after-son'>
      {dau_count<=0?( <button className='counter-button' onClick={(a)=>{a.preventDefault()}}></button>):( <button className='counter-button' name="daughter" onClick={dec_dau_fun}>-</button>)
    }
    <div className='count'>{dau_count}</div>
    
    {(dau_count>5)||(dau_count+son_count>=4)?( <button className='counter-button' onClick={(a)=>{a.preventDefault()}}></button>):( <button className='counter-button' onClick={inc_dau_fun}>+</button>)
    }
</div>
  )
}

export default Afterdaughter