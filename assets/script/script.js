$(document).ready(function() {
  hideAboutPanes();
  // jQuery Function Number #1
  $(".home-button").click(function () {
    // jQuery Function Number #2
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
    // jQuery Function Number #3
    $(".background-text").show();
  });

  $(".favorites").click(function () {
    $(".favorites-text").show();
  });

  $(".skills").click(function () {
    $(".skills-text").show();
  }); 

  $(".x-button").click(function () {
    hideAboutPanes();
  });

  function hideAboutPanes() {
      $(".background-text").hide();
      $(".favorites-text").hide();
      $(".skills-text").hide();
  }

});