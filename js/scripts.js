//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    let outputArray = [];
   
    for (i = 0; i <= number; i++) {
      if (i.toString().includes(1)) {
        outputArray.push("Beep!");
      }
      else if (i.toString().includes(2)) {
        outputArray.push("Boop!");
      }
      else if (i.toString().includes(3)) {
        outputArray.push("Won't you be my neighbor!");
      }
      else {
        outputArray.push(i);
      }
    }
  


      $("ul#output").text(outputArray.join(", "));
  });
});
