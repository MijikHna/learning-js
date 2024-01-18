// read json file
const elem = document.querySelector('#input')

const button = document.querySelector('#button');
const result = document.querySelector("#result");

elem.addEventListener('change', selectFile, false);
button.addEventListener('click', readFile, false);

let file = null;

function selectFile(event) {
  result.innerHTML = '';
  file = event.target.files[0];
}

function readFile() {
  let div = document.createElement("div");
  div.innerHTML = "JSON read from File:"
  result.appendChild(div);

  const reader = new FileReader();

  reader.addEventListener("load", function(event) {
    console.log(reader.result);

    let objects = JSON.parse(reader.result);

    console.log(objects);

    objects.forEach((object) => {
      let div = document.createElement("div");
      div.innerHTML = `${object.name}, ${object.age}, ${object.favoriteColor}`;
      result.appendChild(div);
      console.log(object);
    });
  });

  reader.readAsText(file);
}

// json object as string
const objectsAsString = `[
  {
    "name": "John",
    "age": 31,
    "favoriteColor": "blue"
  },
  {
    "name": "Jane",
    "age": 35,
    "favoriteColor": "red"
  },
  {
    "name": "Jim",
    "age": 39,
    "favoriteColor": "green"
  }
]`;

console.log(objectsAsString);

let objects = JSON.parse(objectsAsString);

console.log(objects);

let div = document.createElement("div");
div.innerHTML = "JSON as String in variable:"
result.appendChild(div);

objects.forEach((object) => {
  let div = document.createElement("div");
  div.innerHTML = `${object.name}, ${object.age}, ${object.favoriteColor}`;
  result.appendChild(div);
  console.log(object);
});
