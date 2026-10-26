import type { ReactNode } from 'react';
type PropsTarjetaLibro = {
    titulo: string,
    autor: string,
    estado?: 'disponible' | 'prestado' | 'reservado',
    children?: ReactNode,
    alPrestar?: ()=> void
}

function TarjetaLibro({
     titulo,
    autor,
    estado,
    children,
    alPrestar
}: PropsTarjetaLibro){

    return(
        <div>
            <h2>{titulo}</h2>
            <p>autor:{autor}</p>
            <p>estado:{estado}</p>

            {children}

            {estado === 'disponible'&&(

                <button onClick={()=> alPrestar?.()}>prestar</button>
            )}
        </div>
    )
}
export default TarjetaLibro;