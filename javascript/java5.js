for(var i=1;i<=10;i++)
{
    console.log(2*i);
}

for(var i=3;i<=36;i++)
{

    if(i%2!=0){
        console.log(i);
    }
}




for(var i=1;i<=25;i=i+4)
{
    console.log(i);
}
for(var i=10;i>=2;i--)
{
    console.log(i);
}


  
   for(var i=0;i<5;i++)
   {
    var str=" ";
    for(var j=0;j<=i;j++)
    {
        str=str+"* ";
    }
    console.log(str);
   }

    // equal triangle----------------

for(var i=5;i>0;i--)
{
    var str=" ";
    for(var j=1;j<5;j++)
    {
        if(j<i)
        {
            str=str+" ";
        }
        else if(j>=i)
        {
            str=str+"*";
        }
    }
    for(var k=5;k>0;k--)
    {
        if(k<i)
        {
            str=str+" ";
        }
        else if(k>=i)
        {
            str=str+"*"
        }
    }
    console.log(str);
}



    

for(var i=5;i>0;i--)
{
        var str=" ";
       
    for(var k=1;k<=5;k++)
    {
        if(k<i)
        {
            str=str+" ";
        }
        else if(k>=i)
        {
            str=str+"*"
        }
    }
    console.log(str);
}    



for(var i=5;i>0;i--)
{
    var str=" ";
           
    for(var k=1;k<=5;k++)
    {
        if(k<=i)
        {
            str=str+"*";
        }
        else if(k>i)
        {
            str=str+" "
        }
    }
    console.log(str);
}



for(var i=5;i>0;i--)
{
    var str=" ";
               
    for(var k=5;k>=1;k--)
    {
        if(k<=i)
        {
            str=str+"*";
        }
        else if(k>i)
        {
            str=str+" "
        }
    }
    console.log(str);
}
