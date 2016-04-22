$(document).ready(function() {

  $(".numero").click(function () {
  var phone = $(".numero").attr("data_num");
  $(".numero").html("<a href='tel:+4178900" + phone + "'>Tel. 078/900." + phone + "</a>");

 });
});
