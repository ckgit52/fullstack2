// let arr=[1,3,4,5,5,5,6,10,11]

// let n=arr.length
// for(let index=2;index<n;index++){
//     console.log(arr[index])
// }

// arr.push(12)
// arr.push(14)
// console.log(arr)


//question hai ki 1,2,3,4......100  push krna hai

let arr2=[]

for(let i=0;i<101;i++){
    arr2.push(i)
}
console.log(arr2)

//question ye hai ki arr2 me se 4 k multiple console krwana hai
let n=arr2.length
// for(let i=0;i<n;i++){

//     if(arr2[i]%4==0){
//         console.log(arr2[i])
//     }

// }
for(let i=0;i<n;i++){
    if(arr2[i]%6==0){
        console.log(arr2[i])
    }
}

    // console.log()
