"use strict";


window.addEventListener('load',initialize);
let slcCountry, data, divFlag, divDarters;

function initialize(){
   data = JSON.parse(dataDart); 
seeding();
slcCountry.addEventListener('change',showFlag);
showFlag();
}
function seeding(){   
 console.log('seeding');
 console.log(data);
 slcCountry = document.getElementById('slcCountry');
//get countries from data
const countries = Object.keys(data);
console.log(countries);
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.innerText = country;
        slcCountry.appendChild(option);
    });
}
function showFlag(){
    console.log('showFlag');
    divFlag = document.getElementById('divFlag');
    const country = slcCountry.value;
    const flag = document.createElement('img');
    flag.src = `img/Flags/${country}.gif`;
    divFlag.innerHTML = '';
    divFlag.appendChild(flag);
    showPlayers(country);
}
function showPlayers(country){
    divDarters = document.getElementById('divDarters');
    divDarters.innerHTML = '';
    divDarters.classList.add('grid-container');
    console.log(data[country]);
    data[country].Players.forEach(darter => {
        console.log(darter);
        const divDarter = document.createElement('div');
        divDarter.classList.add('mt-5');
        divDarter.innerText = darter.name;
        const img = document.createElement('img');
        img.src = `img/Players/${darter.image}`;
        divDarter.appendChild(img);
        divDarters.appendChild(divDarter);
    });
}

