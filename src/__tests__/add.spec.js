import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/dist/types/setup";
import '@testing-library/jest-dom';

import Add from "../Add";

describe("Todo List", () => {

    test("storing input value", async () => {
        render(<Add />)

        await userEvent.type(screen.getByTestId('todo-input'), 'second todo item') 
        
        expect(screen.getByDisplayValue(/second todo item/)).toBeInTheDocument()
    })

})