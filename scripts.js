let button = document.getElementById('button');
let block = document.querySelector('.content');

function loadFile(url) {
  return fetch(url).then(r => r.text())
}

button.addEventListener('click', () => {
  loadFile('file1.txt')
    .then((value) => {
      block.textContent = value;
      return loadFile('file2.txt')
    })
    .then((value) => {
      block.textContent += value;
    })
    .catch(() => {
      console.log('File not found');
    })
});