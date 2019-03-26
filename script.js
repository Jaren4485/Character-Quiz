
$("button").click(function() {
    var inputValueAge = $(".age").val();
    var inputValueAnswer = $(".answer").val();
    if(inputValueAge  > 18 && inputValueAnswer === 'fun' ) {
        alert('you are correct');
    } else  {
        alert('you are incorrect, try again');
    }
});
