function printOddNumber(endvalue){
    if (endvalue%2==0)
    {
        console.log(endvalue + " is a even number")
    }
    else{
        console.log(endvalue + " is a odd number")
    }
    console.log("Print all odd numbers within " + endvalue)
    for(let i =0;i<endvalue;i++)
    {
        if(i%2!==0)
        {
            console.log(i)
        }
    }
}

printOddNumber(10)