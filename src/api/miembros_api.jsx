const getMiembros = async(id,setMiembros) => {
    const miembros = []
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    let response = await fetch(`http://localhost:8080/api/user_proyects/users/${id}`, requestOptions);
    let jsonData = await response.json();
    for (const value of Object.values(jsonData.body)) {
        miembros.push(
            fetch(`http://localhost:8080/api/users/${value.UserId}`, requestOptions)
                .then((response) => {
                    if (!response.ok) throw new Error(`Error fetching project ${value.UserId}`);
                    return response.json();
                })
        );
    }
    
    try {
        const resultados = await Promise.all(miembros);
        console.log(resultados); // donde estén los datos juntos
        setMiembros(resultados);
    } catch (error) {
        console.error('fallos', error);
        setMiembros([]);
    }

}

const getId = async (username) => {
    let userId = ""
    var body = JSON.stringify({
        "username": username
    });
    const requestOptions = {
        method: "POST",
        redirect: "follow",
        body:"body"
      };
      
    let response = await fetch(`http://localhost:8080/api/users/username`, requestOptions);
    let jsonData = await response.json();
    
    
    try {
        userId = jsonData;
    } catch (error) {
        console.error('fallos', error);
        userId = ""
    }
    
};

export {getMiembros, getId};