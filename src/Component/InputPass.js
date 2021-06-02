import * as React from 'react';

const InputPass = ({label, value, onChange}) => {
    return  <label>
        {label} : <input type="password" className="form-control" defaultValue={value} onChange={onChange} />
    </label>
};

export default InputPass;