/*var userInput = prompt("Enter a message to be displayed");

for(var i = 1 ; i < 7 ; i++)
{
    document.writeln(`<h${i}>${userInput}</h${i}>`);

}
*/
//------------------------------------------------------------
/*
var sum = 0 ;
var num ;
do{
    num = parseFloat(prompt("Enter a number: "));
    if(typeof num ==='number')
    {
        sum += num;
    }
    else{
        do{
            num = prompt("Enter a valid number : ");
        }while(typeof num !== 'number');
        sum += num;
    }
    console.log(sum);
}while(num != 0 && sum <= 100);
*/
//--------------------------------------------------------------------
/*
function myFun()
{
    var x,y,z;
    x = parseInt(prompt("Enter the first number x; "));
    y = parseInt(prompt("Enter the second number y; "));
    z = parseInt(prompt("Enter the third number z; "));
    var msg;
    if(x%y === 0 && x%z === 0)
    {
        msg = 'X is divisble by both Y and Z';
    }
    else if(x%y === 0 && x%z!== 0)
    {
        msg = 'X is divisble by Y only';
    }
    else if(x%y !==0 && x%z ===0)
    {
        msg = 'X is divisible by Z only';
    }
    console.log(msg);
    return msg;
}

myFun();
*/
//-----------------------------------------------------------------------------
/*
var x,y,z ,sum = 0;
do{
    x = parseInt(prompt("Enter the value of x"));
}while(typeof x !== 'number');

do{
    y = parseInt(prompt("Enter the value of y "));
}while(typeof y !=='number');

do{
    z = prompt("Enter z ");
}while(z !== 'odd' && z !== 'even' && z !== 'no' && z !== 'Odd');



function rangeDisplay(x,y,z)
{
    if( z === 'odd')
    {
        if(x < y)
        {
            for(let i = x ; i <= y ; i++)
            {
                if(i%2)
                {
                    console.log(i);
                    sum+=i;
                }
            }
            console.log(sum);
        }else{
            for(let i = x ; i >= y ; i--)
            {
                if(i%2)
                {
                    console.log(i);
                    sum+=i;
                }
            }
            console.log(sum);
        }
    };
    if (z === 'even')
    {
        if(x < y)
        {
            for(let i = x ; i <= y ; i++)
            {
                if(i % 2 === 0)
                {
                    console.log(i);
                    sum+=i;
                }
            }
            console.log(sum);
        }else{
            for(let i = x ; i >= y ; i--)
            {
                if(i % 2 === 0)
                {
                    console.log(i);
                    sum+=i;
                }
            }
            console.log(sum);
        }
    };

    if(z === 'no')
    {
        if(x > y)
        {
            for(let i = x ; i <= y ; i++)
            {
                console.log(i);
                sum+=i;
            }
            console.log(sum);
        }else{
            for(let i = x ; i >= y ; i--)
            {
                console.log(i);
                sum+=i;
            }
            console.log(sum);
        }
    };

    if(z === 'Odd')
    {
        if(x < y)
        {
            for(let i = x+1 ; i < y ; i++)
            {
                if(i%2)
                {
                    console.log(i);
                    sum+=i;
                }
            }
            console.log(sum);
        }else{
            for(let i = x-1 ; i > y ; i--)
            {
                if(i%2)
                {
                    console.log(i);
                    sum+=i;
                }
            }
            console.log(sum);
        }
    };

    return 0;
}

rangeDisplay(x,y,z);
*/
