function productExceptSelf(nums: number[]): number[] {
    let total :number=1
    let answer : number[]=[]
    answer[0]=1

    for(let i :number = 1 ; i<nums.length ;i++){
        answer[i]=answer[i-1]*nums[i-1]
    }//the result of last element only is correct 
    
    let sufex:number = 1
    
    for(let i :number=nums.length-1 ; i>=0 ; i--){ //n-1 becuse last element is alredy calculated
        
        answer[i]=answer[i] * sufex
        sufex= sufex * nums[i]
    }
    return answer
};
