//Bubble sort Example
// The example below is demonstrating the use of bubble sort 



//Sorting Algorithm

function bubbleSort(arrayToSort) {
var swapped;
do {
  swapped = false;
  for (var i = 0; i < arrayToSort.length - 1; i++) {
    if (arrayToSort[i] > arrayToSort[i + 1]) {
      var temp = arrayToSort[i];
      arrayToSort[i] = arrayToSort[i + 1];
      arrayToSort[i + 1] = temp;
      swapped = true;
    }
  }
} while (swapped);
}


  //Bubble Sorting Results
  function createList(event) {
    var number = prompt("Enter your numbers and please separate with a comma");
    document.getElementById("result").innerText = number;
    event.preventDefault();
    
}
 
function createSortedArray(event) {
    var list = document.getElementById("result").innerText.split(",").map(Number);
    bubbleSort(list);
    document.getElementById("result").innerText = "Your numbers sorted: " + list;
    event.preventDefault();
    event.stopPropagation();

}