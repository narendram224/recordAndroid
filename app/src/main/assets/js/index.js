let intialState  =[];
const arr = [5, 1, 5, 7, 7, 5];
const countryName="Country";

const unique = [...new Set(arr)]; // [ 5, 1, 7 ]
const countryOpt = new Map([
  ['Aus', 'Austrailia'],
  ['UnitedStates',  'UnitedStates'],
  ['India', 'India'],
  ['Pakistan', 'Pakistan'],
  ['Bhutan', 'Bhutan'],
  ['Nepal', 'Nepal'],
  ['Myanmar', 'Myanmar'],
  ['SriLanka', 'Sri Lanka']
]);

const firstName = 'Jane';
console.log(`Hello ${firstName}`);

const makeSelect = (options)=>{
  let selectCountry = document.getElementById('country');
  options.forEach((value, key) => {
       var option = document.createElement("option");
     option.value = key;
     option.text = `${countryName}:${value}`;
     selectCountry.appendChild(option);
 });
 }



// calling the function for making country select input
 makeSelect(countryOpt);

// func called when We click submit btn
const  ChangeValue = (firstName="Shubh",LastName="Maurya")=>{  

  changeValueOfInputField(firstName,LastName);
}
// ChangeValue('Shubh','Maurya');


const map = new Map([
    [ 1, 'one' ],
    [ 2, 'two' ],
    [ 3, 'three' ], // trailing comma is ignored
]);

// making dyanmic list contents
var list = document.createElement("ul");
list.classList.add('listItem');
for (const [key, value] of map.entries()) {
  var anchor = document.createElement("a");
  anchor.href = "#";
  anchor.innerText = `First Name is:${value}`;
  var elem = document.createElement("li");
  elem.appendChild(anchor);
  list.appendChild(elem);
}


// for the label only
  let label = document.createElement("label");
  label.classList.add('labelClass');
  label.innerHTML = `Using template literal for making ul list:\
  \n 
  Set Data of:
   0 Index:${unique[0]},
   1 Index:${unique[1]},
   2 Index:${unique[2]}`
  document.body.appendChild(label);
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
 

//   label.htmlFor = "pets";
 
//   document.getElementById("container").appendChild(label).appendChild(select);
// }



function changeValueOfInputField (firstName,lastName){
  let firstNameField = document.getElementById('fname');
  let lastNameField = document.getElementById('lname');
  firstNameField.value=`Hello from navana ${firstName}`;
  lastNameField.value=`last name: ${lastName}`;

}