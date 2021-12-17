import React from 'react'
import { shallow } from 'enzyme'
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  })

  test('render input with 32 events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toEqual(32)
  })
  test("render text input", () => {
   expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
 });
  test("render text input correctly", () => {
    const eventToShow = NumberOfEventsWrapper.state
  })
  test('renders text input correctly', () => {
   const showEvent = NumberOfEventsWrapper.state('showEvent');
   expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(showEvent);
 });
})
