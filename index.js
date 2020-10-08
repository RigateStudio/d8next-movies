const URL = "http://www.omdbapi.com/?apikey=42d3e6f7&"

fetch(URL, { method: 'GET'})
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.error(error));