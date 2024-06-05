// here i am loading the html content
document.addEventListener('DOMContentLoaded' ,function(){
    getMovies()
    })
    // now we fetch the api 
    // the api below we willl be getting from the json file
    function getMovies() {
        fetch ('http://localhost:3000/movies')
        .then (res => res.json())
        .then (movies => {
            movies.forEach(seeMovie)
        }
            
        )}
// see movie function here we are getting the movie
function seeMovie(movie){
   // console.log(movie)
    let row = document.getElementById("card");
    let div = document.createElement("div");
    div.classList.add('col-3')
    div.innerHTML = `<div class="card">
    <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}.</p>
      <a href="#" class="btn btn-primary">watch</a>
    </div>
  </div>`

  row.appendChild(div)
}

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