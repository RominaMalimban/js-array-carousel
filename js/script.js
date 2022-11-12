// Consegna:
// Dato un array contenente una lista di cinque immagini creare un carosello come nello screenshot allegato.


// creo variabile e salvo il contenuto del padre:
let wrapper = document.querySelector(".items-container");

// creo array per nome immagini:
let arrImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// dichiaro la variabile immagine
let img;

// devo creare 5 immagini:
for (let i = 0; i < arrImg.length; i++){

    // assegno un valore alla variabile immagine:
    img = document.createElement("img");
    
    // aggiungo al padre l'elemento img:
    wrapper.append(img);
    img.classList.add("item");
    img.classList.add("image")

    // aggiungo il path: 
    img.src = `img/${arrImg[i]}`;
    console.log(img);

}

// creo una variabile e ci salvo i div item e associo alla prima immagine la classe active:
let divItem = document.getElementsByClassName("item");
divItem[0].classList.add("active");

// creo variabile dell'indice:
let activeItem = 0;

// creo le variabili per i bottoni next e prev:
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// creo funzione per click su bottone next:
next.addEventListener("click",
    function(){

        // creo la condizione per passare la classe active: 
        if(activeItem < divItem.length -1){
            divItem[activeItem].classList.remove("active");
            activeItem++;
            divItem[activeItem].classList.add("active");
        };
        // nascondo il bottone next:
        if(activeItem == divItem.length - 1){
            next.style.display = "none";
        };

        // faccio comparire il bottone prev:
        if(activeItem > 0){
            prev.style.display = "block";
        }
    }
);

// creo funzione per click su bottone prev: 
prev.addEventListener("click",
    function(){
        if(activeItem > 0){
            divItem[activeItem].classList.remove("active");
            activeItem--;
            divItem[activeItem].classList.add("active"); 
        }
        
        // faccio scomparire il bottone prev:
        if(activeItem == 0){
            prev.style.display = "none";
            next.style.display = "block";
        }
    }   
);
