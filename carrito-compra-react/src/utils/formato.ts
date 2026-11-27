const formateadorMoneda = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function formatearPrecio(valor: number): string {
  return formateadorMoneda.format(valor);
}
