import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  // pathname: "/about?~~~" 형식으로도 데이터 전송 가능
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default Navigation;
