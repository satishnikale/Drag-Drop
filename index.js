let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let addTodo = document.getElementById("addTodo");

// Add a new task card
addTodo.addEventListener("click", (e) => {
    e.preventDefault();

    let todo_heading = document.getElementById("todo-heading").value;
    let todo_description = document.getElementById("todo-description").value;
    let selected_element = document.getElementById("todo-priority").value;

    // Create the task card dynamically
    let div = document.createElement("div");
    div.className = "task-card";
    div.draggable = true;

    div.innerHTML = `
        <h3>${todo_heading}</h3>
        <p>${todo_description}</p>
        <div class="details">
            <span class="${selected_element}">${selected_element}</span>
            <span>${getDate()}</span>
            <span>1hr ago</span>
        </div>
    `;

    // Append the card to the left box
    leftBox.appendChild(div);

    // Clear input fields
    document.getElementById("todo-heading").value = "";
    document.getElementById("todo-description").value = "";

    // Add drag-and-drop functionality to the new card
    addDragAndDrop(div);
});

// Get the current date in the desired format
function getMonthInString(month) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[month - 1];
}

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const monthString = getMonthInString(month);
    const day = today.getDate();
    const year = today.getFullYear();
    return `${monthString} ${day}, ${year}`;
}

// Add drag-and-drop functionality
function addDragAndDrop(card) {
    card.addEventListener("dragstart", function (e) {
        let selected = e.target;

        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function (e) {
            e.preventDefault();
            rightBox.appendChild(selected);
        });

        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function (e) {
            e.preventDefault();
            leftBox.appendChild(selected);
        });
    });
}

// Add drag-and-drop to existing cards on page load
const initialCards = document.querySelectorAll(".task-card");
initialCards.forEach((card) => addDragAndDrop(card));
