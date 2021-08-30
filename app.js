function q(e) {
    if (e.key == 'q')
        game_over = true
        if(e.key=="ArrowRight")
             snake.direction="right";
            else if(e.key=="ArrowLeft")
             snake.direction="left";
             else if(e.key=="ArrowUp")
             snake.direction="up";
             else
             snake.direction="down";
             snake.updateSnake()
    console.log(e.key)
}

function init() {
    canvas = document.getElementById("mycanvas")
    pen = canvas.getContext('2d')
    cs=15
    
    game_over = false

    snake={
        init_len:5,
        color:'blue',
        cells:[],
        direction:"right",
    
        createSnake:function(){
            for(var i=this.init_len;i>0;i--)
             this.cells.push({x:i,y:0})
        },

        drawSnake:function(){
           for(var i=0;i<this.init_len;i++)
           pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-1,cs-1)
        },

        updateSnake:function(){
            this.cells.pop()
            // console.log("poppping")
            var headX= this.cells[0].x;
            var headY= this.cells[0].y;
            if(this.direction=="right"){
            var X = headX+1;
            var Y= headY;
            }
            else if (this.direction=="left") {
                var X = headX-1;
            var Y= headY;
            }
            else if (this.direction=="up") {
                var X = headX;
            var Y= headY-1;
            }
            else{
                var X = headX;
            var Y= headY+1;
            }
            this.cells.unshift({x:X,y:Y})            
        }
    }
   food={
       color:'red',
       x:50,
       y:50,

       createFood:function(){
           
       }
   }

snake.createSnake()

}

function draw() {
    // console.log("drawing")
    pen.fillStyle=snake.color
    pen.clearRect(0,0,500,500)
    snake.drawSnake()
}

function update() {
    // console.log("UPDATING...") 
    snake.updateSnake()
  
}

function gameloop() {
    draw()
    update()
    if (game_over == true)
        clearInterval(f)
}

init()

var f = setInterval(gameloop, 100)
document.addEventListener('keydown', q)


