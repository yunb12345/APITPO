const board = async(id,setProyects) => {
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
export default board;