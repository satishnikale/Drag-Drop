let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let addTodo = document.getElementById("addTodo");


addTodo.addEventListener('click', (e) =>{
    e.preventDefault();
    const todo_heading = document.getElementById("todo-heading").value;
    const todo_description = document.getElementById('todo-description');
    const todo_description_value = todo_description.value;
    const selected_element = document.getElementById("todo-priority").value;

        let div = `
            <div class="task-card" {draggable="true"}>
                    <h3>${todo_heading}</h3>
                    <p>${todo_description_value}</p>
                    <div class="details">
                        <span class="${selected_element}">${selected_element}</span>
                        <span>${getDate()}</span>
                        <span>1hr ago</span>
                    </div>
            </div>
            `       
    leftBox.insertAdjacentHTML('beforeend', div);

    todo_heading = document.getElementById("todo-heading").value = '';
    todo_description = document.getElementById('todo-description').value = '';
    

})

function getMonthInString(month){
    if(month == 1){
        return "Jan";
    }
    if(month == 2){
        return "Feb";
    }
    if(month == 3){
        return "Mar";
    }
    if(month == 4){
        return "Apr";
    }
    if(month == 5){
        return "May";
    }
    if(month == 6){
        return "Jun";
    }
    if(month == 7){
        return "Jul";
    }
    if(month == 8){
        return "Aug";
    }
    if(month == 9){
        return "Sep";
    }
    if(month == 10){
        return "Oct";
    }
    if(month == 11){
        return "Nov";
    }
    if(month == 12){
        return "Dec";
    }
    
}
function getDate(){
    const today = new Date();
    const month = today.getMonth()+1;
    const monthString = getMonthInString(month);
    const day = today.getDate();
    const year = today.getFullYear();
    const formatedDate = `${monthString} ${day}, ${year}`;
    return formatedDate;
    
}
let cards = document.getElementsByClassName("task-card");
for(let element of cards){
    element.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })

        rightBox.addEventListener("drop", function(e){
            e.preventDefault();
            rightBox.appendChild(selected);
            selected = null;
        })

        // this is gropping into left box 

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })

        leftBox.addEventListener("drop", function(e){
            e.preventDefault();
            leftBox.appendChild(selected);
            selected = null;
        })
    })
};





// console.log(rightBox);
// console.log(leftBox);
// console.log(cards);