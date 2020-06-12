//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    let number = $("input#number").val();
    let mad= neighbor(number);
    $("#output").text(mad.join(", "));  
  });  
});

  $("button#reverse").click(function() {
  
    $("#output").append("<li>BABY</li>");
});


  function neighbor(value) {
    let outputArray = [];
    for (i = 0; i <= value; i++) {
      if (i.toString().includes(3)) {
        outputArray.push("Won't you be my neighbor!");
      }
      else if (i.toString().includes(2)) {
        outputArray.push("Boop!");
      }
      else if (i.toString().includes(1)) {
        outputArray.push("Beep!");
      }
      else {
        outputArray.push(i);
      }
    }
    return outputArray;
  }  


