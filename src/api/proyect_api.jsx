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

export const getTransaccionByProyectId = async(id) => {
  /*
   const dataTransaccion = [
        {
            id: 1,
            nameTransaccion:'Pago rueda',
            date: '"2015-03-25"',
            value: 321,
            comprobante:"default",
            participantes:[
                {
                    nombre:"Bam",
                    porcentaje:50,
                },
                {
                    nombre:"shkhs",
                    porcentaje:50,
                },
            ],
        },
  ]
  */
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  const transaccionResponse = await fetch(`http://localhost:8080/api/transacciones/proyects/${id}`, requestOptions); //todas las transacciones del proyecto
  const transacciones = await transaccionResponse.json();
  const data = await Promise.all(
    transacciones.map(async (transaccion) => {
      // Obtener los gastos relacionados con la transacción
      const gastosResponse = await fetch(
        `http://localhost:8080/api/gastos/transaccion/${transaccion.id}`, 
        requestOptions
      ); // todos los gastos de esa transaccion
      const gastos = await gastosResponse.json();

      // Mapear los gastos para obtener información de los usuarios
      const participantesB = await Promise.all(
        (Array.isArray(gastos) ? gastos : []).map(async (gasto) => {
          const userResponse = await fetch(
            `http://localhost:8080/api/users/${gasto.UserId}`,
            requestOptions
          );
          const user = await userResponse.json();

          return {
            nombre: user.username || "Desconocido",
            porcentaje: gasto.porcentaje,
          };
        })
      );

      // Retornar los datos de la transacción con sus participantes
      return {
        id:transaccion.id,
        nameTransaccion: transaccion.nombreTransaccion,
        value:transaccion.montoTotal,
        date: transaccion.createdAt,
        comprobante: transaccion.imageUrl,
        participantes: participantesB,
      };
    })
  );
  return data;
}