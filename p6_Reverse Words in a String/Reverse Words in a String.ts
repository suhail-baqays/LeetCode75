function reverseWords(s: string): string {
    let words : string[]=[]
    let head :number=s.length-1
    for (let p = s.length - 1; p >= 0; p--) {
        if (s[p] === " ") {
            if (p < head) {
                words.push(s.substring(p + 1, head + 1));
            }
            head = p - 1;
        } 
        else if (p === 0) {
            words.push(s.substring(p, head+1));
        }
    }
    let result :string=words.join(" ").trim();
    
    return result
    
}
// or return s.trim().spilt(/\s+/).reverse().join(" ") using js bulte in methods