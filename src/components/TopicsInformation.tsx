const selectionImage = "/images/selection.jpg";
const bubbleImage = "/images/bubble.jpg";
const mergeImage = "/images/merge.jpg";
import TopicData from "./TopicData";

export default function TopicsInformation() {
    return (
        <div className="topics">
            <h1>Topics</h1>
            <p>
                This website dives into the fascinating realm of data structures and
                algorithms, empowering you to build efficient and impactful software.
            </p>
            <div className="topic-card">
                <TopicData
                    image={selectionImage}
                    heading="Selection Sort"
                    text="Selection Sort stands as a methodical sorting algorithm, meticulously selecting and positioning elements into their rightful places within a list. Its core principle involves repeatedly scanning the unsorted portion of the list to identify the smallest (or largest, depending on the desired order) element and swapping it with the first element in that unsorted segment. This process continues iteratively, gradually establishing order from the beginning of the list until all elements are sorted. While not the most efficient algorithm in all cases, Selection Sort stands out for its simplicity and in-place nature, requiring minimal extra memory during execution. These qualities make it a suitable choice for scenarios where memory is a constraint, or when a basic, intuitive sorting approach is preferred."
                    route={"/selection-sort"}
                />
                <TopicData
                    image={bubbleImage}
                    heading="Bubble Sort"
                    text="Bubble Sort, a fundamental sorting algorithm, takes a methodical approach to arranging data in ascending or descending order. It operates by repeatedly iterating through a list, comparing adjacent elements, and swapping them if they are in the wrong order. This process continues until no further swaps are necessary, ensuring the elements are ultimately sorted. While relatively simple to grasp, Bubble Sort often faces efficiency challenges, especially when handling large datasets. However, its intuitive nature makes it a valuable tool for understanding core sorting concepts and fostering a foundation for exploring more complex algorithms."
                    route={"/bubble-sort"}
                />
                <TopicData
                    image={mergeImage}
                    heading="Merge Sort"
                    text="
                    Merge Sort emerges as a refined strategy for organizing data, embracing a divide-and-conquer approach to achieve efficient sorting. It operates by recursively splitting an array into smaller sub-arrays until each sub-array contains a single element, which is inherently sorted. The algorithm then meticulously merges these sorted sub-arrays back together in a step-by-step fashion, ensuring the final array is entirely sorted. Merge Sort stands out for its consistent efficiency, demonstrating a time complexity of O(n log n) in most cases. This reliable performance makes it a preferred choice for handling large datasets and scenarios where predictable sorting time is crucial. Additionally, its recursive nature aligns well with parallel processing, amplifying its potential in modern computing environments."
                    route={"/merge-sort"}
                />
            </div>
        </div>
    )
}