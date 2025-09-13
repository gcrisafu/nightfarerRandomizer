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

// SCALING TABLE

const container = document.getElementById("scalings");

const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const table = document.createElement("table");

table.appendChild(thead);
table.appendChild(tbody);
container.appendChild(table);

const headerRow = document.createElement("tr");
const attributes = ["NAME", "STR", "DEX", "INT", "FAI", "ARC"];

attributes.forEach(attributeText => {
    const th = document.createElement("th");
    th.textContent = attributeText;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);

const tableData = [
    { name: "Executor", STR: "C", DEX: "S", INT: "D", FAI: "D", ARC:"S"},
    { name: "Revenant", STR: "C", DEX: "C", INT: "B", FAI: "S", ARC:"B"},
    { name: "Guardian", STR: "B", DEX: "C", INT: "D", FAI: "C", ARC:"C"},
    { name: "Ironeye", STR: "C", DEX: "A", INT: "D", FAI: "D", ARC:"B"},
    { name: "Dutchess", STR: "D", DEX: "B", INT: "A", FAI: "B", ARC:"C"},
    { name: "Recluse", STR: "D", DEX: "C", INT: "S", FAI: "S", ARC:"C"},
    { name: "Raider", STR: "S", DEX: "C", INT: "D", FAI: "D", ARC:"C"},
    { name: "Wylder", STR: "A", DEX: "B", INT: "C", FAI: "C", ARC:"C"}
    ];

function displayRowByName(name) {
    tbody.innerHTML = ""; // clears old row(s)

    const rowData = tableData.find(item => item.name === name);

    if (rowData) {
        const bodyRow = document.createElement('tr');
        for (const key in rowData) {
            const td = document.createElement('td');
            td.textContent = rowData[key];
            bodyRow.appendChild(td);
        }
        tbody.appendChild(bodyRow);
    }
}

function pickNightfarer(){
    const value = Math.floor(Math.random() * arr.length);
    const chosen = arr[value];
    
    nightfarer.textContent = chosen;        // update name
    nightfarerImage.innerHTML = imageArr[value]; // update image
    displayRowByName(chosen);               // update table
}

table.classList.add("scaling-table");
