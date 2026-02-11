function mergeAlternately(word1: string, word2: string): string {
let marged_String : string=""
while(word1!="" || word2!=""){
    if(word1!=""){
        marged_String += word1.charAt(0)
        word1=word1.slice(1,word1.length)
    }
    if(word2!=""){
        marged_String += word2.charAt(0)
        word2=word2.slice(1,word2.length)
    }
}
return marged_String
};
console.log(mergeAlternately("ab","pqrs"))