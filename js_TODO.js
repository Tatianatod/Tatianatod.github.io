let extra;
let extraTasks = [
    { id: 1, text: "HomeWork 1 Task 1,2,3,4", completed: false },
    { id: 2, text: "HomeWork 2 Task 4,5", completed: false },
    { id: 3, text: "IBM SkillsBuild_JS_Course", completed: false }
];
    extra = localStorage.setItem("extraTasks", JSON.stringify(extraTasks)); // для сохрвне
let storedTasks = JSON.parse(localStorage.getItem("extraTasks"));
if (storedTasks === null) {
    extraTasks = [];
    // extra = localStorage.setItem("extraTasks", JSON.stringify(extraTasks));
} else {
    extraTasks = storedTasks;
}
console.log(extraTasks);
// extraTasks = localStorage.setItem("extraTasks", JSON.stringify(extraTasks)); //превращаем в строку, для хранения в LocalStorage

let extra2;
let extra3;

function taskDuplicate(freeTask) {
    for (i = 0; i < extraTasks.length; i++) {
        if (extraTasks[i].text === freeTask) {
            return true;
        }
    }
    return false;
}

function addTask() {
    let taskInput = document.getElementById("task");
    let todoExtraTask = taskInput.value;
    // let nextId;

    if (todoExtraTask === "") return; //если строка пустая не добавляем if empty string, does not push

    if (!taskDuplicate(todoExtraTask)) {
        let nextId;
        if (extraTasks.length > 0) {
            nextId = extraTasks[extraTasks.length - 1].id + 1;
        } else {
            nextId = 1;
        }
        let nextTask = {
            id: nextId,
            text: todoExtraTask,
            completed: false
        };
        extraTasks.push(nextTask);
        localStorage.setItem("extraTasks", JSON.stringify(extraTasks));
        // extraTasks.push(todoExtraTask);
        // extra2 = localStorage.setItem("extraTasks", JSON.stringify(extraTasks));
        render();
        taskInput.value = "";
    }
    console.log(extraTasks);
    render();
}
function render() {
    let todoExtraTasks = document.getElementById("extraToDoList");
    todoExtraTasks.innerHTML = '';

    let table = document.createElement("table");
    table.style.border = "1px solid grey";
    table.style.width = "100%";

    let titleRow = document.createElement("tr");//  строка заголовков таблицы

    let titles = ["Number", "Name", "Completed", "Delete"]; //названия колонок(массив)
    for (let i = 0; i < titles.length; i++) {
        let titleElement = document.createElement("th"); // создаем название каждой колонок
        titleElement.textContent = titles[i];
        titleRow.appendChild(titleElement);
        titleRow.style.border = "1px 1px 1px 1px solid grey";
    }
    table.appendChild(titleRow);

    let isOdd = true;

    for (let i = 0; i < extraTasks.length; i++) {
        let rowTasks = document.createElement("tr");
        rowTasks.style.border = "1px solid grey";


        if (!isOdd) {
            rowTasks.style.backgroundColor = " rgb(222, 241, 247)";
        }
        isOdd = !isOdd;

        let rowNumber = document.createElement("td");
        rowNumber.textContent = extraTasks[i].id;
        // rowNumber.style.border = "1px solid grey";
        rowTasks.appendChild(rowNumber);

        let rowText = document.createElement("td");
        rowText.textContent = extraTasks[i].text;
        // rowText.style.border = "1px solid grey";
        rowTasks.appendChild(rowText);

        let rowCompleted = document.createElement("td");
        // rowCompleted.textContent = extraTasks[i].completed;
        let condition = document.createElement("span");
        if (extraTasks[i].completed === true) {
            condition.textContent = "Done";
            rowTasks.style.color ="rgb(12, 131, 161)";
            // completedBtn.style.color = "green";
        } else {
            condition.textContent = "None";
            condition.style.color = " #F15A22";
        }
        let completedBtn = document.createElement("button");
        completedBtn.innerHTML = '&#10003';
        completedBtn.style.fontSize = "10px";
        // completedBtn.style.color = "lightgrey";
        completedBtn.style.marginLeft = "15px";
        rowCompleted.style.textAlign = "center";
        rowCompleted.style.verticalAlign = "middle";
        rowCompleted.style.width = "125px";
        completedBtn.onclick = function () {
            extraTasks[i].completed = true;
            completedBtn.style.color = "green";
            // rowTasks.style.color = "lightgrey";
            localStorage.setItem("extraTasks", JSON.stringify(extraTasks));
            // rowTasks.style.color = "green";
            render();
        };
        rowCompleted.appendChild(condition);
        rowCompleted.appendChild(completedBtn);
        rowTasks.appendChild(rowCompleted);
        // deleteBtn.style.color = "red";
        // deleteBtn.style.border = "none";
        // // deleteBtn.style.display = center;
        // // deleteBtn.style.border = "1px solid grey";
        // deleteBtn.onclick = function () {
        //     extraTasks.splice(extraTasks[extraTasks.length-1], 1);
        //     localStorage.setItem("extraTasks", JSON.stringify(extraTasks));
        //     render();

        // if (extraTasks[i].completed = false) { 
        //     rowCompleted.textContent = "None"; 
        // } else  {
        //     rowCompleted.textContent = "Yes";
        //     rowTasks.style.backgroundColor =  "green";

        // }

        // rowCompleted.style.border = "1px solid grey";



        let rowDelete = document.createElement("td");//!!!!!!!!!!!!!!!!!!!!!!
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "[X]";
        deleteBtn.style.color = " #F15A22";
        deleteBtn.style.border = "none";
        rowDelete.style.textAlign = "center";
        rowDelete.style.verticalAlign = "middle";
        rowDelete.style.width = "125px";
        // deleteBtn.style.border = "1px solid grey";
        deleteBtn.onclick = function () {
            extraTasks.splice(i, 1);
            localStorage.setItem("extraTasks", JSON.stringify(extraTasks));
            render();
        }
        rowDelete.appendChild(deleteBtn);
        rowTasks.appendChild(rowDelete);

        table.appendChild(rowTasks);
        // storedTasks = JSON.parse(localStorage.getItem("extraTasks"));
    }
    todoExtraTasks.appendChild(table);
}

render();
