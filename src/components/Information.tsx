
const Computer = "/images/computer.jpg";
const Computer2 = "/images/computer2.jpg";
const Computer3 = "/images/computer3.jpg";
const Computer4 = "/images/computer4.jpg";

import InformationData from "./InformationData";

export default function Information() {
    return (
        <div className="information">
            <h1>Information</h1>
            <p>This site will provide a few topics on Computer Science.</p>

            <InformationData
                className="first-info"
                heading="Data Structures & Algorithms"
                text="Data structures and algorithms (DSA) form the bedrock of modern
					software. They define how we organize and manipulate information,
					shaping the efficiency and functionality of the programs we rely on
					every day. From the seamless streaming of your favorite playlist to
					the instant search results on your fingertips, DSA plays a crucial
					role in crafting powerful and user-friendly experiences."
                img1={Computer}
                img2={Computer2}
            />

            <InformationData
                className="first-info-reverse"
                heading="Sorting Algorithms"
                text="Sorting algorithms, the digital janitors of our code, tirelessly organize data into a desired order. For university students, mastering these algorithms isn't just about neat lists; it's about understanding the intricate dance of efficiency and complexity. Bubble sort, a slow but intuitive waltz, swaps adjacent elements until order prevails. Merge sort, a disciplined two-step, splits arrays in half, conquers each sub-array, and gracefully merges them back. Quicksort, a daring pirouette, picks a pivot element and partitions data around it, recursively conquering chaos. Each algorithm shines in different scenarios, revealing the delicate interplay of time and space complexity. As you delve deeper, you'll encounter a vibrant ecosystem of diverse sorting techniques, each a testament to the ingenuity of algorithm designers."
                img1={Computer3}
                img2={Computer4}
            />
        </div>
    );
}
