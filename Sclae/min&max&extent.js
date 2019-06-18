var data = [
    {grade: "A" , value: 4 },
    {grade: "B" , value: 3 },
    {grade: "C" , value: 2 },
]
var min = d3.min(data , function(d){
    return d.value
})
console.log(min) // 2

var max = d3.max(data , function(d){
    return d.value
})

console.log(max) // 4

var extent = d3.extent(data , function(d){
    return d.value
})

console.log(extent) // [2,4]

