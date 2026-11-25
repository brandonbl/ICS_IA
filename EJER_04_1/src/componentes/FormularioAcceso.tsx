import { useEffect, useRef, useState, type FormEvent } from "react";

export default function FormularioAcceso() {
  const campoCorreo = useRef<HTMLInputElement>(null);
  const campoContrasena = useRef<HTMLInputElement>(null);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => { campoCorreo.current?.focus(); }, []);

  const errorCorreo = correo.length > 0 && !correo.includes("@");
  const errorContrasena = contrasena.length > 0 && contrasena.length < 8;

  function manejarEnvio(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
    if (!correo.includes("@")) campoCorreo.current?.focus();
    else if (contrasena.length < 8) campoContrasena.current?.focus();
    else alert("Formulario correcto");
  }

  function vaciar() {
    setCorreo("");
    setContrasena("");
    setEnviado(false);
    campoCorreo.current?.focus();
  }

  return <form onSubmit={manejarEnvio}>
    <p><input ref={campoCorreo} value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" /></p>
    {errorCorreo && <p className="error">El correo debe contener @</p>}
    <p><input ref={campoContrasena} type={mostrar ? "text" : "password"} value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" /></p>
    {errorContrasena && <p className="error">Mínimo 8 caracteres</p>}
    <label><input type="checkbox" checked={mostrar} onChange={e => setMostrar(e.target.checked)} /> Mostrar contraseña</label>
    <p><button type="submit">Entrar</button> <button type="button" onClick={vaciar}>Vaciar</button></p>
    {enviado && !errorCorreo && !errorContrasena && <p>Datos enviados correctamente.</p>}
  </form>;
}