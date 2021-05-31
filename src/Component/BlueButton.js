const BlueButton = ({ onCustomClick, caption }) => {
    return <button className='btn btn-primary' onClick={onCustomClick}>
        {caption}
    </button>
}

export default BlueButton;