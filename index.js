// here i am loading the html content
document.addEventListener('DOMContentLoaded' ,function(){
    getMovies()
    })
    // now we fetch the api 
    // the api below we will be getting from the json file that we have
    function getMovies() {
        fetch ('http://localhost:3000/movies')
        .then (res => res.json())
        .then (movies => {
            movies.forEach(seeMovie)
        }
            
        )}
// // seeMovie Create and display a movie card for each movie object
function seeMovie(movie){
   // console.log(movie)
    let row = document.getElementById("card");
    let div = document.createElement("div");
    div.classList.add('col-3')
    //Set the inner HTML of the div to the movie card structure, using movie data
    div.innerHTML = `<div class="card">
    <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}.</p>
      <a href="#" class="btn btn-primary">watch</a>
    </div>
  </div>`
// Append the new div (movie card) to the row element
  row.appendChild(div)
}
document.getElementById('searchButton').addEventListener('click', function() {
    // Get the search input value
    let searchTitle = document.getElementById('searchTitle').value.toLowerCase();

    // Clear previous search results
   // document.getElementById('card').innerHTML = '';

    // Search and display movies matching the search title
    movies.filter(movie => movie.Title.toLowerCase().includes(searchTitle)).forEach(seeMovie);
});

// function getMovies() {
// fetch ('http://localhost:3000/movies')
// .then (res => res.json())
// .then (movies => {
//     movies.forEach(seeMovie)
// }
    
// )}

//document.addEventListener('DOMContentLoaded' ,function(){
//getMovies()
//})