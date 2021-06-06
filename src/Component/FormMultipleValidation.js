import * as React from 'react'
import InputText from './InputText'

const FormMultipleValidation = () => {
    // State untuk menampung field yang akan divalidasi
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: ''
    })

    // State untuk menampung pesan error / pesan dari validasinya
    const [error, setError] = React.useState({
        name: 'Nama minimal harus 3 karakter',
        phone: 'No hp minimal harus 3 karakter',
        email: 'Email minimal harus 3 karakter'
    })

    // Event yang melakukan trigger atau pengecekkan ketika submit
    const handleSubmit = event => {
        event.preventDefault()

        if(error['name'].length > 0) {
            alert(error['name'])
        } else if(error['phone'].length > 0) {
            alert(error['phone'])
        } else if(error['email'].length > 0) {
            alert(error['email'])
        } else {
            alert('Validasi sukses')
        }
    }

    // Berfungsi untuk melakukan pengecekkan perubahan value yang terdapat pada form
    const handleChange = (field, e) => {
        setError('')

        const value = e.target.value;
        if(value.length < 3){
            setError({...error, [field]: `${field} minimal 3 karakter`})
        } else {
            setError({...error, [field]: ''})
        }

        setForm({...form, [field]: value})
    }

    return <form onSubmit={handleSubmit}>
        {error.name}
        <br />
        <InputText type='text' label='Name' value={form.name} onChange={(e) => handleChange('name', e)} />
        <br /><br />
        {error.phone}
        <br />
        <InputText type='text' label='Phone' value={form.phone} onChange={(e) => handleChange('phone', e)} />
        <br /><br />
        {error.email}
        <br />
        <InputText type='text' label='Email' value={form.email} onChange={(e) => handleChange('email', e)} />
        <br /><br />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}

export default FormMultipleValidation;