function q(e) {
    if (e.key == 'q')
        game_over = true
    console.log(e.key)
}

function init() {
    canvas = document.getElementById("mycanvas")
    pen = canvas.getContext('2d')
    cs=15
    
    game_over = false

    snake={
        init_len:5,
        color:'red',
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
            var X = headX+1;
            var Y= headY;
            this.cells.unshift({x:X,y:Y})
        }
    }
snake.createSnake()

}

function draw() {
    // console.log("drawing")
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


