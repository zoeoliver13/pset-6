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
