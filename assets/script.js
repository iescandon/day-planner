var currentHour = moment().hours();
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

//creates hour blocks in html
hoursArray.forEach(function(hour) {
    var rowDiv = $('<div>');
    rowDiv.addClass('row time-block');
    rowDiv.attr('id', hour);
    var timeCol = $('<div>');
    timeCol.addClass('col-1 hour');
    timeCol.text(hour + ':00');
    var textCol = $('<textarea>');
    textCol.addClass('col-10 description');
    var btnCol = $('<button>');
    btnCol.addClass('col-1 btn saveBtn');
    btnCol.text('save');
    rowDiv.append(timeCol, textCol, btnCol);
    $('.container').append(rowDiv);
})

//sets to local storage
function saveDescription () {
    var time = $(this).parent().attr('id');
    var descriptionText = $(this).siblings('.description').val();
    localStorage.setItem(time, descriptionText);
}

//gets from local storage
hoursArray.forEach(function(hour) {
    $(`#${hour} .description`).val(localStorage.getItem(hour));
})

//adds css classes to hour rows depending on if its in the present past or future
$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id'));
    if (hourBlock < currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
    } else if (hourBlock === currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})

//save button event listener
$('.saveBtn').click(saveDescription);

//clear on new day
