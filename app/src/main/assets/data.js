var cvaPositionsArray = [
  { value: "", text: "select cva position" },
  { value: "topl", text: "top-left" },
  { value: "topr", text: "top_right" },
  { value: "topc", text: "top_center" },
  { value: "bottoml", text: "Bottom_left" },
  { value: "bottomr", text: "Bottom_left" },
  { value: "bottomc", text: "Bottom_center" }
];
var screenStateArray = [
  { value: "", text: "select screens" },
  { value: "Mainscreen-state1", text: "Mainscreen-state1" },
  { value: "Mainscreen-state2", text: "Mainscreen-state2" },
  { value: "Mainscreen-state3", text: "Mainscreen-state3" },
  { value: "Mainscreen-state4", text: "Mainscreen-state4" }
];
var urls={
    fingerUrl  :"https://assets1.lottiefiles.com/packages/lf20_Xm5U0Q.json",
     cvaUrl  :"https://assets8.lottiefiles.com/packages/lf20_7SpTx0.json",
     cvaAniUrl : "https://assets7.lottiefiles.com/packages/lf20_DXagd9.json"
}

// method which returns or manipulate Data
function getScreenArray() {
    return screenStateArray;
}
function getCVAPosition() {
    return cvaPositionsArray;
}
function getUrls() {
    return urls;
}
function getCvaUrl() {
    return urls.cvaUrl;
}
function  getCvaAnimationUrl() {
    return urls.cvaAniUrl;
}
function getfingerUrl() {
        return urls.fingerUrl;
}


// api call for ids
function fetchs() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json)).catch((e)=>{
            console.log(e); 
        })
}

function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

