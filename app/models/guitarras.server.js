export const getGuitarras =async()=>{
  try {
    const url = `${process.env.URL_BASE}/guitarras?populate=imagen`;
    const respuesta=await fetch(url);
    // console.log(respuesta)
    if(!respuesta){
      throw new Error('Error de url')
    }
    const resultado =await  respuesta.json()
    return resultado;
    
  } catch (error) {
    throw new Error('Error en la consulta')
  }
  
}

export const getGuitarrasUrl = async(name)=>{
  try {
    const url = `${process.env.URL_BASE}/guitarras?filters[url]=${name}&populate=imagen`;
    const respuesta=await fetch(url);
    // console.log(respuesta)
    if(!respuesta){
      throw new Error('Error de url')
    }
    const resultado =await  respuesta.json()
    return resultado;
    
  } catch (error) {
    throw new Error('Error en la consulta')
  }
  
}