var app = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
  todo: []
};

//add to-do
function addItem(){
    var li = document.createElement("li");
    var input = document.getElementById("item").value;
    var add = document.createTextNode(input);
    var button = document.createElement("button");
    li.appendChild(add);
      if (input === '') {
        alert("You have to write a to-do!");
      } else {
        document.getElementById("list").appendChild(li);
      }

//delete button
   var erase = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(erase);
    li.appendChild(button);
    var close = document.getElementsByClassName("close");
      for (var i = 0; i < close.length; i++) {
          close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
          }
        }

//prioritize button
    var button = document.createElement("Button");
    var exclamationPoint = document.createTextNode("!");
        button.id = "prioritize";
        button.appendChild(exclamationPoint);
         li.appendChild(button);

}
//completing a to-do
    var list = document.querySelector('ul');
      list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
              ev.target.classList.toggle('checked');
            }
          }, false);

//remove a to-do

    var close = document.getElementsByClassName("close");
      var div = this.parentElement;
          for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              div.remove()
        }
      }
  //prioritize a to-do
    list.addEventListener('click', function(ev) {
        if (ev.target.id == "prioritize") {
          ev.target.classList.toggle('item');
          if (ev.target.className == 'item'){
            document.getElementById("list").prepend(ev.target.parentElement);
          }else{
            document.getElementById("list").append(ev.target.parentElement);
          }
        }
      }, false);
