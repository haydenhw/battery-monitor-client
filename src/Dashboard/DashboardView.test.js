import React from "react";
import renderer from 'react-test-renderer';
import DashboardView from "./DashboardView";

it('renders correctly', () => {
  const tree = renderer
    .create(<DashboardView/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
