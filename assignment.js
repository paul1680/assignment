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

var wood = woodCalculator(1, 1, 1);
console.log(wood);