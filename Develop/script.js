// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
//
// });

// textarea elements
var time9am = $("#9am");
var time10am = $("#10am");
var time11am = $("#11am");
var time12pm = $("#12pm");
var time1pm = $("#1pm");
var time2pm = $("#2pm");
var time3pm = $("#3pm");
var time4pm = $("#4pm");
var time5pm = $("#5pm");

var timeElArray = [
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
var timeDisplayEl = $("#currentDay");
function displayTime() {
  var rightNow = dayjs().format("dddd, MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// function for handling clicks
var saveBttn = $(".saveBtn");
function submitForm(event) {
  event.preventDefault();

  var clickBtn = $(event.currentTarget);
  var text = clickBtn.siblings("textarea");
  var time = text.data("hour");

  localStorage.setItem("time" + time, text.val());
}

saveBttn.on("click", submitForm);

// function submitFrom(event) {
//   event.preventDefault();

//   var clickBtn = $(event.currentTarget);
//   var text = clickBtn.siblings("textarea");
//   var time = text.data("hour");

//   localStorage.setItem("time" + time, text.val());
// }

displayTime();
setInterval(displayTime, 1000);
