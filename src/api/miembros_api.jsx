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

const agregarMiembro = async (id,username) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": username
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    let response = await fetch("http://localhost:8080/api/users/username", requestOptions);
    let jsonData = await response.json();
    
    const raw1 = JSON.stringify({
        "UserId": jsonData.id,
        "ProyectId": id,
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

const eliminarMiembro = async (id,username) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": username
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    let response = await fetch("http://localhost:8080/api/users/username", requestOptions);
    let jsonData = await response.json();
    
    const myHeaders2 = new Headers();
    myHeaders2.append("Content-Type", "application/json");

    const raw2 = JSON.stringify({
    "userid": jsonData.id,
    "proyectid": id
    });

    const requestOptions2 = {
    method: "DELETE",
    headers: myHeaders,
    body: raw2,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/user_proyects/", requestOptions2)

    return jsonData;
    
};

export {getMiembros, agregarMiembro, eliminarMiembro};