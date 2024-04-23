const addTask = document.getElementById('addTask');
const addList = document.getElementById('addList');
const alertMessage = document.getElementById('alert');
function newList(e){
    alertMessage.innerHTML = '';
    if(addTask.value === ''){
        let h5 = document.createElement('h5');
        h5.innerHTML = "Вы ввели пустую строку";
        alertMessage.appendChild(h5);
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = addTask.value;
        addList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    addTask.value = ''
}

addList.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
    }
}, false)
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        newList()
    }
});