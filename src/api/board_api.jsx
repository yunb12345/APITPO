export const getProyectos = async(id,setProyects) => {
    const proyects = []
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    let response = await fetch(`http://localhost:8080/api/user_proyects/proyects/${id}`, requestOptions);
    let jsonData = await response.json();
    for (const value of Object.values(jsonData)) {
        proyects.push(
            fetch(`http://localhost:8080/api/proyects/${value.ProyectId}`, requestOptions)
                .then((response) => {
                    if (!response.ok) throw new Error(`Error fetching project ${value.ProyectId}`);
                    return response.json();
                })
        );
    }
    
    try {
        const resultados = await Promise.all(proyects);
        console.log(resultados); // donde estén los datos juntos
        setProyects(resultados);
    } catch (error) {
        console.error('fallos', error);
        setProyects([]);
    }

}
export const crearProyecto = async (userId,nombre,descripcion) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "proyectName": nombre,
      "proyectDesc": descripcion
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    let response = await fetch("http://localhost:8080/api/proyects/", requestOptions)
    if (!response.ok) {
        throw new Error('Error al crear el proyecto');
    }
    let jsonData = await response.json();
    console.log(jsonData);
    
    const raw1 = JSON.stringify({
    "UserId": userId,
    "ProyectId": jsonData.id,
    "balance": 0
    });

    const requestOptions1 = {
    method: "POST",
    headers: myHeaders,
    body: raw1,
    redirect: "follow"
    };
    await fetch("http://localhost:8080/api/user_proyects/", requestOptions1);
    

    return jsonData;
};