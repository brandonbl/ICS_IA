import { useEffect, useState } from "react";

interface PropsReloj { zonaHoraria?: string }

export default function Reloj({ zonaHoraria = "Europe/Madrid" }: PropsReloj) {
  const [fecha, setFecha] = useState(() => new Date());

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      console.log("tic");
      setFecha(new Date());
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  return <p>{zonaHoraria}: {fecha.toLocaleTimeString("es-ES", { timeZone: zonaHoraria })}</p>;
}