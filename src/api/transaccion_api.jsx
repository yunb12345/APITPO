const crearTransaccion = async(id,nombre,monto,comprobante,integrantes,token) => {
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

    const response = await fetch("http://localhost:8080/api/transacciones/", requestOptions);
    let jsonData = await response.json();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt", token);

    const promises = integrantes.map(async (integrante) => {
        const porcentaje = parseInt(integrante.porcentaje);
        const balance = (monto * porcentaje) /100;

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

        await fetch("http://localhost:8080/api/gastos/", requestOptions2)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

        const raw2 = JSON.stringify({
          "UserId": integrante.id,
          "ProyectId": id,
          "balance": balance
        });

        const requestOptions3 = {
          method: "PUT",
          headers: myHeaders,
          body: raw2,
          redirect: "follow"
        };

        await fetch("http://localhost:8080/api/user_proyects/", requestOptions3)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

        const requestOptions4 = {
          method: "GET",
          redirect: "follow"
        };
        
        const response1 = await fetch(`http://localhost:8080/api/users/${integrante.id}`, requestOptions4);
        const userData = await response1.json();
        const newBalance = userData.balance + balance;
        
        const newUserData = {
          username:userData.username,
          email:userData.email,
          balance:newBalance
        }
        const raw3 = JSON.stringify(newUserData);
        const requestOptions5 = {
          method: "PUT",
          headers: myHeaders,
          body: raw3,
          redirect: "follow"
        };
        
        await fetch(`http://localhost:8080/api/users/${integrante.id}`, requestOptions5);
    });
    await Promise.all(promises);
}

const agregarMiembro = async (token,id,username) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt", token);
    
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

const eliminarMiembro = async (token,id,username) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt", token);

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
const getTransaccionByUserId = async(id) => {
  //traemos todos los gastos del usuario para obtener la informacion de la transaccion
  //ej
  /*
  [
     {
      id: 1,
      projectTitle: 'Proyecto1',
      transactionName:"pago rueda",
      date: '"2015-03-25"',
      value: 321,
      comprobante: "test"
    },
  ]
  */
  const data = [];

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  const response = await fetch(`http://localhost:8080/api/gastos/user/${id}`, requestOptions);
  const gastos = await response.json();
  for (const gasto of gastos) {
    const transactionResponse = await fetch(
      `http://localhost:8080/api/transacciones/${gasto.TransaccioneId}`,
      requestOptions
    );
    const transaction = await transactionResponse.json();

    const proyectResponse = await fetch(`http://localhost:8080/api/proyects/${transaction.proyectId}`,requestOptions);
    const proyect = await proyectResponse.json();
    // Formatear la información y agregarla a 'data'
    data.push({
      id: transaction.id,
      projectTitle: proyect.proyectName, // Reemplaza por la propiedad real si es diferente
      transactionName: transaction.nombreTransaccion,
      date: transaction.updatedAt,
      value: transaction.montoTotal,
      comprobante: transaction.imageUrl,
    });
  }
  return data;
}
export {crearTransaccion, agregarMiembro, eliminarMiembro,getTransaccionByUserId};