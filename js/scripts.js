$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputName1 = $("input#inputTo").val();
    var inputName2 = $("input#inputFrom").val();

    $(".input1").append(inputName1);
    $(".input2").append(inputName2);

    event.preventDefault();
  });
});
