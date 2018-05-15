//2nd May,2018
// Write a program that uses console.log to print all the numbers from 1
// to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
// instead of the number, and for numbers divisible by 5 (and not 3), print
// "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" ,
// for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
// "Buzz" for numbers divisible by only one of those).
//1.
function fizzBuzzGame(){
    for (var i = 0; i <= 100; i++){ //loop through numbers 1-100
        if ((i % 3 == 0) && (i % 5 != 0)){ // if it is divisible by 3 ONLY
            console.log("Fizz");
        }else if((i % 5 == 0) && (i % 3 != 0)){ //if it is divisible by 5 ONLY
            console.log('Buzz');
        }else if((i % 5 == 0) && (i % 3 == 0)){ //if divisble by Both
            console.log('FizzBuzz');
        }else{
            console.log(i); //if not divisble by any
        }
    }
}
fizzBuzzGame();

//2.
// Anagrams
// Write a function that takes two words as an argument and returns true 
// if they are anagrams (contain the exact same letters) and false otherwise.

function checkIfAnagrams(firstWord, secondWord){ //function to check if anagrams
    var firstWord, secondWord; //declaring the variables
    if ((typeof(firstWord)=='string') && (typeof(secondWord)=='string')){ //check if both are of same type
        var output = '';
        if(firstWord.length == secondWord.length){ 
            firstWord = firstWord.toLowerCase().split(''); //convert to array
            secondWord = secondWord.toLowerCase().split('');
            output = 'The two word are anagrams yipee'; //assume they r anagrams until proven not to
            for(var i = 0; i <=firstWord.length-1; i++){    //check each letter of the firstword            
                if (!secondWord.includes(firstWord[i])){ //if the secondWord does not include a letter in the firstWord
                    output = 'The two words arent anagrams, mhm';
                    console.log(output);
                    return false;                  
                }
            };
            console.log(output);
            return true;

        }else{
            output = 'The two words arent even same length';
            console.log(output);
            return false;
        }
    }else{
        output = 'The two words arent even same type ni';
        console.log(output);
        return false;
    }
}
checkIfAnagrams('nice', 'icep');
checkIfAnagrams('slack', 'lacks');
checkIfAnagrams('Rat','tar');
checkIfAnagrams(7, 'rat');

//3.
// Taxes
// Write a function that takes two arguments, 
// an amount in Naira and a tax percentage. Return an array with the tax amount in Kobo.

function taxAmount(Amount, taxPercent){
    if (typeof(Amount)== 'number' && typeof(taxPercent) == 'number'){     //checks the type
        var taxAmount = Amount * (taxPercent/100) * 100;                  //calcs the taxAmount
        taxAmount = [taxAmount + 'K'];                                          //converts to an array
    }else{
        taxAmount = 'The two parameters must be numbers';
    }
    console.log(taxAmount);
    return taxAmount;    //the value to be returned
}

taxAmount(200, 10);     //output '2000K'
taxAmount(100, 'o');    //output 'The two parameters must be numbers'
