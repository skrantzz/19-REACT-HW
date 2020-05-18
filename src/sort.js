const arr = [2,3,435,23,1,2,3,12,3,12,3,2,653,23,123,345,2,4,23,67]
console.log(arr);
const sorted = arr.sort((a,b)=> a-b);
console.log(sorted);

const names = ['jim', 'kim', 'tim', 'mark', 'lee', 'susan'];
console.log(names.sort((a,b)=>{
   if(a[0]<b[0]){
       return -1
   }else if(a[0]>b[0]){
       return 1
   }else{
       return 0
   }
}));
