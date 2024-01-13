/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/
function checkOddOrEven(value){
    if (value%2==0)
    {
        console.log(value + " is a even number")
    }
    else{
        console.log(value + " is a odd number")
    }
    console.log("Print all odd numbers within " + value)
    for(let i =0;i<value;i++)
    {
        if(i%2!==0)
        {
            console.log(i)
        }
    }
}

checkOddOrEven(10)