const items=[
    {name:'Shirt',price:25},
    {name:'Jeans',price:50},
    {name:'Shoes',price:80}
];
console.log(items)

const arr = items.map(item=>{
    return {
        name:item.name,
        price: item.price*.9}
})
console.log(arr)

const total = arr.reduce((val1,val2)=>{
    return val1+val2.price
},0)
console.log(total)
