// Merge sort function
function mergeSort(array) {
	let leftArray, rightArray, mergedArray;

	// Checks and return array if length is less than 2.
	if (array.length < 2) return array;

	// Divides array into 2 halves.
	if (array.length % 2 === 0) leftArray = array.splice(0, array.length / 2);
	else leftArray = array.splice(0, Math.ceil(array.length / 2));
	rightArray = array.splice(0);

	// The recursive case
	const leftMergeSort = mergeSort(leftArray),
		rightMergeSort = mergeSort(rightArray);

	// Sort two already sorted arrays into one array
	while (leftMergeSort.length && rightMergeSort.length)
		leftMergeSort[0] < rightMergeSort[0]
			? array.push(leftMergeSort.shift())
			: array.push(rightMergeSort.shift());

	/* In case where one array is longer than other in the previous step, 
   the left over item(s) in the longer array (Either leftMergeSort or 
		rightMergeSort) is concated into one array with mergedArray then returned.
  */
	mergedArray = array.concat(leftMergeSort, rightMergeSort);

	return mergedArray;
}