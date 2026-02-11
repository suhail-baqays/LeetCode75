function gcdOfStrings(str1: string, str2: string): string {
    let gcd:string=""
    let counter :number = 0

    for(let i:number=0 ; i<str1.length ; i++){
        if(str1.charAt(i)==str2.charAt(i)){
            gcd +=str1.charAt(i)
            counter++
        }
        else{
            break
        }
    }                         
    if(gcd=="")
        return gcd
    while(str1.length%gcd.length!=0 || str2.length%gcd.length!=0){
        gcd = gcd.slice(0,gcd.length-1)
    }
    for(let i=0 ; i<str1.length ;i++){
        if(str1.charAt(i) != gcd.charAt(i%gcd.length)){
            return""
        }
    }
    for(let j=0 ; j<str2.length ;j++){
        if(str2.charAt(j) != gcd.charAt(j%gcd.length)){
            return""
        }
    }
    return gcd
};
console.log(gcdOfStrings("ABABAB","AB"))