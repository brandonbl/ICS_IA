import { useState } from 'react';

type Prestamo = {
  id: number;
  titulo: string;
  alumno: string;
  devuelto: boolean;
};

function ListaPrestamos() {
  // Lista con dos préstamos de ejemplo
  const [prestamos, setPrestamos] = useState<Prestamo[]>([
    {
      id: 1,
      titulo: 'Dune',
      alumno: 'Carlos',
      devuelto: false
    },
    {
      id: 2,
      titulo: 'El Hobbit',
      alumno: 'Lucía',
      devuelto: false
    }
  ]);

  // Puede contener un préstamo o null
  const [prestamoSeleccionado, setPrestamoSeleccionado] =
    useState<Prestamo | null>(null);

  // Marca un préstamo como devuelto
  function marcarComoDevuelto(id: number) {
    setPrestamos(
      prestamos.map((prestamo) =>
        prestamo.id === id
          ? { ...prestamo, devuelto: true }
          : prestamo
      )
    );
  }

  return(
        <div>
            <h1>Lista de prestamos</h1>
            {prestamos.map((prestamo) => (
                <div key={prestamo.id}>
                    <h2>{prestamo.titulo}</h2>
                    <p>Alumno:{prestamo.alumno}</p>
                    <p>Estado: {prestamo.devuelto ? 'Devuelto' : 'Pendiente'}</p>

                    <button onClick={()=>{
                        marcarComoDevuelto(prestamo.id)
                        setPrestamoSeleccionado(prestamo)
                    }}
                    disabled={prestamo.devuelto}
                    >
                        marcar como devuelto
                    </button>
                </div>
            ))}

            <p>
                prestamo seleccionado:{' '}
                {prestamoSeleccionado?.titulo ?? 'ninguno'}
            </p>
        </div>

  )
}
export default ListaPrestamos;