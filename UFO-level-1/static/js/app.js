// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tbody)

tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

console.log(tbody)
// grab references to the input element and the output div
var form = d3.select("#form");
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element (i.e., the date)
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
  //console.log(tableData);

  //filter by date in input field
  var filteredData = tableData.filter(ufo => ufo.datetime == inputValue);

  console.log(filteredData);

  tbody.html("");
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}


