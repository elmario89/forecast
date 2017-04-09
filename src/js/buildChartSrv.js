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
          barHeight = 11;

      var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, width]);

      var chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', height);

      var bar = chart.selectAll('g')
        .data(data)
        .enter().append('g')
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

      bar.append('rect')
        .attr('width', x)
        .attr('height', barHeight - 1);
    }
  }
})();
