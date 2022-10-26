import {useEffect, useState} from "react";
import './incrementalForm.css';


const IncrementalForm = ({isQuestionnaireToReset, setFinalResult}) => {


    //I need to display one question at a time
    //I need to maintain a state regarding at which question I'm at
    //I need to maintain overall the answers to each question
    //I need to render the actual forms one step at a time
    const loadedCurrentQuestion = window.localStorage.getItem('questionAt') ? Number(JSON.parse(window.localStorage.getItem('questionAt'))) : 1;


    const [currentQuestion, setCurrentQuestion] = useState(loadedCurrentQuestion);
    const [currentTextualQuestion, setCurrentTextualQuestion] = useState('');

    const loadedFinalDisplay = window.localStorage.getItem('finalDisplay') ? JSON.parse(window.localStorage.getItem('finalDisplay')) : [];

    const [finalDisplay, setFinalDisplay] = useState(loadedFinalDisplay);

    const questionBooklet = {
        1: 'What does this picture remind you off ?',
        2: 'You chose it not by randonmness but unconscious intent, what is it saying to you ?',
        3: 'Unpack what you just wrote, what does this picture evoke ? Be detailed',
        4: 'Where does what you uncovered stem from ? Try to dig deep',
        5: 'In what other occasions have you felt this way in the past?',
        6: 'Would you like to feel this way again ?',
        7: 'Why would you like to feel this way again ?'
    }

    const loadedBooklet = window.localStorage.getItem('answerState') ? JSON.parse(window.localStorage.getItem('answerState')) : {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
    }


    const [answerBooklet, setAnswerBooklet] = useState(loadedBooklet);

    useEffect(() => {
        window.localStorage.setItem('answerState', JSON.stringify(answerBooklet));
    }, [answerBooklet])

    useEffect(() => {
            if (currentQuestion <= 7) {
                window.localStorage.setItem('questionAt', JSON.stringify(currentQuestion));
                setCurrentTextualQuestion(questionBooklet[currentQuestion])
            }
        },
        [currentQuestion])

    useEffect(() => {
        if (isQuestionnaireToReset) {
            setCurrentQuestion(1);
            setAnswerBooklet({
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: '',
                7: '',
            })
        }
    }, [isQuestionnaireToReset])


    useEffect(() => {
        if (currentQuestion <= 7) {
            const textArea = document.getElementsByClassName('answer-input');
            textArea[0].value = answerBooklet[currentQuestion];
        }
    }, [currentQuestion])

    async function handleQuestionConfirm(currentQuestion) {

        const inputValue = await document.getElementsByClassName('answer-input');


        await setAnswerBooklet((prevState) => ({
            ...prevState,
            [currentQuestion]: inputValue[0].value,
        }));

    }


    function handleRoutingToNextQuestion(e, currentQuestion) {
        e.preventDefault();
        setCurrentQuestion(++currentQuestion);
    }

    function handleRoutingToPreviousQuestion(e, currentQuestion) {
        e.preventDefault();
        setCurrentQuestion(--currentQuestion);
    }

    function adjustTextAreaSize() {

        const textArea = document.getElementsByClassName('answer-input');
        textArea[0].style.height = "1px";
        textArea[0].style.height = textArea[0].scrollHeight + "px";

    }

    async function displayFinalResult(setFinalResult) {

        setFinalResult(true);

        const mergedQuestionnaire = [];

        for (let i = 0; i <= 7; i++) {
            mergedQuestionnaire[i] = {
                question: questionBooklet[i],
                answer: answerBooklet[i]
            }
        }

        setFinalDisplay(mergedQuestionnaire);

        const previousFormEndDisplay = await document.getElementsByClassName('result-display');
        previousFormEndDisplay[0].style.display = 'none';

        const resultDisplay = await document.getElementsByClassName('finished-display');
        resultDisplay[0].style.display = 'flex';
        resultDisplay[0].style.flexFlow = 'column';
        resultDisplay[0].style.gap = '1em'

        await resultDisplay[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <>
            {currentQuestion <= 7 ?
                <form>
                    <label className='incremental-form-label'>
                        <span data-testid='span'>
                            {currentTextualQuestion}
</span>
                        <textarea className='answer-input' placeholder='Answer here ...'
                                  onInput={adjustTextAreaSize}
                                  onChange={() => handleQuestionConfirm(currentQuestion)}></textarea>
                        <div className='progression-choice'>{ currentQuestion > 1 ?
                            <button data-testid='previous-button'
                                    onClick={(e) => handleRoutingToPreviousQuestion(e, currentQuestion)}>Previous
                            </button> : null
                        }
                            <button data-testid='next-button'
                                onClick={(e) => handleRoutingToNextQuestion(e, currentQuestion)}>Next
                            </button>
                        </div>
                    </label>
                </form>
                :
                <div className='result-display'>
                    <h3>You're all set and done</h3>
                    <button data-testid='finishline-button' onClick={() => {
                        displayFinalResult(setFinalResult)
                    }}>Check answers
                    </button>
                </div>
            }
            <div className='finished-display'>
                <h1 data-testid='result-display'>Are you seeing any patterns ?</h1>
                {finalDisplay.map((element, index) =>
                    <section key={index}>
                        <h3>{element.question}</h3>
                        <p>{element.answer}</p>
                    </section>
                )
                }
            </div>
        </>
        //I need to change a question at display as soon as through a click I change the


    )


}

export default IncrementalForm