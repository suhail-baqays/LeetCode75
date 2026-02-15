function reverseVowels(s: string): string {
    let vowel:string = "AaEeIiOoUu"
    let i_char:string=""
    let j_char:string=""
    let result:string[]=[...s]
    if(s.length==2 && (vowel.includes(s.charAt(0)) && vowel.includes(s.charAt(1))) ){
        result[0]=s.charAt(1)
        result[1]=s.charAt(0)
        return result.join("")
    }
    for (let i:number=0 , j:number=s.length-1  ;i<=j && j>=i;){
        if(vowel.includes(s.charAt(i))){
            i_char=s.charAt(i)
        }
        else{
            i++
        }
        if(vowel.includes(s.charAt(j))){
            j_char=s.charAt(j)
        }
        else{
            j--
        }
        if(j_char!="" && i_char!=""){
            result[j]=i_char
            result[i]=j_char
            i_char=""
            j_char=""
            i++
            j--
        }
    }
    return result.join("")
};
console.log(reverseVowels("No, it never propagates if I set a \"gap\" or prevention."))