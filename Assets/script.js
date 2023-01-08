var time9am = $("#9am");
var time10am = $("#10am");
var time11am = $("#11am");
var time12pm = $("#12pm");
var time1pm = $("#1pm");
var time2pm = $("#2pm");
var time3pm = $("#3pm");
var time4pm = $("#4pm");
var time5pm = $("#5pm");

var timeArray = [
  time9am,
  time10am,
  time11am,
  time12pm,
  time1pm,
  time2pm,
  time3pm,
  time4pm,
  time5pm,
];

//displays current day and time at the top of page
var timeDisplay = $("#currentDay");
function displayTime() {
  var rightNow = dayjs().format("dddd, MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
}

// function for handling clicks
var saveBttn = $(".saveBtn");
function submitForm(event) {
  event.preventDefault();

  let btnClicked = $(event.currentTarget);

  let targetText = btnClicked.siblings("textarea");

  let targetTimeBlock = targetText.data("hour");

  localStorage.setItem("time block " + targetTimeBlock, targetText.val());
}

// This shows what is in the local storage and displays it.
function showTask() {
  for (var el of timeArray) {
    el.val(localStorage.getItem("time block " + el.data("hour")));
  }
}
showTask();

saveBttn.on("click", submitForm);

displayTime();
setInterval(displayTime, 1000);
