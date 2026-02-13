function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result :boolean[]=[]
    const sorted_candies:number[]=  [...candies]
    sorted_candies.sort((a,b)=> b-a)
    candies.forEach(kid_candy =>{
        if(kid_candy+extraCandies>=sorted_candies[0]){
            result.push(true)
        }
        else
            result.push(false)
    })
    return result
};
console.log(kidsWithCandies([2,3,5,1,3],3))
