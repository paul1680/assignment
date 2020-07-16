function feetToMile(feet){
    if(feet < 0){
        return "Input is not valid.";
        }
    var mile = feet * 0.000189393939;
    return mile;
}
var inputFeet = feetToMile(5281);
console.log(inputFeet);


function woodCalculator(chair, table, bed){
    if(chair <0){
        return "Number of chair can not be negetive."
    }
    if(table <0){
        return "Number of table can not be negetive."
    }
    if(bed <0){
        return "Number of bed can not be negetive."
    }

    var numberOfChair = 1 * chair;
    var numberOfTable = 3 * table;
    var numberOfBed = 5 * bed;
    var total = numberOfChair + numberOfTable + numberOfBed;
    return total;

}

var wood = woodCalculator(1, 1, 1);
console.log(wood);


function brickCalculator(floor){
    if (floor < 0){
        return "Input is not accurate."
    }
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
var numberOfBricks = brickCalculator(40);
console.log(numberOfBricks);


function tinyFriend(friendsName){
    if(friendsName.length == 0){
        return "sorry, namefiled is empty."
    }
    var smallName = friendsName[0];
for(var i = 0; i < friendsName.length; i++){
    var tempName = friendsName[i];
    if(tempName.length < smallName.length){
        smallName = tempName;
    }
}
    return smallName;    
}

var tinyName = tinyFriend(['farid', 'Nawal', 'mugdho', 'eva', 'irina', 'naba'])
console.log(tinyName);

