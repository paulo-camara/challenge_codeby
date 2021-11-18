import React from 'react';
import { Button } from '../Button/Button';

export const Modal = ({ isOpen, title, children, onCancel, onConfirm }) => {
    return isOpen && <div className="modal-container">
        <div className="modal">
            <div className="header-modal">
                {title}
            </div>
            <div className="body-modal">
                {children}
            </div>

            <div className="actions">
                {onCancel && <Button title={"Fechar"} onClick={onCancel}/>}
                {onConfirm && <Button title={"Confirmar"} onClick={onConfirm} />}
            </div>
        </div>
    </div>
};