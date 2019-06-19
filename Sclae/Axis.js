// left

var leftAxis = d3.axisLeft(Y - SCALE)
g.append("g")
    .attr("class", "left axis")
    .call(leftAxis);

//right
var rightAxis = d3.axisRight(Y - SCALE)
g.append("g")
    .attr("class", "right axis")
    .attr("transform", "translate(" + width + ")")

    .call(rightAxis);

//top
var topAxis = d3.axisTop(X - SCALE)
g.append("g")
    .attr("class", "top axis")
    .call(topAxis);

//bottom
var bottomAxis = d3.axisBottom(X - SCALE)
g.append("g")
    .attr("class", "bottom axis")
    .attr("transform", "translate(" + height + ")")
    .call(bottomAxis);


    d3.axiosBottom(x)
        .tickSizeOuter(VALUE);


   d3.axiosBottom(x)
    .tickSizeInner(VALUE)
    .tickSize(VALUE)
// how many
    d3.axiosBottom(x)
    .tick(10);

// text format
d3.axiosBottom(x)
    .tickFormat(d3.format(",.0f"))

    d3.axiosBottom(x)
    .tickFormat(function(d){
        return TEXT 
    })

// EXPICIT VALUSE 
d3.axiosBottom(x)
    .tickValues([1,2,3,5,8,13,21])
