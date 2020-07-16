function feetToMile(feet){
    var mile = feet * 0.000189393939;
    return mile;
}
var inputFeet = feetToMile(5281);
console.log(inputFeet);


function woodCalculator(chair, table, bed){
    var numberOfChair = 1 * chair;
    var numberOfTable = 3 * table;
    var numberOfBed = 5 * bed;
    var total = numberOfChair + numberOfTable + numberOfBed;
    return total;

}

var wood = woodCalculator(14, 5, 7);
console.log(wood);


function brickCalculator(floor){
    if (floor <= 10){
        var firstTenFloor = 15* floor;
        var result = firstTenFloor;
    }
    else if(floor <=20){
        var secondTenFloor = 12 * floor;
        var result = secondTenFloor + 30;    
    }
    else{
        var lastFloor = floor * 10;
        var result = lastFloor + 50 + 20;
    }
    var totalBrick = 1000 * result;
    return totalBrick;
        

}
var numberOfBricks = brickCalculator(11);
console.log(numberOfBricks);


function tinyFriend(friend){
    smallName = friendName[0];
    for(var i = 0; i<friendName.length; i++){
        var element = friendName[i];
        if (element < smallName){
            smallName = element;
        }
    }
    return smallName;
}
var now = tinyFriend([5, 6, 8, 2, 1]);
console.log(now);
