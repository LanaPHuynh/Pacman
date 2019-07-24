// List of features to build 

// have JS display the world of brick/coins/etc
// have the pacman move up and down 

var world =
[
    //2 represents the bricks
    //1 represents the coins
    //3 represents the cherry 

    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,2,1,2,2,1,1,1,1,1,2],
    [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,1,2,1,1,1,1,2,2,2,1,1,1,2],
    [2,1,1,1,2,1,1,1,1,1,1,1,1,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    
];

var pacman =
{
    x:1,
    y:1
};


var score = 0;

//function to iterate through var world:
function displayWorld(){
    var output = '';

    for(var i = 0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>";
            }
            else if(world[i][j] == 1){
                output += "<div class='coin'></div>";
            }
            if(world[i][j] === 0){
                output += "<div class='empty'></div>";
            }
            if(world[i][j] == 3){
                output += "<div class='cherry'></div>";
            }
        }
        output += "\n</div>"
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML = score;    
}

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e){
    //move left
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
        pacman.x--;
    }
    //move right
    if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        pacman.x++;
    }
    //move up
    if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){
        pacman.y--;
    }
    //move down
    if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        pacman.y++;
    }

    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 5;
        console.log(pacman.y)
        console.log(pacman.x)
        displayScore();
        displayWorld();
    }

    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score += 15;
        console.log(pacman.y)
        console.log(pacman.x)
        displayScore();
        displayWorld();
    }

    displayPacman();
    // console.log(e.keyCode);
}
