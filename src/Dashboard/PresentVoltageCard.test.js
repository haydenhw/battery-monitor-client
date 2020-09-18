import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps } from '../../tests/testUtils';
import PresentVoltageCard from './PresentVoltageCard';
import api from '../services/api';

api.getPresentVoltage = jest.fn();

const defaultProps = {};

const setup = (props = {}) => {
    api.getPresentVoltage.mockClear();
    const setupProps = { ...defaultProps, ...props };
    return mount(<PresentVoltageCard {...setupProps} />);
};

describe('PresentVoltageCard', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(
            wrapper,
            'component-present-voltage-card'
        );
        expect(component).toHaveLength(1);
    });

    test('calls getPresentVoltage', async () => {
        expect(api.getPresentVoltage).toBeCalled();
    });
});
