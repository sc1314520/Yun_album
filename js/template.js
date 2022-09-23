$(document).ready(function () {
    $('.ham').click(function (event) {
        event.preventDefault();
        $('.hide-list').toggleClass("hide-list-show");

      });
});