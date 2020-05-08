
//current day
var a = moment().format('MMMM Do YYYY');

//how many hours since day started
var b = moment().startOf('day').fromNow();


//setter
moment().seconds(30);

//getter
moment().seconds();


//pass in milliseconds
moment.duration (3600).humanize();

//specify what kind of time measurement
moment.duration(3600, 'seconds').hours();


//languages
moment.locale('es');
var march = moment ('2017-03')
// console.log(march.format('MMMM'))


// var currentDayEl = $('#currentDay');
// var currentDay = moment().format('MMMM Do YYYY');
// currentDayEl.text(currentDay);


var currentTime =  moment().hours();

$('#currentDay').text(moment().format('MMMM Do YYYY'));


function saveDescription () {
    var time = $(this).parent().attr('id');
    var descriptionText = $(this).siblings('.description').val();
    localStorage.setItem(time, descriptionText);
}


$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));



$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id')) 
    
    if ( hourBlock < currentTime ) {
        $(this).addClass('past')
    } else if ( hourBlock === currentTime ) {
        $(this).removeClass('past')
        $(this).addClass('present')
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})





$('.saveBtn').click(saveDescription);