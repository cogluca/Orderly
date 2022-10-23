//maybe my components are too tightly coupled to allow unit testing, might need to refactor ...
//how the fuck should I decouple state


// Arrange Act Assert

import React from "react";
import {getByLabelText, render, screen, cleanup, fireEvent, waitFor} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'



beforeEach(()=>{
    localStorage.clear();
})

// in your test:


// in your test:
/**
 * @jest-environment jsdom
 */


test(
    "Testing initial form rendering", async () => {

        const IncrementalForm = ((await import('../incrementalForm')).default);
        const {getByTestId} = render(<IncrementalForm setFinalResult={false}
                                                                      isQuestionnaireToReset={false}/>);

        expect(screen.getByTestId('span')).toHaveTextContent('What does this picture remind you off ?');
    }
)

test(
    "Testing proceeding to next question", async () => {

        const IncrementalForm = ((await import('../incrementalForm')).default);
        const {getByTestId} = render(<IncrementalForm setFinalResult={false}
                                                      isQuestionnaireToReset={false}/>);

        const nextButton = screen.getByTestId("next-button");

        fireEvent.click(nextButton);

        const currentQuestion = screen.getByTestId('span');

        expect(currentQuestion).toHaveTextContent('You chose it not by randonmness but unconscious intent, what is it saying to you ?');

    }
)


test("Test existance of \"previous button\"", async () =>{

    const IncrementalForm = ((await import('../incrementalForm')).default);
    const {container, rerender}=render(<IncrementalForm setFinalResult={false}
                                                        isQuestionnaireToReset={false}/>);

    const nextButton = screen.getByTestId("next-button");
    fireEvent.click(nextButton);

    expect(await screen.findByTestId("previous-button")).toBeVisible();



})





test(
    "Testing proceeding to previous question", async () => {

        const IncrementalForm = ((await import('../incrementalForm')).default);
        const {container, rerender}=render(<IncrementalForm setFinalResult={false}
                                                      isQuestionnaireToReset={false}/>);

        const nextButton = screen.getByTestId("next-button");

        // eslint-disable-next-line testing-library/no-wait-for-side-effects
        fireEvent.click(nextButton);


        const previousButton = await screen.findByTestId("previous-button");

        // eslint-disable-next-line testing-library/no-wait-for-side-effects
        fireEvent.click(previousButton);

        //is it not rendering the button ?
        //or is it not triggering the question update after the "previous press" ?


        const currentQuestion = await screen.findByTestId('span');



        expect(currentQuestion).toHaveTextContent('What does this picture remind you off ?');

    }
)


test("Testing questionnaire finishline", async ()=>{


    const IncrementalForm = ((await import('../incrementalForm')).default);
    const {container, rerender}=render(<IncrementalForm setFinalResult={false}
                                                        isQuestionnaireToReset={false}/>);
    const nextButton = screen.getByTestId("next-button");


    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);


    const finishlineButton = await screen.findByTestId("finishline-button");


    expect(finishlineButton).toHaveTextContent("Check answers");

})









it('Testing rendered component against snapshot', async () => {

    const IncrementalForm = ((await import('../incrementalForm')).default);
    const tree = renderer.create(<IncrementalForm setFinalResult={false}
                                                  isQuestionnaireToReset={false}/>).toJSON();

    expect(tree).toMatchSnapshot();
})




