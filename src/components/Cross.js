import './Cross.css'
import React from 'react'

function Cross({className, onClick}) {
  return (
    <div className={'cross-container ' + className}>
    <div className='cross' onClick={onClick}/>
    </div>
  )
}

export default Cross