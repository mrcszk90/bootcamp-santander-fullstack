/* function mult(num1, num2) {
    
    return num1 * num2;
}

console.log(mult(9,3)); */



/* const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
     return   item * this.value;
}, thisArg);

}

const nums = [1, 2];
console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja)); */



function mapSemThis(arr) {
    return arr.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);