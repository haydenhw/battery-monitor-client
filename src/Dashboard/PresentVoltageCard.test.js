import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PresentVoltageCard from "./PresentVoltageCard";
import api from "../services/api";

describe('PresentVoltageCard', () => {
  test('calls api', () => {
    render(<PresentVoltageCard/>)
    api.getPresentVoltage = jest.fn()
    expect(api.getPresentVoltage).toBeCalled()
  })
});
