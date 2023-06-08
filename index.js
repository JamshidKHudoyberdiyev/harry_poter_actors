// selectors

let searchName = $(".searchInput");
let cards = $(".cards");
let select = $("select");
let l = "";
// RendDom

function reRender(arry = []) {
  cards.innerHTML = "";
  arry.forEach((item) => {
    cards.innerHTML += `<div data-id="${item.id}"class="card flex p-2 gap-2 items-center bg-white w-[32%]">
        <img
          src="${item.image}"
          alt="img"
          class="card_img w-[50%]"
        />
        <div class="card_info w-[50%]">
          <h2 class="font-mono font-bold">${item.name}</h2>
          <h3 class="font-mono font-bold">${item.house}</h3>
          <h3 class="font-mono font-bold">${item.actor}</h3>
        </div>
      </div>`;
  });
}

reRender(characters);

// Search with Name
let filterName = [];

function Search(value, arry = []) {
  if (value.trim().length != 0) {
    filterName = arry.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    reRender(filterName);
  } else reRender(characters);
}

searchName.addEventListener("input", (e) => {
  let name = e.target.value;
  Search(name, characters);
  filterByHouse(l);
});

// arry unique Houese
let houses = [];
function unique(arry = []) {
  arry.forEach((item) => {
    houses.push(item.house);
  });

  houses = new Set(houses);
  houses = Array.from(houses);
}

unique(characters);

// Render house character

function renderSelect(arry = []) {
  arry.forEach((item) => {
    select.innerHTML += `
         <option value="${item}">${item}</option>`;
  });
}

select.addEventListener("change", (e) => {
  l = e.target.value;
  filterByHouse(l);
  // console.log(e.target.value);
});

function filterByHouse(housename) {
  if (searchName.value.trim().length != 0) {
    let m = filterName.filter((item) => {
      return item.house.toLowerCase().includes(housename.toLowerCase());
    });
    reRender(m);
  }
  // console.log(searchName.value.trim().length == 0);
  if (searchName.value.trim().length == 0) {
    console.log("ss");
    let m = characters.filter((item) => {
      return item.house.toLowerCase().includes(housename.toLowerCase());
    });
    reRender(m);
  }
  console.log("a");
}

renderSelect(houses);
