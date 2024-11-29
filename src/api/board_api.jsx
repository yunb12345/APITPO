export const getProyectos = async(id,setProyects) => {
    const proyects = []
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    const responseUsersProyects = await fetch(`http://localhost:8080/api/user_proyects/proyects/${id}`, requestOptions);
    const usersProyects = await responseUsersProyects.json();
    for (const value of Object.values(usersProyects)) {
        const proyectResponse = await fetch(`http://localhost:8080/api/proyects/${value.ProyectId}`, requestOptions);
        const proyect = await proyectResponse.json();
        proyects.push({
            id:proyect.id,
            proyectName:proyect.proyectName,
            proyectDesc:proyect.proyectDesc,
            balance:value.balance,
        }
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