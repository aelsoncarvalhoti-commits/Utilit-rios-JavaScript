async function requestToken(email, password){
    // Fetch para pegar um token. Como essa api é publica então precisa o x-api-key no header
    // 'Authorization': 'Bearer MINHA_API_KEY'
    const request = await fetch(
        'https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'reqres-free-v1' },
            body: JSON.stringify({ email, password })
        }
    )

    // Pega o json
    const data = await request.json()

    if (!request.ok) throw new Error(data.error || 'Erro no login');

    // Salva na sessionStorage
    sessionStorage.setItem('token', data.token)

    return data.token

}

requestToken("eve.holt@reqres.in", "cityslicka")
    .then(token => console.log(token))
    .catch(error => console.log(error))