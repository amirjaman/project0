import React from 'react';
import { Link } from 'gatsby';
import './Tools.css'; // Assuming you have a CSS file for styling
import Navbar from '../../header-footer/Header';

const tools = [
  {
    id: 1,
    name: 'Return on Investment',
    description: 'Description for tool 1',
    link: '/tools/roi'
  },
  {
    id: 2,
    name: 'Inflation',
    description: 'Description for tool 2',
    link: '/tools/tool2'
  },
  {
    id: 3,
    name: 'Financial Ratio',
    description: 'Description for tool 2',
    link: '/tools/tool2'
  },{
    id: 4,
    name: 'Systematic Investment Plan (SIP)',
    description: 'Description for tool 2',
    link: '/tools/sip/'
  },{
    id: 5,
    name: 'Compound Anual Growth Rate ',
    description: 'Description for tool 2',
    link: '/tools/tool2'
  },{
    id: 6,
    name: 'Post Tax Return',
    description: 'Description for tool 2',
    link: '/tools/tool2'
  }
  // Add more tool objects here
];

const Tools = () => {
  return (
    <div className="tools">
        <Navbar/>
      <h1>Tools</h1>
      <div className="tools__list">
        {tools.map(tool => (
          <div key={tool.id} className="tools__item">
            <h2 className="tools__name">{tool.name}</h2>
            <p className="tools__description">{tool.description}</p>
            <Link to={tool.link} className="tools__link">Calculate Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;