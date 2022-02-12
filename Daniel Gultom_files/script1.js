// window.scroll({
//   top: 2500, 
//   left: 0, 
//   behavior: 'smooth' 
// });

var tCount = 0;
var j = 0;
var txt = "Welcome to my personal website! It's currently under heavy construction, but I\
 hope you'll understand. I have plans to make it super cool! I began this website from scratch \
 with very little web design experience, so thanks for being patient. I'm currently working on \
 making it more responsive, so stay tuned for more cool stuff :D";
var name = "Daniel Gultom"
var tempName = "";
var tempTxt = "";
var speed = 10;
var speedName = 100;
var speedDone = 10;
var finished = false;
var thereOrNot = false;
// var origStar = document.getElementById("star1").style.top;
// var starLoc = document.getElementById("star1").style;

function nameTyper() {
  if (j < name.length) {
    tempName += name.charAt(j);
    document.getElementById("daniel").innerHTML = tempName + '<span class="noblink-cursor"></span>';
    j++;
    setTimeout(nameTyper, speedName);
  } else {
    document.getElementById("daniel").innerHTML = tempName + '<span class="blinking-cursor"></span>';
    setTimeout(waitForABit, 2000);
    // console.log("banana");
  }
}

function waitForABit() {
  document.getElementById("daniel").innerHTML = tempName + '<span class="noborder"></span>';
  setTimeout(typeWriter, 100)
}

function typeWriter() {
  if (tCount < txt.length) {
    tempTxt += txt.charAt(tCount);
    document.getElementById("greeting").innerHTML = tempTxt + '<span class="noblink-cursor"></span>';

    tCount++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("greeting").innerHTML = tempTxt + '<span class="blinking-cursor"></span>';
  }
}

function blinkCursor() {
  if (thereOrNot) {
    document.getElementById("greeting").style.borderRight = "solid red";
    console.log("hello here");
    // thereOrNot = false;
    // setTimeout(blinkCursor, speedDone);
  } else {
    document.getElementById("greeting").style.borderRight = "";
    console.log("hello there");
    // thereOrNot = true;
    // setTimeout(blinkCursor, speedDone);
  }
  thereOrNot = !thereOrNot;
  setTimeout(blinkCursor, speedDone);

}
function makeStars(numStars) {
  var starfield = document.getElementById("starfield");
  for (i = 0; i < numStars; i++) {
    var starLeft = Math.random() * 90 + 5;
    // var starTop = Math.random() * starfield.style.height * .8 + 100;
    var starTop = Math.random() * 3000 * .5;

    console.log("bbb" + String(starfield.style.height)+"asdfasdfa");
    // console.log(starTop);
    // console.log(makeStarDiv(starLeft, starTop));
    starfield.innerHTML += makeStarDiv(starLeft, starTop);
  }
}

function makeStarDiv(horizInPercent, vertInPixels) {
  return "<div class='stars' style='width:10px;height:10px; left: "+ horizInPercent + "%; top: " + vertInPixels + "px;'></div>";
}



///////////////////////////////////////////
///////////looped section//////////////////
///////////////////////////////////////////
$(document).ready(function() {
  var numStars = parseInt(.04 * window.innerWidth);
  makeStars(numStars);
  var stars = document.getElementsByClassName("stars");
  var starLocs = [];
  getOrigLocs();
  var speedsList = [];
  getSpeeds();

  function setThings() {
    for (i = 0; i < stars.length; i++) { 
      var size = Math.random() * 3 + 1;
      stars[i].style.zIndex = "-1";
      stars[i].style.borderRadius = "50%";
      stars[i].style.width = size + "px";
      stars[i].style.height = size + "px";
      var starLeft = Math.random() * 90 + 5;
      stars[i].style.left = starLeft + "%";
      // stars[i].style.background = "radial-gradient(white 1%, black 50%)";

    }
  }
  
  setThings();
  // makeStars(100);
  function getSpeeds() {
    // var stars = document.getElementsByClassName("stars");
    // var speedsList = [];
    for (i = 0; i < stars.length; i++) { 
      speedsList.push((Math.random() * 1) + 2);

    }
    // console.log(speedsList);
  }
  
  function getOrigLocs() {
    for (i = 0; i < stars.length; i++) { 
      starLocs.push(stars[i].style.top);
    }
  }

  $(window).scroll(function(){
    for (i = 0; i < stars.length; i++) { 
      stars[i].style.top = parseInt(starLocs[i], 10) + window.scrollY/speedsList[i] + "px";
    }
  }); 

});




