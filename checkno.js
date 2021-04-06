num=12345;
reverse=0;
sum=0;


console.log("\n\nCheck if it's a Number :")
check=typeof(num);
if(check=='number')
    console.log(num+' is a Number')
else
    console.log(num+" is not a Number")


console.log("\n\nCheck if the reversed number is same as the original number :")
temp=num;
while(temp>0)  {
        remainder=parseInt(temp%10);
        reverse=parseInt((reverse*10)+remainder);
        temp=parseInt(temp/10);
    }
if(reverse==num)
    console.log("Reversed and Original no's are same")
else
    console.log("Reversed and Original no's are different")


console.log("\n\nCheck if the reversed number is odd or even number :")
if(reverse%2==0)
    console.log(reverse+" is Even")
else
    console.log(reverse+" is Odd")


console.log("\n\nCheck if the sum of the digits is less than 25 :")
while(num>0)  {
        remainder=parseInt(num%10);
        sum=parseInt(sum+remainder);
        num=parseInt(num/10);
    }
if(sum<25)
    console.log(sum+" Less than 25")
else 
    console.log(sum+" Greater than 25")
    
    

