import * as React from 'react'
// import { useRef } from 'react'

const UncontrolledForm = () => {
    const inputName = React.useRef(null)
    const inputPhoto = React.useRef(null)

    const handleSubmit = event => {
        // Berfungsi untuk mencegah submit untuk refresh / pindah halaman
        event.preventDefault()

        alert(inputName.current.value)
        alert(inputPhoto.current.files[0].name)
    }

    // function handleSubmit(event) {
    //     event.preventDefault()

    //     alert(inputName.current.vlue)
    // }

    return <form onSubmit={handleSubmit}>
        <label>
            Name: <input type='text' ref={inputName} placeholder='Enter Name' defaultValue='' />
        </label>
        <br/><br/>
        <label>
            Photo: <input type='file' ref={inputPhoto} />
        </label>
        <br/><br/>
        <input type='submit' value='Submit' />
    </form>
}


export default UncontrolledForm;