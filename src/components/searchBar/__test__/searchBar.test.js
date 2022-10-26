import React from "react";
import {getByLabelText, render, screen, cleanup, fireEvent, waitFor} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import {act} from 'react-dom/test-utils';


beforeEach(() => {
    localStorage.clear();


})

test("Verifying component snapshot", async () => {


    const SearchBar = (await import("../searchBar")).default;
    const tree = renderer.create(<SearchBar apiClientId={""} changeCurtainVisibility={false} isCurtainVisible={false}
                                            resetQuestionnaire={false} choosePhoto={null}/>).toJSON();


    expect(tree).toMatchSnapshot();

})


test("Verifying API retrieval", async () => {

    jest.setTimeout(10000);

    //Arrange
    const SearchBar = (await import("../searchBar")).default;

    const returnedMockResponse = {
        "results": [
            {
                "id": "eOLpJytrbsQ",
                "urls": {
                    "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb"
                }
            }
        ]
    }

    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            json: () => returnedMockResponse
        }))


    const changeCurtain = jest.fn((e) => {
    });
    const choosePhoto = jest.fn(() => {
    });
    const resetQuestionnaire = jest.fn(() => {
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act

    render(<SearchBar choosePhoto={choosePhoto} apiClientId={""} changeCurtainVisibility={jest.fn()} isCurtainVisible={true} resetQuestionnaire={resetQuestionnaire}/>)


    //Act
    const searchInputField = screen.getByTestId("search-input");

    // eslint-disable-next-line testing-library/no-unnecessary-act,testing-library/no-wait-for-side-effects
    await waitFor(()=>{ fireEvent.input(searchInputField, {
        preventDefault() {
        }, "target": {"value": "search"}
    })});



    // eslint-disable-next-line testing-library/await-async-query
        await waitFor( ()=>{expect( screen.findByTestId("generated-photo")).toBeDefined()});

        cleanup();

})

test("Verifying onInput activation", async()=> {



    //ARRANGE
    const SearchBar = (await import("../searchBar")).default;

    const returnedMockResponse = {
        "results": [
            {
                "id": "eOLpJytrbsQ",
                "urls": {
                    "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb"
                }
            }
        ]
    }

    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            json: () => returnedMockResponse
        }))


    const changeCurtain = jest.fn((e) => {
    });
    const choosePhoto = jest.fn(() => {
    });
    const resetQuestionnaire = jest.fn(() => {
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
        render(<SearchBar choosePhoto={(value)=> {console.log(value)}} apiClientId={""} changeCurtainVisibility={(value)=>{console.log(value);}} isCurtainVisible={true} resetQuestionnaire={resetQuestionnaire}/>)
    });

    //ACT
    const searchInputField = screen.getByTestId("search-input");

    // eslint-disable-next-line testing-library/no-unnecessary-act,testing-library/no-wait-for-side-effects
    await waitFor(()=>{ fireEvent.input(searchInputField, {
        preventDefault() {
        }, "target": {"value": "anither"}
    })});


    expect(searchInputField).toHaveValue("anither");


})


//mock the api call with data return

//mock the reset

//how do I test a component that has its state lifted-up and comes off as coupled with the App component ? Do I mock the overarching component that includes the original component that I want mocked ?
//could mock the state and effect behavior of the father component as it mostly triggers a small change in the SearchBar component