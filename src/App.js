import './App.css';
import {Editor} from "./components/editor";
import SearchBar from "./components/searchBar";
import {useState} from "react";
import IncrementalForm from "./components/incrementalForm";

function App() {

    const [chosenImageUrl, setChosenImageUrl] = useState("");
    const [curtainIsVisible, setCurtainIsVisible] = useState(true);

    const apiClientId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    function handleImageChoice(imageUrl, event) {
        event.preventDefault();
        setChosenImageUrl(imageUrl);
        setCurtainIsVisible(false);
    }

    console.log(`Chosen image is: ${chosenImageUrl}`);

    return (
        <div className="App">
            <SearchBar choosePhoto={handleImageChoice} isCurtainVisible={curtainIsVisible}
                       changeCurtainVisibility={setCurtainIsVisible} apiClientId={apiClientId}/>
            <section className='interpretation-area'>
                {chosenImageUrl !== "" ? <img className='template-image' src={chosenImageUrl}
                                              alt='chosen image displayed in raw manner'/> : null}
                {chosenImageUrl !== ""? <IncrementalForm/> : <p>Choose an image first 😁</p>}
            </section>
        </div>

    );
}

export default App;
