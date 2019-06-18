/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
console.log("hSy")

// d3.select("h1").style("background", "gray");
var svg = d3.select("#chart-area")
.append("svg").attr("width","400").attr("height" ,"400")
data = [
	{
		"name": "Burj Khalifa",
		"height": "350"
	},
	{
		"name": "Shanghai Tower",
		"height": "263.34"
	},
	{
		"name": "Abraj Al-Bait Clock Tower",
		"height": "254.04"
	},
	{
		"name": "Ping An Finance Centre",
		"height": "253.20"
	},
	{
		"name": "Lotte World Tower",
		"height": "230.16"
	}
]
// d3.json("data/buildings.json",function(eror ,data) {
// alart(eror)
console.log(data)
data.forEach(ele => {
    ele.height = +ele.height
});
console.log("hjy")
// 
var rects =svg.selectAll('rect')
    .data(data)
    .enter()
    .append("rect")
     .attr("x",function (d,i){
        return (i* 60)
    })
    .attr("y" ,20)
   
    .attr("width" ,40)
    .attr("height" , function(d){
        return d.height
    })
    .attr("fill" , function(d){
        return "red"
    })
  
