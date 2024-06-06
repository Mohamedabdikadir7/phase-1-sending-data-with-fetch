// here i am loading the dom content
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
// // seeMovie function  Create and display a movie card for each movie object
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

  <button>  <a href="#" class="btn btn-primary">delete</a> </button> 
  </div>
</div>`
// Append the new div (movie card) to the row element
row.appendChild(div)
 div.querySelector('button').addEventListener('click', function(){
  div.remove()
  //console.log('i am clicked')
  deletedata(movie.id);
 })
 
function deletedata() {
  fetch (`http://localhost:3000/movies/${movie.id}`, {
  method: 'DELETE',
  headers: {
     "Content-Type": "application/JSON"
  },
 
})
}
}

//deletedata();
// post method
document.querySelector('form').addEventListener("submit",PostMovie)
function PostMovie(e){
  e.preventDefault()
  //console.log('add movies')

 
 let title = document.getElementById('title')
  let plot = document.getElementById('plot')
  let poster = document.getElementById('poster')





  

const movieobject = {
  Title:title.value,
  Plot:plot.value,
  Poster:poster.value
  

}

fetch ("http://localhost:3000/movies",{
  method: 'POST',
  header: {
     "Content-Type": "application/JSON"
  },
  body: JSON.stringify(movieobject)
})

}

// searching movie
document.getElementById('searchButton').addEventListener('click', function() {
  const movieName = document.getElementById('movieName').value;
  searchMovie(movieName);
});
function searchMovie(name) {
  fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(movies => {
          const results = movies.filter(movie => movie.Title.toLowerCase().includes(name.toLowerCase()));
          displayResults(results);
      });
}

function displayResults(results) {
  const resultsContainer = document.getElementById('card');
  resultsContainer.innerHTML = ''; // Clear previous results

  if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No movies found.</p>';
      return;
  }

  results.forEach(seeMovie);
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
//}