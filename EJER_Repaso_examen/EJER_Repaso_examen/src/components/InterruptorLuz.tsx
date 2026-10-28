import { useState } from "react";

function InterruptorLuz(){
    const [encendida, setEncendida] = useState<boolean>(false);

    <div>
        <h2>Interruptor de luz</h2>
        <button onClick={() =>setEncendida(!encendida)}>
            {encendida? 'Apagar': 'Encender'}
        </button>
        <div
        style={{
          width: "200px",
          height: "100px",
          marginTop: "10px",
          backgroundColor: encendida ? "yellow" : "#333333",
        }}
      >
        {encendida ? "Luz encendida" : "Luz apagada"}
      </div>
    </div>
}
export default InterruptorLuz;