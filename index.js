let count = 0;
let runsCount = document.getElementById("runsCount");


function sixFunction(){
  count += 6;
  runsCount.textContent = count;

}
function fiveFunction(){
  count += 5;
  runsCount.textContent = count;
}
function fourFunction(){
  count += 4;
  runsCount.textContent = count;
}
function threeFunction(){
  count += 3;
  runsCount.textContent = count;
}
function twoFunction(){
  count += 2;
  runsCount.textContent = count;
}
function oneFunction(){
  count += 1;
  runsCount.textContent = count;
}

function outFunction(){
  runsCount.textContent = "Batsman scored " + count + " runs"; 
}

function tryAgain(){
  runsCount.textContent = 0;
  count = 0;
}