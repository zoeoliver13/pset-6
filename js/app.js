
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
