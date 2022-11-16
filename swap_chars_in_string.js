x = "12";
y = "";
for(i=0;i<x.length;i++){
    if(x[i]!=x[i+1]){
        c1 = x[i];
        c2 = x[i+1];
        break;
    }
}
for(i=0;i<x.length;i++){
    if(x[i]==c1)
        y += c2;
    else
        y += c1;
}
console.log(y);

