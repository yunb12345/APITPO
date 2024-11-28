const proyect = async(id,setProyect) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    let response = await fetch(`http://localhost:8080/proyects/proyects/${id}`, requestOptions);
    let jsonData = await response.json();
    return jsonData;
}

export default proyect;