$(document).ready(function() {

  $.get("/api/listings").then(function(data) {
    $(".list-date").text(data.date);
    $(".list-name").text(data.name);
    $(".list-email").text(data.email);
    $(".list-tel").text(data.tel);
    $(".list-desc").text(data.description);
    $(".list-loc").text(data.location);
    $(".list-rate").text(data.hourRate);
  });
});
