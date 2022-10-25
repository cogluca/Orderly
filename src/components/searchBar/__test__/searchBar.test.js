import React from "react";
import {getByLabelText, render, screen, cleanup, fireEvent, waitFor} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'




global.fetch = jest.fn(()=> {
    Promise.resolve({
            json: ()=> {Promise.resolve({
                "results": [
                    {
                        "urls":{
                            "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb"
                        }
                    }
                ]
            })}
        }
    )
})

beforeEach(()=>{
    localStorage.clear();
    fetch.mockClear();
})

test("Verifying component snapshot", async ()=> {

    const SearchBar = (await import("../searchBar")).default;
    const tree = renderer.create(<SearchBar apiClientId={""} changeCurtainVisibility={false} isCurtainVisible={false} resetQuestionnaire={false} choosePhoto={null}/>).toJSON();


    expect(tree).toMatchSnapshot();

})

//mock the api call with data return

//mock the reset

//how do I test a component that has its state lifted-up and comes off as coupled with the App component ? Do I mock the overarching component that includes the original component that I want mocked ?
//could mock the state and effect behavior of the father component as it mostly triggers a small change in the SearchBar component