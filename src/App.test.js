import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { Home } from './Home'
import Representatives from './Representatives'
import States from './States'
import Issues from './Issues'
import { About } from './About'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const HomeWrapper = shallow(<Home />)

describe('Home Component', () => {
  it('Renders Title', () => {
    expect(HomeWrapper.find('h3').text()).toEqual('What is Congress and Me?')
  })
  it('Renders Subtext', () => {
    expect(HomeWrapper.find('h5').text()).toEqual('The six of us believe that a well-informed populace is crucial to a functioning democracy. We wanted a way for people to easily see what issues their representatives are and aren’t talking about in their tweets and on the Congress floor, and we wanted to highlight which issues are being discussed and which ones require attention on a nation-wide scale. To that end, we’ve built Congress and Me.')
  })
})


const RepresentativesWrapper = shallow(<Representatives />)

describe('Representatives Component', () => {
  it('Renders Title', () => {
    expect(RepresentativesWrapper.find('h1').text()).toEqual('Representatives')
  })
})


const StatesWrapper = shallow(<States />)

describe('States Component', () => {
  it('Renders Title', () => {
    expect(StatesWrapper.find('h1').text()).toEqual('States')
  })
})

const IssuesWrapper = shallow(<Issues />)

describe('Issues Component', () => {
  it('Renders Title', () => {
    expect(IssuesWrapper.find('h1').text()).toEqual('Issues')
  })
})

const AboutWrapper = shallow(<About />)

describe('About Component', () => {
  it('Renders Title', () => {
    expect(AboutWrapper.find('h1').text()).toEqual('Meet the Team')
  })
  it('Renders Subtitle', () => {
    expect(AboutWrapper.find('p').at(0).text()).toEqual('Get to know the team responsible for creating and maintaining this site!')
  })
  it('Renders Section 1', () => {
    expect(AboutWrapper.find('h3').at(0).text()).toEqual('Our Purpose')
  })
  it('Renders Section 2', () => {
    expect(AboutWrapper.find('h3').at(1).text()).toEqual('Data Integration')
  })
  it('Renders Section 3', () => {
    expect(AboutWrapper.find('h3').at(2).text()).toEqual('Tools')
  })
  it('Renders Section 4', () => {
    expect(AboutWrapper.find('h3').at(3).text()).toEqual('Data Sources')
  })
  it('Renders Section 5', () => {
    expect(AboutWrapper.find('h3').at(4).text()).toEqual('Links')
  })
})
