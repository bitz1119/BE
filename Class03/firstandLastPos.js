/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    
    let s = 0;
    let e = nums.length-1;
    let firstPos = -1;
    
    while(s <= e){
        let mid  = Math.floor((s+e)/2);
        if(nums[mid] === target){
            firstPos = mid;
            e = mid - 1;
        }
        else if(nums[mid] < target){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    
    s = 0;
    e = nums.length-1;
    let lastPos = -1;
    
      while(s <= e){
        let mid  = Math.floor((s+e)/2);
        if(nums[mid] === target){
            lastPos = mid;
            s = mid + 1;
        }
        else if(nums[mid] < target){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    
    return [firstPos,lastPos];
    
    
};