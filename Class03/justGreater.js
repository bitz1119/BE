let arr = [1,2,3,4,9,9,9,9,10,10,10,10,10,10,13,15];
let target = 9;

let s = 0;
let e = arr.length - 1;
let ans = -1;

while (s <= e){
    let mid = Math.floor((s+e)/2);
    if(arr[mid] >= target){
        ans = mid;
        e = mid - 1;
    }
    else {
        s = mid + 1;
    }
}

console.log(arr.length - ans);


