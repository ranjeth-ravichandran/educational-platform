/* eslint-disable @typescript-eslint/no-explicit-any */


import React, { useState, useRef, useEffect, useCallback } from "react";

/* import { getQuickSortAnimations } from "../algorithms/QuickSort"; */
import { getBubbleSortAnimations } from "@/algorithms/BubblesortAlgo";
/* import { getSelectionSortAnimations } from "../algorithms/SelectionSort";
import { getInsertionSortAnimations } from "../algorithms/InsertionSort";
import { getHeapSortAnimations } from "../algorithms/HeapSort"; */

// Default Values
const DEFAULT_ARRAY_SIZE = 50;
const DEFAULT_ANIMATION_SPEED = 50;
const ARRAY_MIN_VALUE = 20;
const ARRAY_MAX_VALUE = 500;

interface VisualiserProps {
    sorting_method: string;
    sorting_text: string;
}


const Visualiser = ({ sorting_method, sorting_text }: VisualiserProps) => {
    const [arraySize, setArraySize] = useState<number>(DEFAULT_ARRAY_SIZE);
    const [animationSpeed, setAnimationSpeed] = useState<number>(DEFAULT_ANIMATION_SPEED);
    const [array, setArray] = useState<number[]>([]);
    const [disableButtons, setDisableButtons] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    // Duplicate the array to avoid state mutation
    const duplicateArray = array.slice();

    const generateNewArray = useCallback(() => {
        const newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(randomIntFromInterval(ARRAY_MIN_VALUE, ARRAY_MAX_VALUE));
        }
        resetBarColors();
        setArray(newArray);
    }, [arraySize]);

    useEffect(() => {
        generateNewArray();
    }, [arraySize, generateNewArray]);

    const resetArray = () => {
        generateNewArray();
    };

    // Helper function to get random values in a range
    const randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Resets bar colors back to the default
    const resetBarColors = (): void => {
        const arrayBars = document.getElementsByClassName("arrayBar") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = "gray";
        }
    };

    // Function to handle animations
    const animateSorting = (animations: any[] | null) => {
        setDisableButtons(true);

        // Cast `arrayBars` to `HTMLCollectionOf<HTMLElement>` to access `style`
        const arrayBars = document.getElementsByClassName("arrayBar") as HTMLCollectionOf<HTMLElement>;

        animations?.forEach((animation, i) => {
            const isColorChange = i % 3 !== 1;

            setTimeout(() => {
                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animation;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i % 3 === 0 ? "turquoise" : "#353535";

                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                } else {
                    const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animation;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;

                    barOneStyle.height = `${newHeightOne}px`;
                    barTwoStyle.height = `${newHeightTwo}px`;
                }
            }, i * (101 - animationSpeed));
        });

        setTimeout(() => {
            setDisableButtons(false);
        }, (animations?.length || 0) * (101 - animationSpeed));
    };

    // Main sorting method switch
    const sortingMethod = () => {
        let animations = null;
        switch (sorting_method) {
            case "bubbleSort":
                animations = getBubbleSortAnimations(duplicateArray, arraySize);
                break;
            case "selectionSort":
                /* animations = getSelectionSortAnimations(duplicateArray, arraySize); */
                break;
            case "quickSort":
                /* animations = getQuickSortAnimations(duplicateArray, arraySize); */
                break;
            case "heapSort":
                /* animations = getHeapSortAnimations(duplicateArray, arraySize); */
                break;
            case "insertionSort":
                /* animations = getInsertionSortAnimations(duplicateArray, arraySize); */
                break;
            default:
                return;
        }
        animateSorting(animations);
    };

    const barWidth = arraySize > 50 ? 12 : arraySize > 25 ? 17 : 24;

    return (
        <div className="sorting">
            <div className="navbar">
                <div className="sliderContainer">
                    <div className="size">
                        <label htmlFor="slider">Size of Array: {arraySize}</label>
                        <input
                            type="range"
                            id="slider"
                            className="slider"
                            min={5}
                            max={100}
                            value={arraySize}
                            onChange={(e) => setArraySize(Number(e.target.value))}
                            disabled={disableButtons}
                        />
                    </div>
                    <div className="speed">
                        <label htmlFor="Speedslider">Sorting Speed: {animationSpeed}</label>
                        <input
                            type="range"
                            id="Speedslider"
                            className="slider"
                            min={1}
                            max={100}
                            value={animationSpeed}
                            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                            disabled={disableButtons}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <button
                        className="ui button generate"
                        disabled={disableButtons}
                        onClick={resetArray}
                    >
                        Generate New Array
                    </button>
                    <button
                        className="ui button"
                        disabled={disableButtons}
                        onClick={sortingMethod}
                    >
                        {sorting_text}
                    </button>
                </div>
            </div>

            <div className="main" ref={ref}>
                {array.map((value, index) => (
                    <div
                        className="arrayBar"
                        key={index}
                        style={{ height: `${value}px`, width: `${barWidth}px` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Visualiser;
