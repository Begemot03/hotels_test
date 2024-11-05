function sharedCommonDivisor(nums) {
    const min = Math.min(...nums);
    const ans = [];
    let f = false;

    for(let i = 2; i <= min; i++) {
        f = false;
        for(let n of nums) {
            if(n % i != 0) {
                f = true;
                break;
            }
        }
        if(!f) ans.push(i);
    }

    return ans;
}

console.log(sharedCommonDivisor([42, 12, 18]));