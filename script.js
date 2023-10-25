"use strict"

//-------------------------------round-1-----------------------------------------------------

//-----------------------------1st----------------------------

// let n=[1,2,3];
// var sum=0
// for(var i=0;i<n.length;i++)
// {
//     sum += n*3
// }
// console.log(sum)





















//-----------------------------2nd-----------------------------------------

// let value=myFunction()
// console.log(value)

// function myFunction()
// {
// 	console.log("hello world!")
// }






















//---------------------------3rd--------------------------------

// function findPerimeter(length, width) {
// 	return (length*width)/2
// }

// let a=findPerimeter([6,7])
// console.log(a)

























//--------------------------------4th--------------------------------------

// let arr=[12,34,56,23,67]

// for(var i=0;i<arr.length;i++)
// {
// 	arr[i]+=i
//     console.log(arr[i])
// }




































//---------------------round-2 1st-----------------------------

// let n = 12; 
// function factorial(n) {  
//     if (n === 0) 
//     {  
//         return 1;  
//     }  
//     else 
//     {  
//         return n * factorial( n - 1 );  
//     }  
// }    
// console.log(factorial(n));























//---------------------------2nd------------------------------

// let arr=[12,34,56,78,98]
// var total=0
// for(var i=0;i<arr.length;i++)
// {
//    var sum=Math.floor((arr[i]*3) + (arr[i]/2))%10
//    total+=sum
   
// }
// console.log(total)























//-----------------------------3rd------------------------------------

// let n=13
// let  sum = 0;
// for (var i = 1; i <= n; i++)
// {
//     sum = sum + i * i;
//     console.log(sum)
// }























//--------------------------------4th-------------------------------------

// let arr=[12,5,23,56,78]
// var total=0
// for(var i=0;i<arr.length;i++)
// {
//     var sum=Math.floor((arr[i]*3) + (arr[i]/2))%10
//     total*=sum
// }
// console.log(total)






















//-------------------------round-3 1st--------------------------

// let n=3;
// for(var i=n;i>=0;i--)
// {
//     var x=''
//     for(var j=1;j<=i;j++)
//     {
//         x+=j+" "
//     }
//     console.log(x)
// }

// -------options

// i). 1 2 3     ii). 0 1 2     iii). 3 2 1
//     1 2            0 1             2 1   
//     1              0               1   


























//---------------------------2nd----------------------------

// let n=4;
// let valid="";
// for(let i=1;i<=n;i++)
// {
//     for(let j=1;j<=n-i;j++)
//     {
//         valid+=" ";

//     }
  
//     for(let k=1;k<=i*2-1;k++)
//     {
//         valid+="*";
//     }

//     valid+="\n";
// }
// console.log(valid);

//-------------options

// i).  *               ii). *******        
//     ***                    *****
//    *****                    ***
//   *******                    *        
    

// iii). *
//       **
//       ***
//       ****
//       *****
//       ****
//       ***
//       **
//       *                          
  































// ----------------------------3rd-----------------------------------------

// let n=5;
// let valid="";
// for(let i=1;i<=n;i++)
// {
//     for(let j=1;j<=n-i;j++)
//     {
//         valid+=" ";

//     }
  
//     for(let k=1;k<=i*1-1;k++)
//     {
//         valid+=k;
//     }

//     valid+="\n";
// }
// console.log(valid);

//------------------options

// i). 1                ii).         1              iii).      1
//     1 2                         2 1                        1  2
//     1 2 3                     3 2 1                       1  2  3
//     1 2 3 4                 4 3 2 1                      1  2  3  4
































//-----------------------------------4th--------------------------------------

// let rows = 3;

// let pattern = "";

// for (let i = 1; i <= rows; i++) 
// {
//     for (let j = 1; j <= 5; j++) 
//     {
//       pattern += "*";
//     }
//    pattern += "\n";
// }
// console.log(pattern);


//-------------------------options

// i). *****************        ii). *****             iii). * * *
//                                   *****                   *   *
//                                   *****                   * * *























//-----------------------1st-------------------------------------

// let a="ViJiYaLaKsHmI"
// let lower_count=0;
// let upper_count=0

// for(var i=0;i<a.length;i++)
// {
//     if(a[i]>= 'a' && a[i] <='z')
//     {
//         lower_count++
//     }
//     else
//     {
//         upper_count++
//     }
   
// }
// console.log("lower_count: "+lower_count)
// console.log("upper_count: "+upper_count)























//-----------------------2nd--------------------------------------

// const number = parseInt(prompt('Enter an integer: '));

// const range = parseInt(prompt('Enter a range: '));

// for(let i = 1; i <= range; i++) 
// {
//     const result = i * number;
//     console.log(number+" * "+i+" = "+result);
// }

























//-----------------------------3rd--------------------------------------


// function WordCount(str) {
//     var total = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             total += 1;
//         }
//     }
//     return total + 1;
// }
// console.log(WordCount("hi hello welcome to dckap palli"));

















//--------------------------------4th-----------------------------------


// var str = "hello welcome to DCKAP palli ";
// var numOfSpaces = str.split(" ").length - 1;
// console.log(numOfSpaces);