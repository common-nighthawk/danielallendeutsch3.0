$(document).ready(function() {
  $.get("https://location-location-location.firebaseio.com/datetimes.json", function(dateTimes) {
    var dateTime = recentestDateTime(dateTimes)
    $("#city").html(dateTime["city"])
    $("#state").html(dateTime["state"])
  });
});

// TODO: improve method. it should return the most recent datetime obj with non-blank city and state
function recentestDateTime(allDateTimes) {
  return allDateTimes[Math.max(...Object.keys(allDateTimes))];
}
