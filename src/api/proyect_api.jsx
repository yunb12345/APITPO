export const getProyect = async(id,setProyectName,setProyectDesc) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    let response = await fetch(`http://localhost:8080/api/proyects/${id}`, requestOptions);
    let jsonData = await response.json();
    setProyectName(jsonData.proyectName);
    setProyectDesc(jsonData.proyectDesc);
    return jsonData;
}

export const updateProyect = async(id,proyectName,proyectDesc) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "proyectName": proyectName,
    "proyectDesc": proyectDesc
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  await fetch(`http://localhost:8080/api/proyects/${id}`, requestOptions);
}

export const deleteProyect = async(id) => {
  const requestOptions = {
    method: "DELETE",
    redirect: "follow"
  };
  
  let response = await fetch(`http://localhost:8080/api/proyects/${id}`, requestOptions);
  return response;
}