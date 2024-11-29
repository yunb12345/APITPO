const crearTransaccion = async(id,nombre,monto,comprobante,integrantes) => {
    const formdata = new FormData();
    formdata.append("proyectId", id);
    formdata.append("montoTotal", monto);
    formdata.append("nombreTransaccion", nombre);
    formdata.append("file", comprobante, URL.createObjectURL(comprobante));

    const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
    };

    const response = await fetch("http://localhost:8080/api/transacciones/", requestOptions)
    let jsonData = await response.json();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    for (const integrante of Object.values(integrantes)){
        let porcentaje = parseInt(integrante.porcentaje)
        const raw = JSON.stringify({
        "porcentaje": porcentaje,
        "TransaccioneId": jsonData.id,
        "UserId": integrante.id,
        });

        const requestOptions2 = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://localhost:8080/api/gastos/", requestOptions2)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
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

export {crearTransaccion, agregarMiembro, eliminarMiembro};