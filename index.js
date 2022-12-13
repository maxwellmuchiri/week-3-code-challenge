





//Declaring variables

 const title=document.querySelector(".title");
 const burrons=document.querySelector(".burrons")
//  .addEventListener("click",(x)=>{
//     console.log(x.target)
//  });
 const poster=documment.querySelector(".poster");
 const runtime=docuuument.querySelector(".runtime");
 const tickets=document.querySelector(".ticketsAv");

 

//Fetching films using the URL
//  //Declaring Variables


 
const films = 'http://localhost:3000/films'

// fetching info from
const url = 'http://localhost:3000/films'
function getFilms(){
   fetch(url)
   .then(res => res.json())
   .then(data => {
    data.stringify
//    data.forEach (film => {
//        display(film)
//    })
})
}



// getFilms()
// function display(films){
//    console.log (films.name);
//    const name =document.createElemnt ('p');
//    name.innerHTML = films.name
//    const main = getElementById("main")
//    main.append(buyticket)
//    name.addEventListener ("click", () => )
// }
