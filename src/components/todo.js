import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo (args) {
    const [A, B] = useState(false);
    function borralo() {
        B(true);
    }
    function cancelalo() {
        B(false);
    }
    function confirmalo() {
        B(false);
    }
    return(
        <div className='card'>
        <h2>
          {args.texto}
        </h2>
        <div className='actions'>
        <button className='btn'onClick={borralo}>BOTON DE PAGO</button>
        </div>
        { A && <Modal onCancel={cancelalo} onConfirm={confirmalo}/> }
        { A && <Backdrop onCancel={cancelalo} /> }
        </div>

    )
}

export default Todo;