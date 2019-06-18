// d3.select("body").style("background-color", "black");
var r = document.querySelector('h1')
r.style.color = 'red';
d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
// $("h1").css("color", "yellow");
