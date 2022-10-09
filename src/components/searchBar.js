import {useEffect, useState} from "react";

const styleNav = {
    display: 'flex',
    flexFlow: 'column wrap',
}

const styleSearch = {
    display: 'row wrap',
    alignContent: 'center',
    flexGrow: '1'
}

const styleSearchBox = {
    padding: '1.0em 1em',
    fontSize: '1.0em',
    margin: '0.5em',
    width: '90%'
}

const styleLogo = {
    width: '12em',
    height: 'auto',
    justifySelf: 'left',
    cursor: 'pointer'
}

const styleLogoWrap = {
    justifyContent: 'start',
    alignContent: 'center',
    alignItems: 'center'
}

const stylePhotoCurtain = {
    display: 'inlineGrid',
    columnCount: 3,
    justifyContent: 'center',
}

const styleNavbar = {
    display: 'flex',
    flexFlow: 'row'
}

const styleImage = {
    cursor: 'pointer',
}


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
        <header className="top-nav" style={styleNav}>
            <div className='navbar' style={styleNavbar}>
                <div className='logo-wrap' style={styleLogoWrap}>
                    <a onClick={resetQuestionnaire}><img className='logo' src={require('../static_files/orderlylogo.png')}
                            style={styleLogo} alt='Webapp logo, simple square stating Orderly'></img></a>
                </div>
                <div className="search-bar" style={styleSearch}>

                    <input type="text" style={styleSearchBox} className="search-img" placeholder="Search image"
                           onInput={(e) => {
                               setSearch(e.target.value)
                           }}/>
                </div>
            </div>
            <div className='photo-curtain' style={stylePhotoCurtain}>
                {isCurtainVisible ?
                    searchedPhotos.results?.map((singlePhoto) => {
                    return (<figure key={singlePhoto.id} style={styleImage}><a
                        onClick={e => choosePhoto(singlePhoto.urls.small, e)}><img src={`${singlePhoto.urls.small}`} key={singlePhoto.id}
                                                                                   alt={singlePhoto.alt}/></a></figure>)
                }) : null}
            </div>
        </header>

    );
    
}

export default SearchBar;