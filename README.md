# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.
\

///
Use the in-place method to partition the array. When partitioning, select a base value and divide the array into two parts by exchanging elements: less than or equal to the base value and greater than the base value.\

Then push the index of the unsorted subarray into the stack until the stack is empty.\

If the base value selected each time is the smallest or largest element in the array or a sorted element, each partition will result in an extremely unbalanced partition.\

In the worst case, each partition only reduces n elements and requires n comparisons, with a time complexity of $O(n^2)$\

###\
https://stackoverflow.com/questions/20917617/whats-the-difference-of-dual-pivot-quick-sort-and-quick-sort\

https://stackoverflow.com/questions/4834740/what-is-the-worst-case-scenario-for-quicksort\

Sources: Provide the principle of pushing the unsorted subarray index into the stack, how to record the pivot position, and help me locate the cause of the error. For the proof part, it comes from the following website\
The above information only provides me with some basic explanations and detailed explanations of theorems. The code construction and the complete problem-solving process are completed by myself.\

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
