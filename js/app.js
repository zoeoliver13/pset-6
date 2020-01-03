
//add to-do
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
      var remove = document.createElement("BUTTON");
      remove.innerHTML = "images/remove.png";
      remove.className = "images/remove.png";
      li.appendChild(remove);
  }
 /*var img = document.createElement("img");

 img.src = "image.png";
 var src = document.getElementById("x");

 src.appendChild(img);
*/
