// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// grab references to the input element and the output div
var datetime = d3.select("#datetime");
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
datetime.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
}

// Function to filter data
function filterData(ufo) {
  // return table data with matching date;
  return ufo.date == inputValue;
}


// // Function to handle input change
// function handleChange(event) {
//   // grab the value of the input field
//   //var inputDate = d3.event.target.value;
//   console.log("handleChange: ",inputDate);

//   // filter on date
//   var filteredData = tableData.filter(ufo => ufo.date == inputDate);
//   //console.log(filteredData);

//   // Set the output text to the reversed input string
// //   output.text(reversedInput);
// }

// datetime.on("change", function() {
//     var inputDate = d3.event.target.value;
//     console.log("date field: ",inputDate);
//   });

// //datetime.on("change", handleChange);
// button.on("click", handleChange);

