 //Declaring Variables
 
 const films = 'http://localhost:3000/films'

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
function display(films){
    console.log (films.name);
    const name =document.createElemnt ('p');
    name.innerHTML = films.name
    const main = getElementById("main")
    main.append(buyticket)
    name.addEventListener ("click", () => )
}
