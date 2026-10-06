import { dishes } from "./data.js";

console.log(dishes);

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const loading = document.querySelector("#loading");

//popis klasa za jeftina jela
const CHEAP = ["ring-2", "ring-emerald-500"];

// izrada kartice za jelo
function createCard(dish){
    const card = document.createElement("article");
    
    card.className = "rounded-lg bg-white p-4 shadow";
    card.dataset.id = dish.id;

    const image = document.createElement("img");
    image.src = dish.image;
    image.alt = dish.name;
    image.className = "mb-3 w-full rounded";

    const name = document.createElement("h2");
    name.className = "font-semibold";
    name.textContent = dish.name;

    const price = document.createElement("p");
    price.textContent = `${dish.price} eur`

    const link = document.createElement("a");
    link.href = dish.url;
    link.className = "text-blue-700 underline"
    link.textContent = "Više o jelu";

    card.append(image,name, price, link);

    if (dish.price < 3 ){
        card.classList.add(...CHEAP);

    }
    return card;
};

function render(items){
    list.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (const item of items){
        fragment.append (createCard(item));
    }

    list.append(fragment);

    count.textContent = `Prikazana jela ${items.length}`;

    empty.classList.toggle("hidden", items.length >0);
};

const mains = dishes
    .filter(dish => dish.category === "glavno jelo")
    .sort((a,b) => a.name.localeCompare(b.name));

render(dishes);

loading.remove();