let button = document.getElementById('button');
let block = document.querySelector('.content');

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'cities.json');
  xhr.send();
  xhr.addEventListener('load', () => {

    let array = JSON.parse(xhr.response);
    let number = function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    };

    block.innerHTML = (array[number(0, 49)].name);
    console.log(array);
  })
});