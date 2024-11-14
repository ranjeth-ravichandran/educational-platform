import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Questions } from "@/components/Questions";
import Quiz from "@/components/Quiz";
import Visualiser from "@/components/Visualiser";

const Bubblesort_Information = () => {
    const pseudocode = `function bubbleSort(list):
	swapped = True
	while swapped:
	  swapped = False
	  for i in range(len(list) - 1):
		if list[i] > list[i + 1]:
		  list[i], list[i + 1] = list[i + 1], list[i] # Swap elements
		  swapped = True
	return list`;
    return (
        <div className="bubblesort-information">
            <h1>What is Bubble Sort?</h1>
            <p>
                Bubble sort is a simple sorting algorithm that repeatedly steps through
                a list, comparing adjacent elements, and swapping them if they are in
                the wrong order. Think of it like repeatedly bubbling the largest
                element to the end of the list, hence the name.
            </p>
            <h1>How Does it Work?</h1>
            <ol>
                <li>
                    <b>Iteration:</b> Bubble sort works through the list multiple times
                    (iterations).
                </li>
                <li>
                    <b>Comparison:</b> In each iteration, it compares adjacent elements
                    (pairs).
                </li>
                <li>
                    <b>Swapping:</b> If a pair is in the wrong order (i.e., the first
                    element is bigger than the second), they are swapped.
                </li>
                <li>
                    <b>Bubbling Up:</b> This swapping essentially &quot;bubbles&quot; the larger
                    element towards the end of the list.
                </li>
                <li>
                    <b>Optimisation:</b> With each iteration, the largest element is
                    likely already in its final position, so the comparisons stop earlier
                    in the list, improving efficiency.
                </li>
            </ol>
            <h1>Pseudocode</h1>
            <pre className="code">{pseudocode}</pre>
            <div className="cards">
                <div className="flip">
                    <div
                        className="front"
                        style={{
                            background: "#05BE70",
                        }}
                    >
                        <h1 className="text-shadow">Advantages</h1>
                    </div>
                    <div className="back">
                        <ul>
                            <li>Simple to understand and implement.</li>
                            <li>Good for small datasets.</li>
                            <li>Stable (preserves relative order of equal elements).</li>
                        </ul>
                    </div>
                </div>
                <div className="flip">
                    <div
                        className="front"
                        style={{
                            background: "#EE4640",
                        }}
                    >
                        <h1 className="text-shadow">Disadvantages</h1>
                    </div>
                    <div className="back">
                        <ul>
                            <li>Slow on big datasets: O(n^2)</li>
                            <li>
                                Performs many unnecessary comparisons and swaps, even when
                                partially sorted.
                            </li>
                            <li>Outperformed by merge sort or quicksort.</li>
                        </ul>
                    </div>
                </div>
                <div className="flip">
                    <div
                        className="front"
                        style={{
                            background: "#00DDFF",
                        }}
                    >
                        <h1 className="text-shadow">Time Complexity</h1>
                    </div>
                    <div className="back">
                        <ul>
                            <li>Worst & Average Case: O(n^2)</li>
                            <li>Nested loops, leading to more comparisons and swaps.</li>
                            <li>Best to use in small datasets.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function BubbleSort() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1637775297509-19767f6fc225?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Bubble Sort"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            {Bubblesort_Information()}
            <Visualiser sorting_method={"bubbleSort"} sorting_text={"Bubble Sort"} />
            <div className="quiz-group-container">
                <Quiz title={"Easy"} questions={Questions.easy_bubbblesort_questions} />
                <Quiz title={"Hard"} questions={Questions.hard_bubbblesort_questions} />
            </div>
            {/* <CodeChallenges
                CodeQuestions={CodeQuestions.bubbblesort_coding_questions}
            /> */}
        </>
    );
}