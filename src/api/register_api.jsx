const registrar = async(usuario) => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "username": usuario.username,
    "email": usuario.email,
    "password": usuario.password,
    "balance": 0
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      let response = await fetch("http://localhost:8080/api/users/", requestOptions);
      let jsonData = await response.json();
  
      return jsonData;

}
export default registrar;