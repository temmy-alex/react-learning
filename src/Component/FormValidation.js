import * as React from 'react'
import InputText from './InputText'

const FormValidation = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')
    
    const handleSubmit = event => {
        event.preventDefault()

        if(error){
            alert(error)
        }else{
            alert(name)
        }
    }

    const myFunc = (e) => {
        setError('')
        const value = e.target.value
        if(!value.includes('@')) {
            setError('Email yang anda masukkan kurang tepat')
        }
        setEmail(value)
    }

    const handleChange = (e) => {
        setError('')
        const value = e.target.value
        if(value.length < 3) {
            setError(`Field minimal 3 karakter`)
        }
        setName(value)
    }

    return <form onSubmit={handleSubmit}>
        {error}
        <InputText type='text' label='Name' value={name} onChange={handleChange} />
        {/* copy paste adalah jalan ninjaku */}
        <InputText type='email' label='Email' value={email} onChange={myFunc} />
        <button type='submit'>Submit</button>
    </form>
}

export default FormValidation;