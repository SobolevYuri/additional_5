module.exports = function check(str, bracketsConfig) {
  var ar=str;

  var conf=bracketsConfig;
  var stack=new Array(conf.length);
  var stacknumb=new Array();
for(let i=0;i<conf.length;i++){
stack[i]=new Array();
}
  for (let i=0;i<str.length;i++)
  {
    for(let j=0;j<conf.length;j++)
    {
    if(ar[i]==conf[j][0])
      { 
        stack[j].push(ar[i]);
        stacknumb.push(i);
        break;
      }
    }
    for(let j=0;j<conf.length;j++)
    {
      if(ar[i]==conf[j][1])
      {
        if(stack[j].length==0)return false;
        if(ar[stacknumb.pop()]==conf[j][0])stack[j].pop();
       
        }
        
      
    }
      
  }

for(let j=0;j<conf.length;j++)
{
  if(stack[j].length>0)
  {return false;}
}
return true;
}

