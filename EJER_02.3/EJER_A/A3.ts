function calcularPrecioFinal(
    precio: number,
    iva: number,
    descuento?: number
): number {

const precioConIva = precio + (precio * iva /100)
const precioFinal = precioConIva - (precioConIva * (descuento?? 0) /100)

return precioFinal
}

calcularPrecioFinal(100, 21);      // 121
calcularPrecioFinal(100, 21, 10);  // 108.9