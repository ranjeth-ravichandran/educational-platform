
export const Questions = {
    easy_bubbblesort_questions: [
        {
            question:
                "What is the worst-case time complexity of the Bubble sort Algorithm?",
            choices: ["O(N log N)", "O(N)", "O(N^2)", "None"],
            type: "MCQs",
            correctAnswer: "O(N^2)",
        },
        {
            question: "Bubble Sort is an example of a ______ sorting algorithm.",
            type: "FIB",
            correctAnswer: "comparison",
        },
        {
            question: "Bubble Sort is an example of a sorting algorithm that:",
            choices: [
                "Uses Divide and Conquer",
                "Uses Dynamic Programming",
                "Swaps adjacent elements directly",
                "Can only work with integers",
            ],
            type: "MCQs",
            correctAnswer: "Swaps adjacent elements directly",
        },
    ],
    hard_bubbblesort_questions: [
        {
            question:
                "In the worst-case scenario, the number of comparisons performed by bubble sort is directly proportional to the _____________ of the input array. What is the missing word?",
            type: "FIB",
            correctAnswer: "(n^2)",
        },
        {
            question:
                "What is the time complexity of the best-case scenario for bubble sort?",
            choices: ["O(N log N)", "O(N)", "O(N^2)", "None"],
            type: "MCQs",
            correctAnswer: "O(N^2)",
        },
        {
            question: "In which scenario would bubble sort perform best?",
            choices: [
                "Array is already sorted.",
                "Array has a small number of elements",
                "Array has nearly equal elements",
                "Array has a large range of values",
            ],
            type: "MCQs",
            correctAnswer: "Array has a large range of values",
        },
        {
            question:
                "What is the key operation performed in each pass of bubble sort?",
            choices: [
                "Swapping adjacent elements",
                "Partitioning the array",
                "Merging subarrays",
                "Comparing consecutive elements",
            ],
            type: "MCQs",
            correctAnswer: "Comparing consecutive elements",
        },
    ],
};

export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
};
