import React from 'react';
import { shallow } from 'enzyme';
import PresentVoltageCard from './PresentVoltageCard';
import api from '../services/api';

describe('PresentVoltageCard', () => {
    test('calls api', () => {
        render(<PresentVoltageCard />);
        api.getPresentVoltage = jest.fn();
        expect(api.getPresentVoltage).toBeCalled();
    });
});
