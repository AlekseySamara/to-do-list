var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === 'SPAN') {
       var div = ev.target.parentNode;
       div.remove();
    }
}, false);

var addInpat = document.getElementById ('newElement');
addInpat.addEventListener ('click', newElement, false);
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == '') {
       alert('Введите ваше дело!');
    } else {
      document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = '';
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('X');
    span.className = 'btn btn-danger';
    span.appendChild(txt);
    li.appendChild(span);
}
var delInpat = document. getElementById ('delElement');
delInpat.addEventListener ('click', clearList);
function clearList (){
   list.innerHTML = '';
}


 

