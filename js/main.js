import {komponente } from "./data.js";

console.log(komponente);

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const loading = document.querySelector("#loading");

const SKUPO = ["ring-4", "ring-red-500"];
const CHEAP = ["ring-4", "ring-emerald-500"];

function createCard(komponenta){
    const card = document.createElement("article");
    
    card.className = "rounded-lg bg-white p-4 shadow transition-shadow duration-300 overflow-hidden flex flex-col h-full";
    card.dataset.id = komponenta.id;

    const image = document.createElement("img");
    image.src = komponenta.image;
    image.alt = komponenta.name;
    image.className = "mb-3 w-full h-48 object-cover bg-gray-200";

    const name = document.createElement("h2");
    name.className = "font-bold text-lg mb-2 text-gray-800";
    name.textContent = komponenta.name;

    const price = document.createElement("p");
    price.className = "text-xl  text-gray-900 mb-4";
    price.textContent = `${komponenta.price} eura`;

    const link = document.createElement("a");
    link.href = komponenta.url;
    link.className = " mt-auto block w-full text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium transition-colors"
    link.textContent = "Detalji o komponenti";

    card.append(image,name, price, link);

    if (komponenta.price < 70 ){
        card.classList.add(...CHEAP);

    }
    if (komponenta.price > 1000 ){
        card.classList.add(...SKUPO);
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

    count.textContent = `Prikazane komponente: ${items.length}`;

    empty.classList.toggle("hidden", items.length >0);
};

const mains = komponente
    .filter(komponenta => komponenta.category === "Gpu")
    .sort((a,b) => a.name.localeCompare(b.name));

render(komponente);

loading.remove();