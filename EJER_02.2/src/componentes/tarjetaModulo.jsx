function TarjetaModulo({titulo, horas = 0, curso = '1º', children}){
    return (

        <div>
            <h2>
                {curso === '1º'? "📘" : "📗"} {titulo}
            </h2>

            {horas > 0 && <p>{horas} horas semanales</p>}
            <p>{children}</p>
        </div>



    )
}
export default TarjetaModulo;