import {useEffect, useState} from "react";
import './searchBar.css';



const SearchBar = ({choosePhoto, isCurtainVisible, changeCurtainVisibility, apiClientId, resetQuestionnaire}) => {

    const [search, setSearch] = useState("");
    const [searchedPhotos, setSearchedPhotos] = useState([]);

    const debouncedSearchTerm = useDebounce(search,300);

    useEffect(() => {
        changeCurtainVisibility(true);
        if(debouncedSearchTerm){
            searchImgQuery(debouncedSearchTerm).then((results)=>{
                setSearchedPhotos(results);
            })
        }
        else{
            setSearchedPhotos([]);
        }
    }, [debouncedSearchTerm]);



     async function searchImgQuery(queryArgument) {

        const queryResult = await fetch(`https://api.unsplash.com/search/photos?query=${queryArgument}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Authorization": `Client-ID ${apiClientId}`
            }
        });

        return await queryResult.json();

    }

    function useDebounce(value, delay) {
        // State and setters for debounced value
        const [debouncedValue, setDebouncedValue] = useState(value);
        useEffect(
            () => {
                // Update debounced value after delay
                const handler = setTimeout(() => {
                    setDebouncedValue(value);
                }, delay);

                return () => {
                    clearTimeout(handler);
                };
            },
            [value, delay]
        );
        return debouncedValue;
    }


    return (
        <header className="top-nav">
            <div className='navbar'>
                <div className='logo-wrap'>
                    <a onClick={resetQuestionnaire}><img className='logo' src={require('../../static_files/orderlylogo.png')}
                             alt='Webapp logo, simple square stating Orderly'></img></a>
                </div>
                <div className="search-bar">

                    <input type="text"  className="search-img" placeholder="Search image"
                           onInput={(e) => {
                               setSearch(e.target.value)
                           }}/>
                </div>
            </div>
            <div className='photo-curtain'>
                {isCurtainVisible ?
                    searchedPhotos.results?.map((singlePhoto) => {
                    return (<figure key={singlePhoto.id}><a
                        onClick={e => choosePhoto(singlePhoto.urls.small, e)}><img src={`${singlePhoto.urls.small}`} key={singlePhoto.id}
                                                                                   alt={singlePhoto.alt}/></a></figure>)
                }) : null}
            </div>
        </header>

    );
    
}

export default SearchBar;
