const apiKey = prompt("Entre ta clé d'API :");
const moviecards = document.querySelector('#moviecards');

const showMovies = (movies) => {
  console.log(movies);
  movies.forEach(movie => {
    moviecards.innerHTML += `
    <div class="card" style="width:15rem;height:25rem;margin:60px 25px 30px 25px">
      <img class="card-img-top" src="${movie['Poster']}" alt="Card image cap" style="width:auto;max-width:25rem;height:auto;max-height:15rem;background-size:contain;object-fit:none;">
      <div class="card-body">
        <h5 class="card-title" style="color:black;font-family: 'DM Sans', sans-serif;text-overflow: ellipsis;overflow:hidden;white-space:nowrap;">${movie['Title']}</h5>
        <h6 class="card-text" style="color:black;font-family: 'DM Sans', sans-serif;">${movie['Year']} / ID: ${movie.imdbID}</h6>
        <button class="btn btn-outline-warning" id="readmore" style="font-family: 'DM Sans', sans-serif;margin-top:5px">Read more</button>
      </div>
    </div>
  `
  });

  const readMore = () => {
    movieinfo = document.getElementById('readmore')

  }

}

const searchWithAPI = (moviecard) => {

  result = document.getElementById("moviefind").value;
  fetch(`http://www.omdbapi.com/?s=${result}&apikey=${apiKey}`)
    .then((response) => response.json())
    .then((response) => showMovies(response['Search']))
    .catch((error) => console.error(error))

};

document.getElementById("submit").onclick = () => {
    searchWithAPI();
}
