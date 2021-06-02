import * as React from 'react'

const InputText = ({label, value, onChange, type}) => {
    return  <label>
        {label} : <input type={type} className="form-control" defaultValue={value} onChange={onChange} />
    </label>
}

export default InputText