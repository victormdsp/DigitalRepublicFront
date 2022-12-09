import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';

import './Modal.css'

export default function ModalComponent(props) {

    const [open, setOpen] = useState(false);

    const modalOpen = (open) => setOpen(open);

    return (
        <div>
            <Button id="modalButton" onClick={() => modalOpen(true)}>{props.text}</Button>
            <Modal id="modalBody"
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <Button id="modalClose" onClick={() => modalOpen(false)}>X</Button>
                    {props.box}
                </div>
            </Modal>
        </div>

    )
}