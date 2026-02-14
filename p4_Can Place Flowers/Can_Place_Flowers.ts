function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    
    for (let i:number = 0 ; i<flowerbed.length;i++){
        if ((flowerbed[i-1]!==1 && flowerbed[i+1]!==1) && flowerbed[i]!==1){
             flowerbed[i]=1
             n--
        }
    }
    if(n<=0)
        return true
    else
        return false
};
console.log(canPlaceFlowers([1,0,0,0,1,0,0],2))