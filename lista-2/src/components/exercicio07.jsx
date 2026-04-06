import { useState } from "react";

export default function DisJuntor() {
    const [ligado, setLigado] = useState(false);
    return (
        <div>
            <p>{ligado ? 'Sistema ON' : 'Sistema OFF'}</p>

            <button onClick={() => setLigado(!ligado)}>Alternar</button>
        </div>
    );
}