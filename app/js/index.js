let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");


let images = [ {
    image: "img/pizza/1.png",
    name: "Margarita",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",
    price: "128 UAH"
},
{
    image: "img/pizza/2.png",
    name: "Napolitana",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

    price: "127 UAH"
    },
{
    image: "img/pizza/3.png",
    name: "Chelentano",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

    price: "133 UAH"
    },
{
    image: "img/pizza/4.png",
    name: "Griega",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

    price: "120 UAH"
    },
{
    image: "img/pizza/5.png",
    name: "Capreze",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

    price: "145 UAH"
    },
{
    image: "img/pizza/6.png",
    name: "Favorita",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

    price: "100 UAH"
    },
{
    image: "img/pizza/7.png",
    name: "Cuatro formaggi",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

    price: "150 UAH"
    },
{
    image: "img/pizza/8.png",
    name: "Peperoni",
    descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

    price: "140 UAH"
    },

    {
        image: "img/pizza/1.png",
        name: "Margarita",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",
        price: "120 UAH"
    },
    {
        image: "img/pizza/2.png",
        name: "Napolitana",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "160 UAH"
        },
    {
        image: "img/pizza/3.png",
        name: "Chelentano",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "127 UAH"
        },
    {
        image: "img/pizza/4.png",
        name: "Griega",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "117 UAH"
        },
    {
        image: "img/pizza/5.png",
        name: "Capreze",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "110 UAH"
        },
    {
        image: "img/pizza/6.png",
        name: "Favorita",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "140 UAH"
        },
    {
        image: "img/pizza/7.png",
        name: "Cuatro formaggi",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "125 UAH"}];

let pizzaName = document.querySelector(".pizza-description");
let pizzaPrice = document.querySelector(".pizza-price");
let counter = 0;
let source = document.querySelector(".img-source");

function loadingPage(){
    source.src.onload = function() {images[counter].image};
    pizzaName.innerHTML.onload = function() {images[counter].name};
    pizzaPrice.innerHTML.onload = function() {images[counter].price}
    counter++
}

loadingPage();







prevButton.onclick = function(){
    
    console.log("prev");
    if (counter <= 0){
        return
    } else {
        counter--; 
    source.src= images[counter].image;
    pizzaName.innerHTML = images[counter].name;
    pizzaPrice.innerHTML = images[counter].price;
    }}

nextButton.onclick=  function(){
    
    console.log("next");
    if (counter >= images.length) {return}
    else{
        counter++;
        source.src= images[counter].image;
        pizzaName.innerHTML = images[counter].name;
        pizzaPrice.innerHTML = images[counter].price;
    
    }
}


