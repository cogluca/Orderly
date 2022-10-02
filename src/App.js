import './App.css';
import {Editor} from "./components/editor";
import SearchBar from "./components/searchBar";
import {useState} from "react";

function App() {

    const [chosenImageUrl, setChosenImageUrl] = useState("");
    const [curtainIsVisible, setCurtainIsVisible] = useState(true);

    const apiClientId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    function handleImageChoice(imageUrl, event){
        event.preventDefault();
        setChosenImageUrl(imageUrl);
        setCurtainIsVisible(false);
    }

    console.log(`Chosen image is: ${chosenImageUrl}`);

    return (
        <div className="App">
            <SearchBar choosePhoto={handleImageChoice} isCurtainVisible ={curtainIsVisible} changeCurtainVisibility={setCurtainIsVisible} apiClientId={apiClientId} />
            <Editor chosenImage={chosenImageUrl}  />
            <img src={chosenImageUrl} alt='chosen image displayed in raw manner'/>
        </div>

    );
}

export default App;
