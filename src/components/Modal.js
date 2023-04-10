import MM from '../images/MM.png';
import WC from '../images/WC.png';

function Modal (args) {
    function confirmar() {
        args.onConfirm();
    }
    function cancelar() {
        args.onCancel();
    }
    return (
        <div className="modal">
            <h3>Julio Moros can only accept payments in crypto</h3>
            <h5>In order to see his CV, please, engage your web3 wallet</h5>
            <div className="MM">
                <button className="btn btn--alt" onClick={cancelar}>
                    <span className='hormiga'>
                        <img className="wallet" src={MM} width="30" alt="MM wallet"/>
                    </span>
                    <span className="walletext">Meta-Mask</span>
                </button>
            </div>
            <div className="MM">
                <button className="btn2" onClick={confirmar}>
                    <span>
                        <img className="wallet" src={WC} width="30" alt="WC wallet"/>
                    </span>
                 <span className="walletext">Wallet-Connect</span> 
                </button>
            </div>
        </div>
    )
}

export default Modal;