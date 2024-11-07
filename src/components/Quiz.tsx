import { useState } from "react";
import { resultInitialState } from "./Questions";

interface QuizProps {
    title: string;
    questions: Question[];
}

interface Question {
    question: string;
    choices?: string[];
    correctAnswer: string;
    type: string;
}

export default function Quiz({ title, questions }: QuizProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState<number | null>(null);
    const [answer, setAnswer] = useState<boolean | null>(null);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);
    const [inputAnswer, setInputAnswer] = useState("");

    const { question, choices, correctAnswer, type } = questions[currentQuestion];

    const onAnswerClick = (selectedAnswer: string, index: number) => {
        setAnswerIndex(index);
        setAnswer(selectedAnswer === correctAnswer);
    };

    const onClickNext = () => {
        setAnswerIndex(null);
        setInputAnswer("");  // Reset inputAnswer for the next question

        setResult((prev) =>
            answer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }
    };

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setInputAnswer(value);
        setAnswer(value.trim().toLowerCase() === correctAnswer.toLowerCase());
    };

    const getAnswerUI = () => {
        if (type === "FIB") {
            return <input value={inputAnswer} onChange={handleInputChange} />;
        }
        return (
            <ul>
                {choices &&
                    choices.map((choice, index) => (
                        <li
                            className={answerIndex === index ? "selected-answer" : ""}
                            key={choice}
                            onClick={() => onAnswerClick(choice, index)}
                        >
                            {choice}
                        </li>
                    ))}
            </ul>
        );
    };

    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
        setCurrentQuestion(0);
        setAnswerIndex(null);
        setAnswer(null);
        setInputAnswer("");
    };

    return (
        <div className="quiz-container">
            <h1>{title}</h1>
            {!showResult ? (
                <>
                    <p>
                        <span className="active-question-no">{currentQuestion + 1}</span>
                        <span className="total-question">/{questions.length}</span>
                    </p>
                    <h2>{question}</h2>
                    {getAnswerUI()}
                    <div className="quiz-footer">
                        <button
                            onClick={onClickNext}
                            disabled={type === "FIB" ? !inputAnswer : answerIndex === null}
                        >
                            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                </>
            ) : (
                <div className="result">
                    <h3>Result</h3>
                    <p>
                        Score: <span>{result.score}</span>
                    </p>
                    <p>
                        Total Questions: <span>{questions.length}</span>
                    </p>
                    <p>
                        Correct Answers: <span>{result.correctAnswers}</span>
                    </p>
                    <p>
                        Wrong Answers: <span>{result.wrongAnswers}</span>
                    </p>
                    <button onClick={onTryAgain}>Try Again</button>
                </div>
            )}
        </div>
    );
}
