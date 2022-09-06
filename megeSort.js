/**
 * Merge sort function
 */
function mergeSort(array) {
	let leftArray;

	// Checks and return array if length is less than 2.
	if (array.length < 2) return array;

	// Divides array into 2 halves.
	if (array.length % 2 === 0) leftArray = array.splice(0, array.length / 2);
	else leftArray = array.splice(0, Math.ceil(array.length / 2));

	/* Programme alls itself until it splits each divided unit into
  single item array then it starts returning each sorted array recursively 
  to merge function until all sub arrays are sorted into one then programme ends.
  */
	return merge(mergeSort(leftArray), mergeSort(array));
}

/**
 * Merge function takes in 2 sorted arrays and merge into one sorted array.
 */
function merge(leftArray, rightArray) {
	// Array where sorted items will be pushed to.
	let mergedArray = [];

	// Compares first items in each array and pushes the smallest to mergedArray.
	while (leftArray.length && rightArray.length)
		leftArray[0] < rightArray[0]
			? mergedArray.push(leftArray.shift())
			: mergedArray.push(rightArray.shift());

	/* In case where one array is shorter than other in the previous step, 
   the left over item(s) in longer array is concated into one array with
   mergedArray then returned.
  */
	return mergedArray.concat(leftArray, rightArray);
}
