import {useEffect, useState} from "react";


 const IncrementalForm = () => {


    //I need to display one question at a time
    //I need to maintain a state regarding at which question I'm at
    //I need to maintain overall the answers to each question
    //I need to render the actual forms one step at a time


     const questionBooklet = {
         1: 'What does this picture remind you off ?',
         2: 'You chose it not by randonmness but unconscious intent, what is it saying to you ?',
         3: 'Unpack what you just wrote, what does this picture evoke ? Be detailed',
         4: 'Where does what you uncovered stem from ? Try to dig deep',
         5: 'In what other occasions have you felt this way in the past?',
         6: 'Would you like to feel this way again ?',
         7: 'Why would you like to feel this way again ?'
     }

     const answerBooklet = {
         1: '',
         2: '',
         3: '',
         4: '',
         5: '',
         6: '',
         7: '',
     } //doesn't persist across renderings


     function handleQuestionConfirm(e, currentQuestion) {
         e.preventDefault();
         answerBooklet[currentQuestion] = e;
     }

     function handleRoutingToPreviousQuestion(currentQuestion) {
         setCurrentQuestion(currentQuestion--);
     }



     const [currentQuestion, setCurrentQuestion] = useState(0);


     //onButton Click, what does it do ? saves the state of the single question into its relative spot and proceeds, that question is then retrievable through
     //the current question that we're at, and navigating forward or backward actually increases or decreases the number question
     //number question is then bound to what gets rendered as the current question



     return (

         <form>
             <label>
                 {questionBooklet[currentQuestion]}
             <input type='text'/>
             <button>Previous</button>
             <button onClick={(e, currentQuestion) => handleQuestionConfirm(e.target.value, currentQuestion)}>Ok</button>
             <button>Next</button>
             </label>



         </form>





     )














}

export default IncrementalForm