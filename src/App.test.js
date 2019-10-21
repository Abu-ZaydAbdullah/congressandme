import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { Home } from './Home'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const wrapper = shallow(<Home />)

describe('Home Component', () => {
  it('renders h3', () => {
    expect(wrapper.find('h3').text()).toEqual('What is Congress and Me?')
  })
  it('renders h5', () => {
    expect(wrapper.find('h5').text()).toEqual('The six of us believe that a well-informed populace is crucial to a functioning democracy. We wanted a way for people to easily see what issues their representatives are and aren’t talking about in their tweets and on the Congress floor, and we wanted to highlight which issues are being discussed and which ones require attention on a nation-wide scale. To that end, we’ve built Congress and Me.')
  })
})


