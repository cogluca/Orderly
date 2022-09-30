import {useState, useEffect} from "react";


const SearchBar = () => {

    const [search, setSearch] = useState("");
    const [searchedPhotos, setSearchedPhotos] = useState([]);

    useEffect(() => {
        //searchImgQuery(search);
    }, [search]);


    async function searchImgQuery(queryArgument) {

        const queryResult = await fetch(`https://api.unsplash.com/search/photos?query=${queryArgument}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Authorization": "Client-ID zGEkPWJMvYsSFS8nc7Eku4Zqg2jRE1J4RzmfCFOg868"
            }
        });

        const queryResultJSON = await queryResult.json();
        setSearchedPhotos(queryResultJSON);
    }


    return (
        <div className="top-nav">
            <div className="search-bar">
                <input type="text" className="search-img" placeholder="Search image" onInput={(e) => {
                    setSearch(e.target.value)
                }}/>
            </div>
            {searchedPhotos.results?.map((singlePhoto) => {
                return (<img src={`${singlePhoto.urls.small}`}/>)
            })}
        </div>

    );


}

export default SearchBar;