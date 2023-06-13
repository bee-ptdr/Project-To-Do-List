let draggable = document.getElementsByClassName('draggable');
let dragSrcEle = null;

function dragStart(e) {
    dragSrcEle = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOver(e) {
    e.preventDefault();

}
function drop(e) {
    if (dragSrcEle != this) {
        dragSrcEle.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html')
    }
}

function addMyEvents(eve) {
    eve.addEventListener('dragstart', dragStart);
    eve.addEventListener('dragover', dragOver);
    eve.addEventListener('drop', drop);
}

let allbox = document.querySelectorAll('.draggable');
[].forEach.call(allbox, function (item) {
    addMyEvents(item);
});

let inputBox = document.getElementById('inputBox');
let inputBoxValue = inputBox.value;

let addBtn = document.getElementById('add');
let listContainer = document.getElementById('listContainer')


addBtn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("Please Enter Something")
    } else {
        console.log(inputBox.value)
        let li = document.createElement("li");
        let arrt = document.createAttribute("draggable")
        arrt.value = 'true';
        listContainer.appendChild(li);
        li.setAttributeNode(arrt)
        li.innerHTML += inputBox.value;
        li.innerHTML += `<i class="fa-solid fa-xmark"></i>`
        li.setAttribute('class', 'draggable')
        addMyEvents(li)
    }
    inputBox.value = "";
})
listContainer.addEventListener('click',(e)=>{
if(e.target.tagName === 'I'){
    e.target.parentElement.remove();
}else if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked')
}
})




