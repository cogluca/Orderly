import './App.css';
import {Editor} from "./components/editor";
import SearchBar from "./components/searchBar";
import {useState} from "react";

function App() {

    const [chosenImageUrl, setChosenImageUrl] = useState("");



    function handleImageChoice(imageUrl, event){
        event.preventDefault();
        setChosenImageUrl(imageUrl);
    }

    console.log(`Chosen image is: ${chosenImageUrl}`);

    return (
        <div className="App">
            <SearchBar choosePhoto={handleImageChoice} />
            <Editor chosenImage={chosenImageUrl} />
        </div>

    );
}

export default App;
