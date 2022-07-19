/*Add your JavaScript here*/

var Rustichescore=0; // store the Rustiche score
var Vermicelliscore=0; // store the Vermicelli score

var questioncount=0; // store the number of answers clicked on

var result=document.getElementById("result");

var q1a1=document.getElementById("q1a1");
q1a1.addEventListener("click", Vermicelli);

var q1a2=document.getElementById("q1a2");
q1a2.addEventListener("click", Rustiche);

var q2a1=document.getElementById("q2a1");
q2a1.addEventListener("click", Vermicelli);

var q2a2=document.getElementById("q2a2");
q2a2.addEventListener("click", Rustiche);

var q3a1=document.getElementById("q3a1");
q3a1.addEventListener("click", Rustiche);

var q3a2=document.getElementById("q3a2");
q3a2.addEventListener("click", Vermicelli);

var  restart=document.getElementById("restart");
restart.addEventListener("click", resetbutton);

function Vermicelli (){
Vermicelliscore += 1;
  questioncount += 1;
  console.log("questioncount = " + questioncount + "Vermicelliscore =" + Vermicelliscore );
  if (questioncount ==3) {
    console.log("This quiz is done!")
    updateresult();
  }
}

function Rustiche () {
Rustichescore += 1;
questioncount += 1;
  console.log("questioncount =" + questioncount + "Rustichescore =" + Rustichescore);
  if (questioncount ==3) {
    console.log("This quiz is done!")
  updateresult();
  }
}

function updateresult(){
    if (Vermicelliscore >=2){
result.innerHTML = "You are Vermicelli! Originating in the 14th century, this pasta is typically used in salads.";
console.log("You are Vermicelli! Originating in the 14th century, this pasta is typically used in salads.");
} else if (Rustichescore >=2) {
result.innerHTML = "You are Rustiche! Native to Italy, this pasta is used in a wide range of dishes.";
  console.log("You are Rustiche! Native to Italy, this pasta is used in a wide range of dishes.");
}
}

function resetbutton(){
Rustichescore=0;
Vermicelliscore=0;
  questioncount=0;
  document.getElementById("result").innerHTML = "Your result is...";
}



// update quiz result
