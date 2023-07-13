import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Card from "./Card";






it("should render Card component", ()=>{

    render(<Card/>)
  });
  
  it("matches snapshot of Card component", () =>{
  
    const {asFragment}= render(<Card/>);
    expect(asFragment).toMatchSnapshot();
    
  });
  