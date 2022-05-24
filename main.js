const header = document.getElementById('header');
const filter = document.getElementById('filter');
const list = document.getElementById('list');
const form = document.querySelector('form');
const task =document.getElementById('task');
const prio_bar =document.getElementById('priority');
var li = list.getElementsByTagName('li');

function dark() {
    var button = document.getElementById("switcher");
    var src = button.getAttribute('src');    
    if(src == "images/icon-moon.svg"){
      button.src = "images/icon-sun.svg";
      document.body.style.backgroundColor = "hsl(233, 14%, 35%)";
      document.body.style.color= "white";
      list.style.color = "black";
      header.style.backgroundImage = "url('images/bg-desktop-dark.jpg')"
      filter.style.backgroundColor = "hsl(234, 11%, 52%)";
    }
    if(src == "images/icon-sun.svg"){
      button.src = "images/icon-moon.svg";
      document.body.style.backgroundColor = "white";
      document.body.style.color= "black";
      header.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
      filter.style.backgroundColor = "white";
    }
}



form.addEventListener('submit',(e) => {
  e.preventDefault();
  list.innerHTML += `<li class ="${prio_bar.value}">${task.value} <img src="images/close.png" class="cross"></li>`;
  storage();  
  task.value ="";
})

list.addEventListener('click', (e) => {
  if(e.target.tagName !='IMG' && e.target.classList.contains('checked')){
    e.target.classList.remove('checked');
  }
  else{
    if(e.target.tagName !='IMG' && !e.target.classList.contains('checked')){
      e.target.classList.add('checked');
    }
    else{
      e.target.parentNode.remove();
    }   
  }
  storage();
})

//filter part

function showall(){
  for(var i=0; i<li.length; i++){
    li[i].style.display = "flex";
  }
}

function active(){
  for(var i=0; i<li.length; i++){
    if(!li[i].classList.contains('checked')){
      li[i].style.display = "";
    }
    else{
      li[i].style.display = "none";
    }    
  }
}

function completed(){
  for(var i=0; i<li.length; i++){
    if(li[i].classList.contains('checked')){
      li[i].style.display = "";
    }
    else{
      li[i].style.display = "none";
    }    
  }
}

function clearcomplete(){
  for(var i=0; i<li.length; i++){
    if(li[i].classList.contains('checked')){
      li[i].remove();
    }
  }
  storage();
}

//storage part

function storage(){
  window.localStorage.todoList = list.innerHTML;
}

function getValue(){
  let storageContent= window.localStorage.todoList;
  if(!storageContent){
    list.innerHTML =
      '<li> Cliquez sur un todo pour le valider et sur la croix pour le supprimer <img src="images/close.png" class="cross"></li>';
  }
  else{
    list.innerHTML = storageContent;
  }
}
getValue();


