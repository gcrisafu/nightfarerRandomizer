// random nightfarer

const arr = ["Executor", "Revenant", "Guardian",
"Ironeye", "Dutchess", "Recluse",
"Raider",
"Wylder"
]


const myButton = document.getElementById("myButton");
const nightfarer = document.getElementById("nightfarer");
const nightfarerImage = document.getElementById("nightfarerImage");
const imageArr = []

function imageLoad(){ for(let i = 0; i < 8; i++){
       imageArr.push(`<img src="nightfarer_images/${i}.png">`); 
    }    
}

imageLoad();

function pickNightfarer(){
    const value = Math.floor(Math.random() * 8); // getting a number 1 through 7 because there are 8 nightfareres but one of them is at the zero index
    document.getElementById("nightfarer").textContent = arr[value];
    nightfarerImage.innerHTML = imageArr[value];
      
}

