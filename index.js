 //Declaring variables
 let fi
 
 // fetching info from
 const url = 'http://localhost:3000/films'
 function getFilms(){
    fetch(url)
    .then(res => res.json())
    .then(data => {console.log (data)
    data.forEach (film => {
        display(film)
    })
})
}
function display(films)
