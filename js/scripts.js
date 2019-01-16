$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputName1 = $("input#inputTo").val().charAt(0).toUpperCase() + $("input#inputTo").val().substr(1);
    var inputName2 = $("input#inputFrom").val().charAt(0).toUpperCase() + $("input#inputFrom").val().substr(1);

    $(".input1").text(inputName1);
    $(".input2").text(inputName2);

    $(".well").show();

    event.preventDefault();
  });
});
