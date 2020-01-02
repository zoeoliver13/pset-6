<<<<<<< HEAD
//add to do
function addItem(){
    var li = document.createElement("li");
    var input = document.getElementById("item").value;
    var add = document.createTextNode(input);
    li.appendChild(add);
    if (input === '') {
      alert("You have to write a to-do!");
    } else {
      document.getElementById("list").appendChild(li);
    }
      document.getElementById("item").value = "";
      var span = document.createElement("SPAN");
//      var text = document.createElement("img");
  //    text.src = "images/remove.png";
    //  var src = document.getElementById("remove");
    //  src.appendChild(text);
      span.className = "close";
    //  span.appendChild(text);
      li.appendChild(span);

        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
  }
=======

document.getElementById('addItem').addEventListener('click',function(){
  var toDo = document.getElementById('item').toDo;
  if(toDo) addToList(toDo);
});

function addToList(text){
  var list = document.getElementById('list');
  var item = document.createElement('li');
    item.innerText = text;

  var buttons = document.createElement('div');
    buttons.classList.add('buttons');

  var  complete = document.createElement('button');
    complete.classList.add('complete');

  var remove = document.createElement('button');
    remove.classList.add('remove');

  var prioritize = document.createElement('button');
    prioritize.classList.add('prioritize');

}
>>>>>>> 62204c833e61ec7384b01b47dc37a6af401332e5
