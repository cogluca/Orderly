import {useState, useEffect} from "react";

const styleNav = {

    display: 'flex',
    flexFlow: 'row wrap',

    alignContent: 'center',
    alignItems: 'center'

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
    width: '100%'


}

const styleLogo = {

    width: '12em',
    height: 'auto',
    justifySelf: 'left'


}

const styleLogoWrap = {
    justifyContent: 'start',
    alignContent: 'center',
    alignItems: 'center'
}


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
        <div className="top-nav" style={styleNav}>
            <div className='logo-wrap' style={styleLogoWrap}>
                <a href='#'><img className='logo' src={require('../static_files/orderlylogo.png')}
                                 style={styleLogo}></img></a>
            </div>
            <div className="search-bar" style={styleSearch}>

                <input type="text" style={styleSearchBox} className="search-img" placeholder="Search image"
                       onInput={(e) => {
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