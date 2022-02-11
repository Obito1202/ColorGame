let a=[];
for(let i=1;i<=6;i++){
a[i]=document.getElementById(i);
}
// console.log(a[1]);
// a[0].innerHTML = "Hll vaScript";
// a.setAttribute("background-color","rgb(255, 255, 255)")
//var randomColor = Math.floor(Math.random()*16777215).toString(16);
// a[0].style.backgroundColor = "#"+randomColor;
let box=document.getElementsByClassName('box');

let tryagain=document.getElementById("try");


document.querySelector("#refresh").addEventListener("click", function (){
    location.reload();
  })

let a1=document.getElementById("1");
var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
a1.style.backgroundColor= "#"+randomColor1;
a1.innerHTML=randomColor1;

let a2=document.getElementById("2");
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
a2.style.backgroundColor= "#"+randomColor2;
a2.innerHTML=randomColor2;

let a3=document.getElementById("3");
var randomColor3 = Math.floor(Math.random()*16777215).toString(16);
a3.style.backgroundColor= "#"+randomColor3;
a3.innerHTML=randomColor3;

let a4=document.getElementById("4");
var randomColor4 = Math.floor(Math.random()*16777215).toString(16);
a4.style.backgroundColor= "#"+randomColor4;
a4.innerHTML=randomColor4;

let a5=document.getElementById("5");
var randomColor5 = Math.floor(Math.random()*16777215).toString(16);
a5.style.backgroundColor= "#"+randomColor5;
a5.innerHTML=randomColor5;

let a6=document.getElementById("6");
var randomColor6 = Math.floor(Math.random()*16777215).toString(16);
a6.style.backgroundColor= "#"+randomColor6;
a6.innerHTML=randomColor6;

let final=eval("randomColor"+Math.floor(Math.random()*6+1));

let correct=final;

let question=document.getElementById("ques");
question.innerHTML="#"+correct;


let useCapture=false;



a1.addEventListener("click", function f() {
    // alert("Hello World!");
    if(randomColor1!=correct) {
        a1.style.backgroundColor="rgba(216, 162, 162, 0)";
         tryagain.style.display="inline";
         tryagain.style.color="#"+randomColor1;
         
    }
   else{
    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = "#"+correct;
      }
      question.style.backgroundImage="#"+correct;
      tryagain.style.display="inline"; 
      tryagain.innerHTML="WELL PLAYED";
      tryagain.style.color="#"+correct;
      useCapture=false;
     
   } 
},useCapture);



a2.addEventListener("click", function() {
    // alert("Hello World!");
    if(randomColor2!=correct) {
        a2.style.backgroundColor="rgba(216, 162, 162, 0)";
     
        tryagain.style.display="inline";
        tryagain.style.color="#"+randomColor2;
       

    }
    else{
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor =  "#"+correct;
          }
          question.style.backgroundImage="#"+correct;
       //   tryagain.style.display="inline";
       tryagain.style.display="inline"; 
       tryagain.innerHTML="WELL PLAYED";
       tryagain.style.color="#"+correct;
       useCapture=false;
       } 
},useCapture);


a3.addEventListener("click", function() {
    // alert("Hello World!");
    if(randomColor3!=correct) {
        a3.style.backgroundColor="rgba(216, 162, 162, 0)";  
        tryagain.style.display="inline"; 
        tryagain.style.color="#"+randomColor3;
    }
    else{
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor =  "#"+correct;
          }
          question.style.backgroundImage="#"+correct;
          tryagain.style.display="inline"; 
          tryagain.innerHTML="WELL PLAYED";
          tryagain.style.color="#"+correct;
          useCapture=false;

       } 
},useCapture);



a4.addEventListener("click", function() {
    // alert("Hello World!");
    if(randomColor4!=correct) {
        a4.style.backgroundColor="rgba(216, 162, 162, 0)"; 
        tryagain.style.display="inline"; 
        tryagain.style.color="#"+randomColor4;
    }
    else{
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor =  "#"+correct;
          }
          question.style.backgroundImage="#"+correct;
          tryagain.style.display="inline"; 
          tryagain.innerHTML="WELL PLAYED";
          tryagain.style.color="#"+correct;
          useCapture=false;
       } 
},useCapture);

a5.addEventListener("click", function() {
    // alert("Hello World!");
    if(randomColor5!=correct) {
        a5.style.backgroundColor="rgba(216, 162, 162, 0)";
        tryagain.style.display="inline";
        tryagain.style.color="#"+randomColor5;
    }
    else{
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor =  "#"+correct;
          }
          question.style.backgroundImage="#"+correct;
          tryagain.style.display="inline"; 
          tryagain.innerHTML="WELL PLAYED";
          tryagain.style.color="#"+correct;
          useCapture=false;
       } 
},useCapture);

a6.addEventListener("click", function() {
    // alert("Hello World!");
    if(randomColor6!=correct) {
        a6.style.backgroundColor="rgba(216, 162, 162, 0)";
        tryagain.style.display="inline";
        tryagain.style.color="#"+randomColor6;
    }
    else{
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor =  "#"+correct;
          }
          question.style.backgroundImage="#"+correct;
          tryagain.style.display="inline"; 
          tryagain.innerHTML="WELL PLAYED";
          tryagain.style.color="#"+correct;
          useCapture=false;
       } 
},useCapture);