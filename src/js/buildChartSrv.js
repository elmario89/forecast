;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$buildChart', [ buildChart]);

  function buildChart(data) {
    this.buildBarChart = function(data) {
      var container = document.querySelector('.content'),
          width = container.offsetWidth,
          height = 500,
          barWidth = width / data.length;

      var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d) { return d; })])
        .range([height, 0]);

      var chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', height);

      var bar = chart.selectAll('g')
        .data(data)
        .enter().append('g')
        .attr("transform", function(d, i) { return "translate(" + i * barWidth + ", 0)"; });

      bar.append('rect')
        .attr('class', 'bar')
        .attr("y", function(d) { return y(d); })
        .attr('height', function(d) { return height - y(d); })
        .attr('width', barWidth);
    }
  }
})();
