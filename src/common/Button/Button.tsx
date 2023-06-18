import React from 'react'
import {ButtonProp} from './ButtonInterface'
import styles from '../../styles/common/Button/Button.module.css'

export const Button  = (props:ButtonProp) => {
    const {clickHandler, text, type='primary', disabled=false, node=<></>, loader=false} = props;
    return (
        <button onClick={()=>{clickHandler && clickHandler()}} className={[styles['btn'], styles[type]].join(' ')} disabled={disabled}><div>{ loader ? <>{node}</> :text}</div></button>
    )
}
