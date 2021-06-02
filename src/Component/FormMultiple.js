import * as React from 'react'
import InputText from './InputText'

const FormMultiple = () => {
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        alert(JSON.stringify(form))
    }

    return <form onSubmit={handleSubmit}>
        <InputText label='Name' defaultValue={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        <InputText label='Phone' defaultValue={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
        <InputText label='Email' defaultValue={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />

        <button type='Submit'>submit</button>
    </form>
}

export default FormMultiple;