import './App.css';

import SearchBar from "./components/searchBar";
import {useEffect, useState} from "react";
import IncrementalForm from "./components/incrementalForm";

function App() {

    const loadedImageUrl = window.localStorage.getItem('chosenImage')? JSON.parse(window.localStorage.getItem('chosenImage')): "";

    const [chosenImageUrl, setChosenImageUrl] = useState(loadedImageUrl);
    const [curtainIsVisible, setCurtainIsVisible] = useState(true);

    const apiClientId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    useEffect( ()=> {
        setImageOnStorage();
        },[chosenImageUrl])

    async function setImageOnStorage () {
        await window.localStorage.setItem('chosenImage', JSON.stringify(chosenImageUrl));
        console.log(`I'm saving the image ${JSON.parse(window.localStorage.getItem('chosenImage'))}`);
    }

    function handleImageChoice(imageUrl, event) {
        event.preventDefault();
        setChosenImageUrl(imageUrl);
        setCurtainIsVisible(false);
    }

    return (
        <div className="App">
            <SearchBar choosePhoto={handleImageChoice} isCurtainVisible={curtainIsVisible}
                       changeCurtainVisibility={setCurtainIsVisible} apiClientId={apiClientId}/>
            <section className='interpretation-area'>
                {chosenImageUrl !== "" ? <img className='template-image' src={chosenImageUrl}
                                              alt='chosen image'/> : null}
                {chosenImageUrl !== ""? <IncrementalForm/> : <p>Choose an image first 😁</p>}
            </section>
        </div>

    );
}

export default App;
