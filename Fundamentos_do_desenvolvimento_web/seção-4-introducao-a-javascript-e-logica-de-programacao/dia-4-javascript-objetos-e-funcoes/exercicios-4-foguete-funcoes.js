
 function verificaPalindrome(value){
    let valueArray = value.split();
    valueArray.reverse();
   
    if (valueArray == value) {
        return true;
    } else {
        return false;
    }
} 

//console.log(verificaPalindrome("arara")); //true
//console.log(verificaPalindrome("desenvolvimento")); //false
//================================================================
let numbers = [2,4,6,7,10,1];

highIndex(numbers);
function highIndex(numbers){
let highNumber = 0;
for (let index in numbers){
    if (numbers[index] > highNumber){
        highNumber = index;
                                          //codigo nao finalizado
        }
        
    }
    return highNumber;
}

console.log(highIndex());
