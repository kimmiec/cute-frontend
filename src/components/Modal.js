
import ReactDom from 'react-dom'

const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(234,247,252,255)',
    padding: '50px',
    zIndex: 1000
}

const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

export default function Modal({open, children, onClose}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={overlay} />

            <div style={modalStyle}>
                <button onClick={onClose}>&times;</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}