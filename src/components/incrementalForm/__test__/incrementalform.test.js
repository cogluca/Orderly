//maybe my components are too tightly coupled to allow unit testing, might need to refactor ...
//how the fuck should I decouple state


// Arrange Act Assert

import React from "react";
import {getByLabelText, render, screen, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'



// in your test:


// in your test:
/**
 * @jest-environment jsdom
 */

afterEach(cleanup)


test(
    "Testing initial form rendering", async () => {

        const IncrementalForm = ((await import('../incrementalForm')).default);
        const {getByTestId} = render(<IncrementalForm setFinalResult={false}
                                                                      isQuestionnaireToReset={false}/>);

        expect(screen.getByTestId('span')).toHaveTextContent('What does this picture remind you off ?');
    }
)

it('Testing rendered component against snapshot', async () => {

    const IncrementalForm = ((await import('../incrementalForm')).default);
    const tree = renderer.create(<IncrementalForm setFinalResult={false}
                                                  isQuestionnaireToReset={false}/>).toJSON();

    expect(tree).toMatchSnapshot();
})




