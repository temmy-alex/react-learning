import propTypes from 'prop-types'
// import styling from './Button.module.css'
import stylesass from './Button.module.scss'

function ButtonProps({ title, onClick }) {
    // return <button className={styling.buttondefault} onClick={onClick}>
    return <button className={stylesass.defaultbutton} onClick={onClick}>
        {title}
    </button>
}

ButtonProps.propTypes = {
    title: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

export default ButtonProps;