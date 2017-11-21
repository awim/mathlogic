/*
  a : input
  m : move
  s : step
  i : array index
  x : a%s[i]  
  z : input memory
  attemtps  : move result
*/

var a = 5;
var m = new Array();
var s = [1,2];
var i=0; x=0; y=0; z=a; ptop=0;
var attempts = new Array();

function reset(){
    i=0; x=0; a=z;
}

function printM(m){
  document.write(m + "<br/>");
}

function boxingM(){
  
}

function visualizeM(a,m){
  var l,c,p,prop,box,saturate;
  var pg = document.getElementById("playground");  
  for(i=0;i<m.length;i++){
    l=(m[i]/a)*100;
    saturate=a/m[i];
    if(i==0){
       p=0;
    } else {       
       p=p+(m[i-1]/a)*100;
    }
    box = document.createElement("div");
    box.innerText = " ";
    box.classList.add("m");
    box.style.width = l + "%";
    box.style.left = p  + "%";
    box.style.top = ptop + "%";
    box.style.filter = "saturate(" + saturate + ")";
    pg.appendChild(box);
  }  
  document.write(ptop);
  ptop+=10;
}

function maxM(a,s){
  while(i<s.length){
    x=a%s[i];
    if(x>0){
      a-=x;
    }
    m.push([s[i],a/s[i]]);
    i++;
  }
  reset();
  return m; 
}

function resetM(a,s,m,x){
  a=z;
  x+=1;
  m=new Array();
  n=x;
}

function makeM(a,s,n,x){
  if(a>0 && n<s.length){
    if(s[n]==1){
       while(a>=s[n]){
         m.push(s[n]);
         a-=s[n];
       }
      //printM(m);      
      visualizeM(z,m);
    } else if(s[n]>1) {
       while(a>0 && a>=s[n]){
         m.push(s[n]);
         a-=s[n];
         if(n>s.length){
            n=n+1;
         } else {
            n=0;
         }
       }
      rollM(m);
    } else {
      document.write("s" + n + ": " + s[n] + " is negative number");
    }    
    
    if(a==0 && x<s.length){
      a=z;
      x+=1;
      m=new Array();
      n=x;
    }
    
    makeM(a,s,n,x);
  } else {
    negativeM();
  }
  
}

function negativeM(){}

function rollM(m){
  var t;
  //printM(m);
  visualizeM(z,m);
  for(n=m.length-1;n>=0;n--){
    if(m[n]<m[n-1]){
       t=m[n]
       m[n]=m[n-1];
       m[n-1]=t;
       rollM(m);
    }
  }  
}

//document.write(maxM(a,s));
//var l = [2,2,1,1];
//rollM(l);
//document.write(attempts);
a = 5;
s = [1,2,4];
n=0;
x=0;
makeM(a,s,n,x);
//visualizeM(4,[1,1,2]);
//visualizeM(5,[2,1,1,1]);
