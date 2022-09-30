import './App.css';
import {Editor} from "./components/editor";
import SearchBar from "./components/searchBar";

function App() {
    return (
        <div className="App">
            <SearchBar/>
            <Editor/>
        </div>

    );
}

export default App;
