var socket = io.connect();

var width = Math.max(960, innerWidth),
    height = Math.max(500, innerHeight);

var touchData = {};
var users = {};
var session = {};
var user;

// listener, whenever the server emits 'updateusers', this updates the username list
socket.on('updateusers', function(data) {
    $('#printData').empty();
    $.each(data, function(key, value) {
        users[key] = cleanStr(value);
        user = cleanStr(value);
        $('<div/>', {
            'id': 'data-' + user
        }).appendTo('#printData');
    });
});

socket.on('update', function(session, username, userdata, data) {
    if (data != null) {
        $.each(data, function(key, value) {
            console.log(key+', '+value);
            moveX = mapToRange(value.moveToX,0,userdata.w,0,width);
            moveY = mapToRange(value.moveToY,0,userdata.h,0,height);
        });
    }
    if (moveX && moveY) particle(moveX,moveY);
});

function cleanStr(str) {
    if (str != null) {
        if (typeof str == 'string' || str instanceof String) {
            str = str.replace(/\s+/g, '');
            str = str.replace(/,/g, '');
            str = str.replace(/\./g, '');
            str = str.toLowerCase();
            return str
        }
    }
}



var i = 0;

var svg = d3.select("#run").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("width", width)
    .attr("height", height);

function particle(mx,my) {
    svg.insert("circle", "rect")
        .attr("cx", mx)
        .attr("cy", my)
        .attr("r", 1e-6)
        .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
        .style("stroke-opacity", 1)
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr("r", 100)
        .style("stroke-opacity", 1e-6)
        .remove();
}


function mapToRange(value, srcLow, srcHigh, dstLow, dstHigh){
  // value is outside source range return fail
  if (value < srcLow || value > srcHigh){
    return NaN;
  }

  var srcMax = srcHigh - srcLow,
      dstMax = dstHigh - dstLow,
      adjValue = value - srcLow;

  return (adjValue * dstMax / srcMax) + dstLow;
}