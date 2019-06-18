//Time scale 


var x = d3.scaleTime()
    .domain([new Date(2000, 0, 1), new Date(2001, 0, 1)])
    .range([0 , 400])

    console.log(x(new Date(2000,7,1))) // 199
    console.log(x(new Date(2000,2,1))) // 66.5
    console.log(x(new Date(2000,10,25))) // 360

    console.log(x.invert(232)) // Tue Aug 01 2000
    console.log(x.invert(66.5)) // 
    console.log(x.invert(360)) // 


