$(document).ready(function(){

$('button.add-follower').click(function(){
$('section#main').toggle(3000);
});

$('button.btn.btn-danger.btn-sm.del').click(function(e){
e.preventDefault();
$(this).closest('tr').remove();
});


var step=0;
$('form').submit(function(e){
	
if ($('#name').val() != null) {
	e.preventDefault();
	step++;

var tabRow = $('<tr>', {class: 'ne'+step}).appendTo('#tableBody');
var tabName = $('<td>', {text: $('#name').val()}).appendTo('tr.ne'+step);
var tabSurname = $('<td>', {text: $('#surname').val()}).appendTo('tr.ne'+step);
var tabEmail = $('<td>', {text: $('#email').val()}).appendTo('tr.ne'+step); 
var tabTel = $('<td>', {text: $('#phone').val()}).appendTo('tr.ne'+step); 
var tabDate = $('<td>', {text: $('#date').val()}).appendTo('tr.ne'+step); 
var delTd = $('<td>', {class: 'remove'+step}).appendTo('tr.ne'+step); 
var delButton = $('<button>', {class:'btn btn-danger btn-sm', text: 'x'}).appendTo('td.remove'+step);


$('button.btn.btn-danger.btn-sm').click(function(e){
e.preventDefault();
$(this).closest('tr').remove();


});
}
});




});




