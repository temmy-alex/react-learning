import propTypes from 'prop-types'
import './styling.css'

function Hello({name}) {
    const style = { color: 'red', fontWeight: 'bold' }
    // return <h1 style={{ color: 'red', fontWeight: 'bold' }}>Hello {name}</h1>
    // return <h1 style={style}>Hello {name}</h1>
    return <h1 className='titleheader'>Styling</h1>
}

Hello.propTypes = {
    name: propTypes.string
    // Tipe Data
    // string
    // number, object, func, any (apapun), node (number, string, array), boolean, array, isRequired, element
}

export default Hello