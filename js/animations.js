$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var showArray = [];

  $(".show-me").each(function(i, v) {
    var $self = $(this);
    var id = "#" + $self.attr("id");
    var offset = $self.data("offset");

    showArray[i] = new ScrollMagic.Scene({
      triggerElement: id,
      duration: $self.outerHeight(),
      offset: offset
    }).addTo(controller);

    showArray[i].on("enter", function() {
      $self.addClass("show");
      // showSection($self);
    });
    showArray[i].on("leave", function() {
      // $self.removeClass('show');
    });
  });
});
