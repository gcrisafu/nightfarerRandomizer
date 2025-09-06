// random nightfarer

const arr = ["Executor", "Revenant", "Guardian",
"Ironeye", "Dutchess", "Recluse",
"Raider",
"Wylder"
]




document.getElementById("myButton").onclick = function() {
    const name = (math.floor(math.random(8))+ 1);
    document.getElementById("nightfarer").textContent = name;
}


const myButton = document.getElementById("myButton");
const nightfarer = document.getElementById("nightfarer");

const max = 8;
let randomNum;

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max);
    nightfarer.textContent = arr[randomNum];

}