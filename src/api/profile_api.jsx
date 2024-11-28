const getUser = async(id) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    let response = await fetch(`http://localhost:8080/api/users/${id}`, requestOptions);
    let jsonData = await response.json();
    return jsonData
}


export {getUser};