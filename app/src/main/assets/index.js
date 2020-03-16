// window.onload(function () {
//     alert("hii");
var mousemoveornot;
var toggle = false;
document.addEventListener("DOMContentLoaded", function(event) {
  // - Code to execute when all DOM content is loaded.
  // - including fonts, images, etc.
  // load the js dyanamically
  attachlistnertoBody();
  
  loadScript("data.js", function() {
    console.log("successfully loaded data!!!", getCVAPosition());
    genrateSlector(getCVAPosition(), myFunction);
    genrateSlectorforScreens(getScreenArray());
    loadJSON(function(response) {
      var actual_JSON = JSON.parse(response);
      console.log(actual_JSON);
    });
  });
  console.log(event);
  
  setTimeout(function(ev){
        if (returnMouseMoveOrNot()) {
            // another function activated
            console.log("if condistion tru");
            forCvaAnimationCreate('cvaAniUrl');
            
              console.log("if rus move mvoe valu",);  
        } else {
          // finger goes to cva and animate
          forCvaAnimationCreate();
           console.log("else runs click ob body not doen");
           
          
        }
  }, 3000);


  

  // var p2 = document.createElement('p');
  // p2.innerHTML = "select screen";
  // document.body.prepend(p2);
  //  genrateSlectorforScreens(passedarr2,changeArray)

  //     var img = new Image(70,70);
  // img.src =
  // 'https://library.kissclipart.com/20181215/bqw/kissclipart-alert-bot-clipart-internet-bot-chatbot-robots-excl-1fde439f66faecf8.png';
  // img.style.position='absolute';
  // img.style.bottom = 10+'px';
  // img.style.right = 10+'px';
  // img.style.borderRadius="50%";
  // document.body.appendChild(img);
  // fetchs();
});

function returnMouseMoveOrNot() {
  return mousemoveornot;
 
}
function attachlistnertoBody() {
    var id1 = document.getElementById("id1");
     id1.addEventListener("mouseover",function (ev) {
        console.log("mouse movess",ev.returnValue);
        mousemoveornot = ev.returnValue;      
    },true)  
}


function loadScript(file, callback) {
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", file);
  document.getElementsByTagName("head")[0].appendChild(script);
  script.onload = function() {
    callback();
  };
}

function genrateSlectorforScreens(passedArray) {
  var screens = document.createElement("SELECT");
  screens.setAttribute("id", "screen");
  screens.addEventListener("change", function(ev) {
    changeArray();
  });
  // console.log(x);
  document.body.prepend(screens);
  var array = passedArray;
  var i = 0;
  while (i < passedArray.length) {
    console.log(array.length - 1);
    var opt = new Option(array[i].text, array[i].value);
    screens.appendChild(opt);
    i++;
  }
}
function changeArray() {
  var selctedval = document.getElementById("screen").value;
  console.log("the selected value",selctedval);
  var returnVal = firstinterface.getScreenFromScript(selctedval);
  console.log(returnVal);



  switch (document.getElementById("screen").value) {
    case "Mainscreen-state1":
      return ["id1", "id2", "id3", "id4"];
    case "Mainscreen-state2":
      return ["id5", "id6"];
    case "Mainscreen-state3":
      return ["id7", "id8"];
    case "Mainscreen-state3":
      return ["id10"];
    default:
      break;
  }
}

function genrateSlector(passedArray, myfun) {
  var x = document.createElement("SELECT");
  x.setAttribute("id", "mySelect");
  x.addEventListener("change", function(ev) {
    myfun(ev);
  });
  console.log(x);
  document.body.prepend(x);
  var array = passedArray;
  var i = 0;
  while (i < passedArray.length) {
    console.log(array.length - 1);
    var opt = new Option(array[i].text, array[i].value);
    x.appendChild(opt);
    i++;
  }
}
function myFunction(EV) {
  console.log("EVENT IS ", EV.target.value);

  if (document.getElementById("cva")) {
    // console.log("if runs cva found ");
    var element = document.getElementById("cva");
    element.parentNode.removeChild(element);
  }
  var mybody = document.getElementsByTagName("BODY")[0];
  //  var positions = offset(mybody);
  var rect = mybody.getBoundingClientRect();
  var val = document.getElementById("mySelect").value;
  var cvaPos = returnCVAPosition(val, rect);
  console.log("cva postion", cvaPos);
var img  = new Image(40,40)
//   var img = document.createElement("lottie-player",40,40);
  img.src =
//   getUrls()['cvaAniUrl']
      "https://library.kissclipart.com/20181215/bqw/kissclipart-alert-bot-clipart-internet-bot-chatbot-robots-excl-1fde439f66faecf8.png";
  img.style.position = "absolute";
  img.style.width="60px";
  img.style.height="60px";
  img.setAttribute("id", "cva");
  img.addEventListener("click", function() {
      toggle=!toggle;
    alertLoop(0);

  });
  img.style.top = cvaPos.x + "px";
  img.style.left = cvaPos.y + "px";
  img.style.borderRadius = "50%";
  img.style.background="transparent";
  img.style.zIndex = "2";
  img.setAttribute("loop", "true");
  img.setAttribute("autoplay", "true");
  document.body.appendChild(img);
}
// window.addEventListener('load', function() {
//     console.log('All assets are loaded')
// })
 

