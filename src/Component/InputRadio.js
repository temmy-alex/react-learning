import React from 'react';

const InputRadio = ({label,checked,onChange,gender})=> {
    return(
    <div>  
        {label} :   
        <input type='radio' name='gender' checked={checked} onChange={onChange} /> {gender} <br/> 
    </div>
    )
}

export default InputRadio;