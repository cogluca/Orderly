//maybe my components are too tightly coupled to allow unit testing, might need to refactor ...
//how the fuck should I decouple state


// Arrange Act Assert

import React from "react";
import {getByLabelText, render} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'


// in your test:


// in your test:
/**
 * @jest-environment jsdom
 */

test(
    "should create a basic form", async () => {

        //do I have to mount the component ?

        //functional components do not have a definite this
        //NO ! I want to access a rendered display

        //This wouldn't be unit testing ? I would be playing with the dom

        //almost all of my functions are tied to dom manipulation, should I stub dom objects ?

        //what do I want to test ?

        /*REASONING
        When it comes to unit tests, units are components, we try to test their behavior according to rules specific to the view logic
        We shallow render through the IDE Engine an instantiated component without having it be attached to a full dom and then we interact with what that component possesses

         */

        /*
        Notes: probably these components are patched up garbage with no clear definition
         */


        //why the fuck do these methods
        //is there ab astraction above this ?

        //I sir, do not know shit of what I'm doing and I'm facing retarded issues, this is why you learn the basics first

        //Why am I destructuring ? Nah probably a react retrieval style

        //Why am I making a shallow copy if I need access to the dom root ?

        const IncrementalForm = ((await import('../components/incrementalForm/incrementalForm')).default);
        const {getByTestId} = render(<IncrementalForm setFinalResult={false}
                                                                      isQuestionnaireToReset={false}/>);
        //isn't this a fucking shallow copy ???????????
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('span')).toHaveTextContent('What does this picture remind you off ?');

    }
)

