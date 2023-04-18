import React from 'react';

const Python_Sorting_Techniques = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold"> Python Sorting Techniques</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Python Sorting Techniques</h2>
        <p className="mb-4">
          Sorting refers to arranging data in a particular format. Sorting techniques are used to arrange data (mostly numerical) in an ascending or descending order.
          The importance of sorting lies in the fact that data searching can be optimized to a very high level,   if data is stored in a sorted manner. Sorting is also used to represent data in more readable formats.
        </p>

        <ol class="list-decimal list-inside my-4">
          <li>Bubble Sort</li>
          <li>Insertion Sort</li>
        </ol>
        <h2 className="text-xl font-bold mb-4">Bubble Sort</h2>
        <p className="mb-4">
          Bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. It is also known as the sinking sort.
          <br />
          Of all the sorting algorithms, a bubble sort is the simplest. It is a first sorting algorithm that we learn. Both learning it and using it are really intuitive. It may be simple to incorporate into the code, which is quite helpful for new software engineers. But because it verifies each time the array is sorted or not, it is the worst algorithm for sorting the elements in every array.
          <br />
          The bubble sort uses a straightforward logic that works by repeating swapping the adjacent elements if they are not in the right order. It compares one pair at a time and swaps if the first element is greater than the second element; otherwise, move further to the next pair of elements for comparison.
        </p>

        <h2 className="text-xl font-bold mb-4">Insertion Sort</h2>
        <p className="mb-4">
          Insertion Sort is a stable and in-place sorting algorithm that is simple to construct, making it more beneficial for sorting nearly-sorted components. Insertion sort is a sorting algorithm that puts an unsorted element in its proper place in each iteration.
          An array is split into two smaller arrays for insertion sort:
        </p>
        <ol class="list-decimal list-inside my-4">
          <li>Sorted</li>
          <li>Unsorted</li>
        </ol>
        <p className="mb-4">
          where, each item is compared and moved from the unsorted to the sorted portions until the array is sorted.
          Insertion sort is a straightforward algorithm that functions similarly to how we sort playing cards with both hands. We go over each card one at a time and compare them to one another. Up until they are completely sorted, the sorted cards would be on the left of our hand and the unsorted cards would be on the right.
        </p>

      </main>
    </div>
  );
};

export default Python_Sorting_Techniques;
