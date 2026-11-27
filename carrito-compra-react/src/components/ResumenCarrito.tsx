import { formatearPrecio } from "../utils/formato";

interface ResumenCarritoProps {
  unidades: number;
  subtotal: number;
  envio: number;
  total: number;
  umbralEnvioGratis: number;
  onConfirmarPedido?: () => void;
}

export function ResumenCarrito({
  unidades,
  subtotal,
  envio,
  total,
  umbralEnvioGratis,
  onConfirmarPedido,
}: ResumenCarritoProps) {
  const faltaParaGratis = Math.max(0, umbralEnvioGratis - subtotal);
  const porcentajeProgreso = Math.min(100, (subtotal / umbralEnvioGratis) * 100);

  return (
    <aside className="tarjeta-resumen">
      <h3>Resumen</h3>

      {faltaParaGratis > 0 ? (
        <p className="texto-envio">
          Te faltan {formatearPrecio(faltaParaGratis)} para el envío gratis
        </p>
      ) : (
        <p className="texto-envio envio-conseguido">¡Envío gratis!</p>
      )}

      <div
        className="barra-progreso-fondo"
        role="progressbar"
        aria-valuenow={Math.round(porcentajeProgreso)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="barra-progreso-relleno"
          style={{ width: `${porcentajeProgreso}%` }}
        />
      </div>

      <dl className="lista-resumen">
        <div className="linea-resumen">
          <dt>Unidades</dt>
          <dd>{unidades}</dd>
        </div>
        <div className="linea-resumen">
          <dt>Subtotal</dt>
          <dd>{formatearPrecio(subtotal)}</dd>
        </div>
        <div className="linea-resumen">
          <dt>Envío</dt>
          <dd>{envio === 0 ? "Gratis" : formatearPrecio(envio)}</dd>
        </div>
        <div className="linea-resumen linea-total">
          <dt>Total</dt>
          <dd>{formatearPrecio(total)}</dd>
        </div>
      </dl>

      <button
        type="button"
        className="btn-confirmar"
        onClick={onConfirmarPedido}
      >
        Confirmar pedido
      </button>
    </aside>
  );
}
