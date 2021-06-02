import * as React from 'react'

const ControlledForm = () => {
    const [name, setName] = React.useState('')
    const [isMember, setIsMember] = React.useState(false)
    const [gender, setGender] = React.useState(0)
    const [category, setCategory] = React.useState('')
    const [comment, setComment] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()

        // Call name state above
        const formData = { name, isMember, gender, category, comment }
        console.log(formData)
    }

    return (
        <div className="container">
            <h1 className="text-center">Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Name: <input type='text' className='form-control' defaultValue={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                
                <br/><br/>

                <div className="form-group">
                    <label>
                        Member: <input type='checkbox' checked={isMember} onChange={(e) => setIsMember(e.target.checked)} />
                    </label>
                </div>
                <br /><br />

                <div className="form-group">
                    <label>
                        <input type='radio' name='gender' checked={gender === 1} onChange={(e) => setGender(1)} /> Male <br/>
                        <input type='radio' name='gender' checked={gender === 0} onChange={(e) => setGender(0)} /> Female
                    </label>
                </div>
                <br /><br />

                <div className="form-group">
                    <label>Food</label>
                    <select defaultValue={category} className="form-control" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">-- Select Food --</option>
                        <option value="nasgor">Nasgor</option>
                        <option value="pecel">Pecel</option>
                    </select>
                </div>
                <br /><br />

                <div className="form-group">
                    <label>Comment</label>
                    <textarea defaultValue={comment} id="" className="form-control" onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                <br /><br />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    ) 
}

export default ControlledForm;