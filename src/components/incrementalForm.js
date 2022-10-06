import {useEffect, useState} from "react";


const styleForm = {

    alignSelf: 'center',


}

const styleLabel = {

    display: 'flex',
    flexFlow: 'column',
    gap: '1em',
    justifySelf: 'center',
    borderStyle: 'solid',
    padding: '1em',
    borderRadius: '0.6em'


}

const styleButtons = {

    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',

}

const styleTextArea = {

    borderRadius: '0.6em',
    padding: '1em',
    alignSelf: 'center'


}


const IncrementalForm = () => {


    //I need to display one question at a time
    //I need to maintain a state regarding at which question I'm at
    //I need to maintain overall the answers to each question
    //I need to render the actual forms one step at a time
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [currentTextualQuestion, setCurrentTextualQuestion] = useState('');

    const questionBooklet = {
        1: 'What does this picture remind you off ?',
        2: 'You chose it not by randonmness but unconscious intent, what is it saying to you ?',
        3: 'Unpack what you just wrote, what does this picture evoke ? Be detailed',
        4: 'Where does what you uncovered stem from ? Try to dig deep',
        5: 'In what other occasions have you felt this way in the past?',
        6: 'Would you like to feel this way again ?',
        7: 'Why would you like to feel this way again ?'
    }

    const [answerBooklet, setAnswerBooklet] = useState({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
    });


    async function handleQuestionConfirm(e, currentQuestion) {

        e.preventDefault();
        const inputValue = await document.getElementsByClassName('answer-input');

        console.log(inputValue[0].value);

        await setAnswerBooklet((prevState) => ({
            ...prevState,
            [currentQuestion]: inputValue[0].value,
        }));
    }

    useEffect(() => console.log(answerBooklet), [answerBooklet])


    function handleRoutingToNextQuestion(e, currentQuestion) {
        e.preventDefault();
        setCurrentQuestion(++currentQuestion);
        console.log(currentQuestion);
    }

    function handleRoutingToPreviousQuestion(e, currentQuestion) {
        e.preventDefault();
        setCurrentQuestion(--currentQuestion);
        console.log(currentQuestion);

    }


    useEffect(() => {
        setCurrentTextualQuestion(questionBooklet[currentQuestion])
    }, [currentQuestion])


    //onButton Click, what does it do ? saves the state of the single question into its relative spot and proceeds, that question is then retrievable through
    //the current question that we're at, and navigating forward or backward actually increases or decreases the number question
    //number question is then bound to what gets rendered as the current question


    //On ok button I set the object


    return (

        <form style={styleForm}>
            <label style={styleLabel}>
                {currentTextualQuestion}
                <textarea className='answer-input' style={styleTextArea} placeholder='Answer here ...'/>
                <div style={styleButtons}>
                    <button onClick={(e) => handleRoutingToPreviousQuestion(e, currentQuestion)}>Previous</button>
                    <button type='submit' onClick={(e) => handleQuestionConfirm(e, currentQuestion)}>Ok</button>
                    <button onClick={(e) => handleRoutingToNextQuestion(e, currentQuestion)}>Next</button>
                </div>
            </label>
        </form>

        //I need to change a question at display as soon as through a click I change the


    )


}

export default IncrementalForm