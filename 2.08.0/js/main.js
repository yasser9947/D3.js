/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
console.log("hSy")

var margin = { left: 100, right: 10, top: 10, bottom: 100 };

var width = 600 - margin.left - margin.right
var height = 400 - margin.top - margin.bottom

var svg = d3.select("#chart-area")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
data = [
	{
		"name": "Burj Khalifa",
		"height": "828"
	},
	{
		"name": "Shanghai Tower",
		"height": "623.34"
	},
	{
		"name": "Abraj Al-Bait Clock Tower",
		"height": "601.04"
	},
	{
		"name": "Ping An Finance Centre",
		"height": "599.20"
	},
	{
		"name": "Lotte World Tower",
		"height": "544.16"
	},{
		"name": "yasser Tower",
		"height": "200.34"
	},{
		"name": "areen Tower",
		"height": "430.34"
	}
]
// transform
var g = svg.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
// d3.json("data/buildings.json",function(eror ,data) {
// alart(eror)


console.log(data)
data.forEach(ele => {
	ele.height = +ele.height
});
console.log("hjy")
// 
var x = d3.scaleBand()
	.domain(data.map(function (d) {
		return d.name
	}))
	.range([0, width])
	.paddingInner(0.3)
	.paddingOuter(0.3);

var y = d3.scaleLinear()
	.domain([0, d3.max(data, function (d) {
		return d.height
	})])
	.range([0, height ])


var leftAxis = d3.axisLeft(y)
g.append("g")
	.attr("class", "y-axis")
	.call(leftAxis);



var bottomAxis = d3.axisBottom(x)
g.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0 , " + height + ")")
	.call(bottomAxis)
	.selectAll("text")
		.attr('y' ,`10`)
		.attr('x' ,`-5`)
		.attr('text-anchor' ,`end`)
		.attr('transform' ,`rotate(-40)`)


var rects = g.selectAll('rect')
	.data(data)
	.enter()
	.append("rect")
	.attr("x",  function (d) {
		return x(d.name)
	})
	.attr("y", 0)

	.attr("width", x.bandwidth)
	.attr("height", function (d) {
		return y(d.height)
	})
	.attr("fill", function (d) {
		return "red"
	})

