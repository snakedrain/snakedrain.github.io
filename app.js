function q(e) {
    if (e.key == 'q')
        game_over = true
    console.log(e.key)
}

function init() {
    canvas = document.getElementById("mycanvas")
    pen = canvas.getContext('2d')
    cs_w=20
    cs_h=10
    rect = {
        w: 20,
        h: 10,
        x: 100,
        y: 100,
        speed: 20,
    }
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
           pen.fillRect(this.cells[i].x*cs_w,this.cells[i].y*cs_h,cs_w-1,cs_h-1)
        },

        updateSnake:function(){
            for(var i=0;i<this.init_len;i++)
            (this.cells[i].x) += cs_w
        }
    }
snake.createSnake()
}

function draw() {
    snake.drawSnake()
    pen.fillStyle = "red"
    pen.fillRect(rect.x, rect.y, rect.w, rect.h)
    pen.clearRect(rect.x - rect.speed, rect.y, rect.w, rect.h)
}

function update() {
 
    snake.updateSnake()
    rect.x = rect.x + rect.speed
    if (rect.x > canvas.width - rect.w)
        rect.speed *= -1
    if (rect.x < 0)
        rect.speed *= -1
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


