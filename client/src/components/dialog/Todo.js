import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    console.log(props)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div >
                <button className="btn" onClick={deleteHandler}>Delete</button>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} delete={props.delete} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}

export default Todo;