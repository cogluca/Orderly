import './App.css';

import SearchBar from "./components/searchBar";
import {useEffect, useState} from "react";
import IncrementalForm from "./components/incrementalForm/incrementalForm";
import InitialExplanation from "./components/initialExplanation";

function App() {

    const loadedImageUrl = window.localStorage.getItem('chosenImage')? JSON.parse(window.localStorage.getItem('chosenImage')): "";

    const [chosenImageUrl, setChosenImageUrl] = useState(loadedImageUrl);
    const [curtainIsVisible, setCurtainIsVisible] = useState(true);

    const [isQuestionnaireToReset, setIsQuestionnaireToReset] = useState(false);

    const [displayFinalResult, setDisplayFinalResult] = useState(false);

    const apiClientId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    useEffect( ()=> {
        setImageOnStorage();
        },[chosenImageUrl])


    useEffect(()=>{
        if(displayFinalResult){

            const interpretationArea = document.getElementsByClassName('interpretation-area');
            interpretationArea[0].style.flexFlow = 'column';

        }
    },[displayFinalResult])

    async function setImageOnStorage () {
        await window.localStorage.setItem('chosenImage', JSON.stringify(chosenImageUrl));
        console.log(`I'm saving the image ${JSON.parse(window.localStorage.getItem('chosenImage'))}`);
    }

    function resetQuestionnaire() {
        setIsQuestionnaireToReset(true);
        setChosenImageUrl("");
    }

    function handleImageChoice(imageUrl, event) {
        event.preventDefault();
        setChosenImageUrl(imageUrl);
        setCurtainIsVisible(false);
    }


    return (
        <div className="App">
            <SearchBar choosePhoto={handleImageChoice} isCurtainVisible={curtainIsVisible}
                       changeCurtainVisibility={setCurtainIsVisible} apiClientId={apiClientId} resetQuestionnaire={resetQuestionnaire}/>
            <section className='interpretation-area'>
                {chosenImageUrl !== "" ? <img className='template-image' src={chosenImageUrl}
                                              alt='chosen image'/> : null}
                {chosenImageUrl !== ""? <IncrementalForm isQuestionnaireToReset={isQuestionnaireToReset} setFinalResult={setDisplayFinalResult}/> : <InitialExplanation/>}
            </section>
        </div>

    );
}

export default App;
