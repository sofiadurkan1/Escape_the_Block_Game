let character = document.getElementById("character");
let block = document.getElementById("block");
let restart = document.getElementById("restart");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");


    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

const checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft<20 && blockLeft>0 && characterTop >=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose!");
        
    }

},10);

restart.addEventListener("click", function(){
    location.reload();


})