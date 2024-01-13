// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort
export const bubbleSort = (flights_p, type=0) => {
    let flights=flights_p;
    // type 0 = lowest, type 1 = highest
    var i, j, temp;
    var swapped;
    for (i = 0; i < (flights.length - 1); i++) 
    {
        swapped = false;
        for (j = 0; j < (flights.length - i - 1); j++) 
        {
            let condition;
            if((type===1))
                condition  = (parseFloat(flights[j]?.total_amount) < parseFloat(flights[j + 1]?.total_amount));
            else
                condition = (parseFloat(flights[j]?.total_amount) > parseFloat(flights[j + 1]?.total_amount));
    
            if (condition){
                console.log("swap")
                // Swap arr[j] and arr[j+1]
                temp = JSON.parse(JSON.stringify(flights[j]));
                flights[j] = JSON.parse(JSON.stringify(flights[j + 1]));
                flights[j + 1] = JSON.parse(JSON.stringify(temp));
                swapped = true;
            }
        }
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped === false)
        break;
    }
    return flights;
}

// Function to print an array for testing
function printArray(arr, size)
{
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i].total_amount + " ");
}