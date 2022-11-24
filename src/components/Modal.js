function Modal (args) {
    function confirmar() {
        args.onConfirm();
    }
    function cancelar() {
        args.onCancel();
    }
    return (
        <div className="modal">
            <h2>Confirme Su Pago</h2>
            <button className="btn btn--alt" onClick={cancelar}>No Pagar</button>
            <button className="btn" onClick={confirmar}>Pagar</button>
        </div>
    )
}

export default Modal;