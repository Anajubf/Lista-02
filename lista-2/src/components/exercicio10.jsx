import { useState } from "react";

export default function SenhaSecreta() {
    const [senha, setSenha] = useState('');

    return (
        <div>
            <input type="text" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />

            <p style={{ color: senha === '123REACT' ? 'lime' : 'red'}}>
                {senha === '123REACT'
                ? 'Acesso Concedido'
                :  'Acesso Negado'}
            </p>
        </div>
    );
}