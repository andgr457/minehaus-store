import React from "react";
import "./Modal.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  backdropHides: boolean
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, backdropHides }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={() => {
      if(backdropHides === true){
        onClose()
      }
    }}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button className="modal-close" onClick={onClose}>
            ✕ 
          </button>
          <div className='modal-header'>
            {title}
          </div>
        </div>
        
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;