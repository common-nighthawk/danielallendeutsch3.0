$(document).ready(function() {
  $.get("https://location-location-location.firebaseio.com/latest.json", function(dateTime) {
    $.get("https://location-location-location.firebaseio.com/datetimes/" + dateTime + ".json", function(data) {
      $("#city").html(data["city"])
      $("#state").html(data["state"])
    });
  });
});
