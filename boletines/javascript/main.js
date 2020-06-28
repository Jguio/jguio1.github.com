
//obtener los elementos de la clase.close
//recorrerlos
//agregar un evento a cada uno 

//DOM

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();

        let content = document.querySelector(".content");

        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        content.classList.add("animate__fadeInDown");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "../index.html";
        },100);
        

        return false;

    })

});
