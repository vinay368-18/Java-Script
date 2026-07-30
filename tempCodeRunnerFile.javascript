let r,num = 123456
let s = ""
while(num!=0){
    r=num%10;
    num=parseInt(num/10);
    s = s+String(r)
}
console.log(s)