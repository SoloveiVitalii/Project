
$(function() {
  var progressed = 15;
  var interval = setInterval(function() {
      progressed += 1;
      $("#moving-progress-bar")
      .css("width", progressed + "%")
      .attr("aria-valuenow", progressed)
      .text(progressed + "%");
      if (progressed >= 79)
          clearInterval(interval);
  }, 100);
});

$(function() {
  var progressed = 15;
  var interval = setInterval(function() {
      progressed += 1;
      $("#moving-progress")
      .css("width", progressed + "%")
      .attr("aria-valuenow", progressed)
      .text(progressed + "%");
      if (progressed >= 90)
          clearInterval(interval);
  }, 100);
});

$(function() {
  var progressed = 15;
  var interval = setInterval(function() {
      progressed += 1;
      $("#moving-prog")
      .css("width", progressed + "%")
      .attr("aria-valuenow", progressed)
      .text(progressed + "%");
      if (progressed >= 69)
          clearInterval(interval);
  }, 100);
});

$(function() {
  var progressed = 15;
  var interval = setInterval(function() {
      progressed += 1;
      $("#moving-pro")
      .css("width", progressed + "%")
      .attr("aria-valuenow", progressed)
      .text(progressed + "%");
      if (progressed >= 92)
          clearInterval(interval);
  }, 100);
});