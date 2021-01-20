let intialState  =[];
const arr = [5, 1, 5, 7, 7, 5];
const unique = [...new Set(arr)]; // [ 5, 1, 7 ]

const firstName = 'Jane';
console.log(`Hello ${firstName}`);

let inputFeld = document.getElementById('fname');
console.log("the input fiel is",inputFeld);

    inputFeld.value=`Hello ${firstName}`;


const map = new Map([
    [ 1, 'one' ],
    [ 2, 'two' ],
    [ 3, 'three' ], // trailing comma is ignored
]);
var list = document.createElement("ul");
for (const [key, value] of map.entries()) {
  var anchor = document.createElement("a");
  anchor.href = "#";
  anchor.innerText = `First Name is:${value}`;

  var elem = document.createElement("li");
  elem.appendChild(anchor);
  list.appendChild(elem);
}
document.body.appendChild(list);


// document.getElementById('generate').onclick = function() {
 
//   var values = ["dog", "cat", "parrot", "rabbit"];
 
//   var select = document.createElement("select");
//   select.name = "pets";
//   select.id = "pets";
 
//   for (const val of values) {
//     var option = document.createElement("option");
//     option.value = val;
//     option.text = val.charAt(0).toUpperCase() + val.slice(1);
//     select.appendChild(option);
//   }
 
//   var label = document.createElement("label");
//   label.innerHTML = "Choose your pets: "
//   label.htmlFor = "pets";
 
//   document.getElementById("container").appendChild(label).appendChild(select);
// }
