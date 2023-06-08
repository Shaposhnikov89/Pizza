let items = [
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

        price: "120 UAH"
        },
    {
        image: "img/pizza/3.png",
        name: "Chelentano",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "120 UAH"
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

        price: "120 UAH"
        },
    {
        image: "img/pizza/6.png",
        name: "Favorita",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "120 UAH"
        },
    {
        image: "img/pizza/7.png",
        name: "Cuatro formaggi",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "120 UAH"
        },
    {
        image: "img/pizza/8.png",
        name: "Peperoni",
        descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",

        price: "120 UAH"
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
    
            price: "120 UAH"
            },
        {
            image: "img/pizza/3.png",
            name: "Chelentano",
            descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",
    
            price: "120 UAH"
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
    
            price: "120 UAH"
            },
        {
            image: "img/pizza/6.png",
            name: "Favorita",
            descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",
    
            price: "120 UAH"
            },
        {
            image: "img/pizza/7.png",
            name: "Cuatro formaggi",
            descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus est provident commodi. Reprehenderit, voluptas.",
    
            price: "120 UAH"
            },
   
]
let mainMenu = document.querySelector(".main-menu");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let minimumPage = document.querySelector(".current");
let maximumPage = document.querySelector(".total");
let pageNumber = 1;
let start = 0;
let end = 5;
let minimum = Number(1);
let maximum = findMaximum();

minimumPage.innerHTML = minimum;
maximumPage.innerHTML = maximum;

function findMaximum() {
    let maximumNumber = items.length / 6;

    if (Number.isInteger(maximumNumber)) {
        return maximumNumber;
    } else {
        return Math.floor(maximumNumber) + 1;
    }
}

function createList(start, end) {
    mainMenu.innerHTML = ""

    let showItems = items.slice(start, end + 1);

    showItems.forEach(item => {
        let elem = document.createElement("div");
        elem.className = "pizza-element";
        elem.innerHTML = `
            <img src=${item.image}></img>
            <h1>${item.name}</h1>
            <p>${item.descriptions}</p>
            <p>${item.price}</p>
            <button class="menu-button" onclick="document.location='order.html'">Заказать</button>
        `

        mainMenu.append(elem)
    })
}

createList(start, end);



next.onclick = function () {
    if (pageNumber >= maximum) {
        return;
    } else {

        pageNumber++;
        start += 6;
        end += 6;
        createList(start, end)
                minimumPage.innerHTML ++;

    }
}

prev.onclick = function () {
    if (pageNumber <= 1) {
        return;
    } else {
        pageNumber--;
        start -= 6;
        end -= 6;
        createList(start, end)
        minimumPage.innerHTML --;

    }
}