function getAlert(){

        firstinterface.showToast("this is the first toast!!!");
       var data =  firstinterface.numbers();
       alert(data);
       console.log(data);
}



function returnCVAPosition(selectedValue, eleBody) {
  switch (selectedValue) {
    case "topl":
      return { x: eleBody.top, y: eleBody.left };
    case "topr":
      return { x: eleBody.top, y: eleBody.right - 50 };
    case "topc":
      return { x: eleBody.top, y: eleBody.right / 2 };
    case "bottoml":
      return { x: eleBody.bottom, y: eleBody.top };
    case "bottomc":
      return { x: eleBody.bottom, y: eleBody.right / 2 };
    case "bottomr":
      return { x: eleBody.bottom, y: eleBody.right - 50 };
    default:
      break;
  }
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(rect);
  return {
    bottom: rect.bottom - rect.height / 1.4 + scrollTop,
    right: parseInt(rect.right / 2) + scrollLeft
  };
}

// // var img ;
function ana(par) {
  var divs = document.getElementById(par);
  var parent = document.getElementById(par).parentNode;
  var positions = offset(divs);
  console.log(positions, divs, parent);
  // setTimeout(() => {
  //     setTimeout(() => {
  //         document.getElementById(par).parentNode.removeChild(img);
  //     }, 1000);
  var img = document.createElement("lottie-player");
  img.src = "https://assets1.lottiefiles.com/packages/lf20_Xm5U0Q.json";
  img.style.width = 55;
  img.style.height = 55;
  img.style.background = "transparent";
  img.style.position = "absolute";
  img.style.top = positions.bottom + "px";
  img.style.left = positions.right + "px";
  img.style.borderRadius = "50%";
  img.style.zIndex = "3 ";
  img.setAttribute("loop", "true");
  img.setAttribute("autoplay", "true");

  // var img = new Image(55,55);
  // img.src =
  // 'https://i.ibb.co/stJJLzB/finger.png';
  // img.style.width=55;
  // img.style.height=55;
  // img.style.position='absolute';
  // img.style.top = positions.bottom+'px';
  // img.style.left = positions.right+'px';
  // img.style.borderRadius="50%";
  // img.style.zIndex ="2";

  parent.insertBefore(img, divs);
  // }, 2000);

  // document.getElementById(par).appendChild(img);
}




function createILottlieImages(positions,url,id) {
    img = document.createElement("lottie-player");
    img.src =url
      // 'https://i.ibb.co/stJJLzB/finger.png';
    //   "https://assets1.lottiefiles.com/packages/lf20_Xm5U0Q.json";
    img.setAttribute("id",id);
    img.style.position = "absolute";
    img.style.width = "55px";
    img.style.height = "55px";
    img.style.top = positions.bottom + "px";
    img.style.left = positions.right + "px";
    img.style.borderRadius = "50%";
    img.style.zIndex = "5";
    img.style.background = "transparent";
    img.setAttribute("loop", "true");
    img.setAttribute("autoplay", "true");
    return img;
}

function alertLoop(i) {
var selctedval = document.getElementById("screen").value;
  console.log("the selected value",selctedval);
  var returnVal = firstinterface.getScreenFromScript(selctedval);
  var idsArray = changeArray();
  if (idsArray[i] && toggle) {
    console.log(idsArray[i]);
    setTimeout(function() {
      var div = document.getElementById(idsArray[i]);
      var positions = offset(div);
      var parent = document.getElementById(idsArray[i]).parentNode;
     var lottieImage = createILottlieImages(positions,getUrls()['fingerUrl'],"finger");
        parent.insertBefore(lottieImage, div);
      forCvaAnimationCreate('cvaAniUrl');
      // document.getElementById(idsArray[i]).appendChild(img);
      setTimeout(() => {
        var cvaa  =document.getElementById("finger") ; 
        document.getElementById(idsArray[i]).parentNode.removeChild(cvaa);
        // console.log(document.getElementById("cva").removeChild);
         var cvaani  =document.getElementById("cvaAni") ; 
         document.getElementById("cvaAni").parentNode.removeChild(cvaani);

      }, 1000);
      alertLoop(i + 1);
    }, 2000);
  }
}


function forCvaAnimationCreate(imgur) {
    var divs = document.getElementById("cva");
    var parent = document.getElementById("cva").parentNode;
    var rect = divs.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(rect);
    // var posTosetAnimation  = offset(divs);
    console.log("postion of cva",rect);
    var positions = {bottom:rect.y+3,right:rect.x+3};
    
     var lottie =  createILottlieImages(positions,getUrls()[imgur],"cvaAni");
     parent.insertBefore(lottie, divs);
  }