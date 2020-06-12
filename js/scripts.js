//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    outputArray = [];
    for (i = 0; i <= number; i++) {
      outputArray.push(i);
    }
      $("ul#output").text(outputArray.join(", "));
  });
});
