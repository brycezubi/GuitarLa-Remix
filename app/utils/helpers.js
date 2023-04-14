export const formatearPrecio = (precio)=>{
  return precio.toLocaleString('es-PE',{
    style:'currency',
    currency:'PEN'
  })
}

export const formatearFecha =(fecha)=>{
  const nuevaFecha = new Date(fecha)
  const opciones = {
    year:'numeric',
    month: 'long',
    day: '2-digit'
  }

  return nuevaFecha.toLocaleDateString('es-ES',opciones)
}

