$(".content-container-toggle").click(function () {
  $(".content-container-body-wrapper").slideToggle();
  $(".content-container").toggleClass("content-container-closed");
});