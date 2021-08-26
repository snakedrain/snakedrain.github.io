
// pen.fillRect(rect.x,rect.y,rect.w,rect.h)      
function f(){
    console.log("exit")
}

function init(){
    // console.log("IN")
    canvas=document.getElementById("mycanvas")
pen=canvas.getContext('2d')
rect = {
    w:20,
    h:10,
    x:100,
    y:100,
    speed:20,
}
game_over=false
}

function draw(){
    // console.log("This is called ")
// console.log("DRAW")
pen.fillStyle="red"
pen.fillRect(rect.x,rect.y,rect.w,rect.h)      
pen.clearRect(rect.x-rect.speed,rect.y,rect.w,rect.h)      

}
    function update(){
        // console.log("Update")
        // while(rect.x<500){
        
       rect.x=rect.x+rect.speed
       if(rect.x>canvas.width-rect.w)
       rect.speed *= -1
       if(rect.x<0)
       rect.speed *=-1

        // }
    }

function gameloop(){
    draw()
    update()
    if(game_over==true)
clearInterval(f)
}
init()
var f=setInterval(gameloop,100)

