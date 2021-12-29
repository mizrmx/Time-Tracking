let timeframe = 'weekly';
const container = document.querySelector('.container');
let regularCards;

// 1. Initialize Menu
const menu = document.querySelectorAll('.menu-link');

menu.forEach(element => {
    element.addEventListener('click', menuOnClick);
});

// 2. Get JSON
let data = {}

fetch('./js/data.json')
    .then(resp => resp.json())
    .then(jsonData => {
        jsonData.forEach(element => {
            container.insertAdjacentHTML('beforeend',
                createRegularCards(element, timeframe));
        });
    });

// Function
function menuOnClick(event){
    console.log('click', event.target.innerText.toLoweCase());
    menu.forEach(element => {
        element.classList.remove('menu-active');
    });
    event.target.classList.add('menu-active');
    timeframe = event.target.innerText.toLoweCase();

    updateCards(timeframe);
}

function updateCards (timeframe){

}

function createRegularCards(element, timeframe) {
    let title = element['title'];
    let current = element['timeframes'][timeframe]['current'];
    let previous = element['timeframes'][timeframe]['previous'];

    console.log(title, current);
    return `
<div class="regular-card ${title.toLoweCase().replace(/\s/g, '')}"> 
      <div class="property-card">
        <div class="row">
          <div class="title">${title}</div>
          <div class="points">
            <div class="point"></div>
            <div class="point"></div>
            <div class="point"></div>
          </div>
        </div>

        <div class="row-2">
          <div class="hours">${current}</div>
          <div class="description">${previous}</div>
        </div>
      </div>
    </div> `
}