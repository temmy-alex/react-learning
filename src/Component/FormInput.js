import * as React from 'react';
import InputText from './InputText';
import InputRadio from './InputRadio';
import InputPass from './InputPass';

const FormInput = () => {
    const [name, setName] = React.useState('')
    const [email, setterEmail] = React.useState('')
    const [pass, setterPass] = React.useState('');
    const [gender, setGender] = React.useState(0)
    const fileRef = React.useRef(null)
    const handleSubmit = event => {
        event.preventDefault()

        alert(`${name}, ${email}, ${pass}, ${fileRef.current.files[0].name}, ${gender}`)
    }

    return <form onSubmit={handleSubmit}>
        <InputText type='text' label='Name' value={name} onChange={(e) => setName(e.target.value)} /> <br/>
        <InputText type='email' label='Email' value={email} onChange={(e) => setterEmail(e.target.value)} /> <br/>
        <InputText type='password' label='Password' value={pass} onChange={(e) => setterPass(e.target.value)} /> <br/>
        {/* <InputPass label='Password' value={pass} onChange={(e) => setterPass(e.target.value)} /> */}
        <label>
            Email Address : <input type='email' value={email} onChange={(e)=> setterEmail(e.target.value)} />
        </label>
        <label>
            file : <input type='file' ref={fileRef} />
        </label>
        <InputRadio label="male"  onChange={(e)=> setGender(0)} />
        <InputRadio label="female"  onChange={(e) => setGender(1)} />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}

export default FormInput;