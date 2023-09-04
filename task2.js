const arr=[];
arr.unshift('Buy Groceries','Finish Homework','Go For a run')
console.log('Tasks :',arr)

for(i=0;arr.length>0;i++) {
    arr.shift()
console.log('Task to be completed :',arr)
}