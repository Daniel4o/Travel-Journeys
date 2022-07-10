function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.delete();
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are yous sure you want to delete travel journey ?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal;