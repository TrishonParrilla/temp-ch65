console.log("Running the if statement file");

// if-statement conditions (y/n)
// sytnax
/* if (condition) {
    code to be run if the condition is True
}
*/

let result = 50;
if (result > 80) {
    console.log("you passed");
}

let result2 = 50;
if (result == result2) {
    console.log("The values are the same");
}

// ------ 
// == compare 
// case 1: 5 == 5 // true
// case 2: 5 == "5" // checks the value
// case 3: 5 === "5" // checks the value and data type


result = 50;
if(result > 40) {
    console.log ("You passed the exam");
}

else {
    console.error("You failed");
};

let waterTemp = 95;
if (waterTemp > 100) {
    console.log("The water is boiling");
}

else {
    console.log("The water is not boiling");
}

function ageCalculator(){
    let age = prompt("Enter age:");

    if (age < 13) {
        console.log("You are a child");
    }

    if (age < 21) {
        console.log("You are a teenager");
    }
    else if (age < 64) {
        console.log("You are an Adult");
    }

    else {
        console.log("You are a senior");
    }
}

function trafficLightColor() {

    let light = prompt("What light is it?");
    if (light.lowercase() == "green") {
        console.log("go");
    }

    else if(light.lowercase() == "yellow") {
        console.log("slow down");
    }

    else if(light.lowercase() == "red") {
        console.log("Stop");
    }

    else {
        console.log("Light offline");
    }

    
}

// to.LowerCase()

function moviePriceCalculator() {
    let viewerAge = prompt("How old are you?");
    if (viewerAge < 12) {
        console.log("The ticket is $5");
    }
    else if (viewerAge < 19) {
        console.log("The ticket cost is $8");
    }

    else {
        console.log("The ticket is $10");
    }
}

let userType = "Admin";

if(userType == "Admin"){
    console.log("Full access");
    document.write("Welcome admin.")
}else if(userType == "Editor"){
    console.log("Access but limited actions");
    document.write("Welcome editor.")
}else{
    console.log("You do not have access");
    document.write("Error!")
}

function weatherOutfit(){
    //console.log("Weather outfit");
    const DIV = document.getElementById("results");
    let tmp = prompt("Enter the weather");

    //clear the CSS
    DIV.classList.remove("hot","cold");

    if(tmp < 15){
        DIV.innerHTML="Jacket";
        DIV.classList.add("cold");
    }else if(tmp < 25){
        DIV.innerHTML="Sweater";
    }else{
        DIV.innerHTML="T-Shirt";
        DIV.classList.add("hot");
    }

}