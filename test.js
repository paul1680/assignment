
function woodCalculator(chair, table, bed){
    if(chair <0){
        return "Input is invalid"
    }
    if(table <0){
        return "Input is invalid"
    }
    var numberOfChair = 1 * chair;
    var numberOfTable = 3 * table;
    var numberOfBed = 5 * bed;
    if(numberOfChair <0 && numberOfTable <0 && numberOfBed < 0){
        return "Input is invalid"
    }
    var total = numberOfChair + numberOfTable + numberOfBed;

    return total;

}

var wood = woodCalculator(1, 2, -3);
console.log(wood);


function feetToMile(feet){
    if(feet < 0){
        return "Input is not valid.";
        }
    var mile = feet * 0.000189393939;
    return mile;
}
var inputFeet = feetToMile(-10);
console.log(inputFeet);