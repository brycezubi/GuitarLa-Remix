export const getBlog= async()=>{
  try {
    const url = `${process.env.URL_BASE}/blogs?populate=image`;
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

export const getBlogUrl= async(name)=>{
  try {
    const url = `${process.env.URL_BASE}/blogs?filters[url]=${name}&populate=image`;
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


