function swapTiles(tileOne, tileTwo){
    var temp;

    document.getElementById(tileOne).className;
    document.getElementById(tileOne).className = document.getElementById(tileTwo).className;
    document.getElementById(tileTwo).className = temp;
}

function shuffle (){
    for(var row = 1; row <= 3; row++){
        for(var col = 1; col <= 3; col++){
            var row2 = math.floor(Math.random()*3 + 1);
            var col2 = math.floor(Math.random()*3 + 1);
            
            swapTiles("coor"+row+col, "coor"+row2+col2);
        }
    }
}

function clickTile(row, col){
    var coor = document.getElementById("coor"+row+col);
    var tile = coor.className;
    if(tile != "tile9"){
        //check if blank tile is adjacent
    }
}

