$(document).ready(function(){

$('form.login').submit(function(e){
	e.preventDefault();
$('div#login-page').hide();
$('div#dashboard-page').show();
$('div#followers-page').show();
});


//show add follower form
$('button.add').click(function(e){
	e.preventDefault();
$('section#add-follower').toggle(2000);
});

//create table for the coming array
function makeTable(container, data) {
    var table = $("<table/>").addClass('newTable table table-striped table-dark');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });

    return container.append(table);
}
//create empty array for followers
var data =[['Name', 'Surname', 'Gender', 'Country', 'Email', 'Telephone']]
  
//place the table on its location
var dataTable = makeTable($('div.followers-table'), data);

//on form submit store inputs in the big array and create a row with the given values
$('form.add-follower').submit(function(e){
	e.preventDefault();
	if(($('input.myElement').val()).length == 0){
	  alert('Please fill the form first');
    }
	else if ($('input.myElement').val() !== null) {
	var inputs = []; 
	$('input.myElement').each(function(){
            inputs.push($(this).val());
        });
    data.push(inputs);

     //add a row on each input
    $('table.newTable').append('<tr><td>'+inputs[0]+'</td><td>'+inputs[1]+'</td><td>'+inputs[2]+'</td><td>'+inputs[3]+'</td><td>'+inputs[4]+'</td><td>'+inputs[5]+'</td><td><button>remove</button><td></tr>');
    //delete row
    $('table.newTable button').click(function(e){
       e.preventDefault();
       $(this).closest('tr').remove();
    });
    //update statistics on each input
    var countFollower = $('table.newTable tr').length-1
    $('span.fol-no').html(countFollower);
    var multiplier= parseInt(100/countFollower);
    var countMale = $('table.newTable td:contains(Male)').length;
    var malePercentage = multiplier*countMale;
    $('span.male-no').html(malePercentage);
    var countFemale = $('table.newTable td:contains(Female)').length;
    var femalePercentage = multiplier*countFemale;
    $('span.female-no').html(femalePercentage);
    var a = {}, l = 0;
    $('table.newTable tr td:nth-child(4').each(function(){
        if (!a[$(this).text()]) {
            l++;
            a[$(this).text()] = true;
        }
    });
    $('span.countries-no').html(l);

}

});   

//hide or show columns
$('#btnHide1').click(function() {
  $('table.newTable td:nth-child(1),th:nth-child(1)').toggle();
});
$('#btnHide2').click(function() {
  $('table.newTable td:nth-child(2),th:nth-child(2)').toggle();
});
$('#btnHide3').click(function() {
  $('table.newTable td:nth-child(3),th:nth-child(3)').toggle();
});
$('#btnHide4').click(function() {
  $('table.newTable td:nth-child(4),th:nth-child(4)').toggle();
});
$('#btnHide5').click(function() {
  $('table.newTable td:nth-child(5),th:nth-child(5)').toggle();
});
$('#btnHide6').click(function() {
  $('table.newTable td:nth-child(6),th:nth-child(6)').toggle();
});


//search follower 
$("#myInput").keyup(function () {
    var rows = $("table.newTable").find("tr").hide();
    if (this.value.length) {
        var data = this.value.split(" ");
        $.each(data, function (i, v) {
            rows.filter(":contains('" + v + "')").show();
        });
    } else rows.show();
});



});













