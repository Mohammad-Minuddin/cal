function num(number){
    var exnumber = $("#result").val();
    $("#result").val(exnumber + number);
}

function numm(){
    $("#result").val('');
}
function cal(){
    var result = eval($("#result").val());
    $("#result").val(result);
};