import { useState } from "react";

function ContadorLimitado(){
    const [cuenta, setCuenta] = useState<number>(0);

    return(
        <div>
            <h2>Contador: {cuenta}</h2>
            <button onClick={()=> setCuenta(anterior => anterior + 1)}
            disabled = {cuenta  === 10}>
                sumar
            </button>

            <button onClick={()=> setCuenta(anterior => anterior - 1)}
            disabled = {cuenta === 0}>
                restar
            </button>

            <button onClick={() => setCuenta(0)}>
                reiniciar
            </button>

            {cuenta === 10 && <p>Maximo alcanzado</p>}
        </div>
    )
}
export default ContadorLimitado;