$(document).ready(function() {
  hideAboutPanes();
  $(".home-button").click(function () {
    $(".carousel").css("margin-left", "0vw");
    setTimeout(hideAboutPanes, 800);
  });

  $(".about-button").click(function () {
    $(".carousel").css("margin-left", "-100vw");
  });

  $(".contact-button").click(function () {
    $(".carousel").css("margin-left", "-200vw")
    hideAboutPanes();
  });

  $(".background").click(function () {
    $(".background-text").show();
  });

  $(".x-button").click(function () {
    hideAboutPanes();
  });

  function hideAboutPanes() {
      $(".background-text").hide();
  }

});