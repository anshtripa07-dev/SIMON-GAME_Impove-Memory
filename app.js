let genSq=[];
let userSq=[];
let game=false;
let btnCol=["red","yellow","green","blue"];
let level=0;
document.addEventListener("keypress",function(){
    if(game== false){
        game=true;
    }
    document.querySelector("body").classList.remove("rfa");
    levelUp();
});
function flash(btn){
    btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash")
        },350);

}
function levelUp(){
    userSq=[];
    level++;
    document.querySelector("h2").innerText=`Level ${level}`;
    let randIdx= Math.floor(Math.random()*4);
    let randCol=btnCol[randIdx];
    let randBtn=document.querySelector(`#${randCol}`);
    genSq.push(randCol)
    setTimeout(flash(randBtn),2000);
}
function check(idx){
    if(userSq[idx]==genSq[idx]){
        if((userSq.length)== (genSq.length)){
            setTimeout(levelUp,1000);
        }
    }
    else{
        document.querySelector("h2").innerText=`Game Over,Your score is ${level}...Press any key to restart`;
        redflash();
        document.querySelector("body").classList.add("rfa")
        reset();
    }
}
function buttonpress(){
    let btn=this;
    flash(this);
    let colour=btn.getAttribute("id");
    userSq.push(colour);
    check(userSq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",buttonpress)
}
function reset(){
    game=false;
    genSq=[];
    userSq=[];
    level=0;
}
function redflash(){
    document.querySelector("body").classList.add("redflash");
    setTimeout(function(){
        document.querySelector("body").classList.remove("redflash")
    },500);
}