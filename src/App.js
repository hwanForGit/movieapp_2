import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    // Router 밖에서 <Link> 사용 불가
    // BrowserRouter ==> /#/이 붙지 않음
    <BrowserRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
    </BrowserRouter>
  );
}

export default App;
