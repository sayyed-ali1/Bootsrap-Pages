
alert("JavaScript working hai");
document.getElementById("btnTest").addEventListener("click", function () {
  alert("Button click working");
});


const btn = document.getElementById("btnTest");
let count = 0;

btn.addEventListener("click" , function()  {

    count++;

    btn.innerHTML = "Clicked " + count + " times";
    
})

let x = 5;
let y = 7;
let z = x + y;

document.getElementById('demo1').innerHTML = "Z is equal to :" + z;

let a = 2 + 3 + "5";
let b = "5" + 2 + 3;


document.getElementById('demo3').innerHTML = + a;
document.getElementById('demo4').innerHTML = + b;

const  c = "Jhon" + "  " + "Doe";

document.getElementById('demo5').innerHTML = c;

// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "XLI";

// Add an element:
cars.push("Audiiies");

// Display the Array:
document.getElementById("demo6").innerHTML = cars; 

const item1 = {type:"car", model:"2015" , color:"white"}

item1.color = "black";
item1.owner = "Ali";

document.getElementById('demo7').innerHTML = "The Car Owner Is : " + item1.owner +  "<br>" + " The Car Color is : " + item1.color;


const hour = new Date().getHours() ;
let greeting ;

if( hour < 13)
{
    greeting = "Good Day..."
}
else {
    greeting = "Good Evening"
}

document.getElementById('demo8').innerHTML = greeting;


let day;
let date = new Date().getDay();

switch(date) {

    case 0:
    day = "Sunday" ;
    break;

    case 1:
        day = "Monday";
        break;

    case 2 :
        day = "Tuesday";
        break;
        
     case 2 :
        day = "Wednesday";
        break;   

    case 4 :
        day = "Thursday";
        break;
        
    case 5 :
        day = "Friday";
        break;
        
    case 6 :
        day = "Saturday";
      
}

document.getElementById('demo9').innerHTML = "Day is : " + day;


text = "";

let i= 3;

for (let i = 3; i<10; i++){

    text += "The Number is : " + i + "<br>";

}
document.getElementById("demo10").innerHTML = text;


text = " ";
let f = 0;
do{
    text += "The value is : " + f + "<br>";
    f++;
}

while(f < 10);

document.getElementById("demo11").innerHTML = text;


let text1 = "";

for  ( let j = 0; j < 10;   j++){

    
  
    if (j === 3){
        break;
    }
    text1 += "the value is : " + j + "<br>"
}
    document.getElementById("demo12").innerHTML = text1;




let text2 ="";

for (let c = 2; c < 10; c++   )
    {
        
       
        if (c === 6)
            { continue; }

        text2 += "the number is : " + c + "<br>"
       
    }
    document.getElementById('demo13').innerHTML = text2;
