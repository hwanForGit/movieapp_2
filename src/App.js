import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    // Router 밖에서 <Link> 사용 불가
    // BrowserRouter ==> /#/이 붙지 않음
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' exact={true} component={About} />
      <Route path='/movie-detail' component={Detail} />
    </HashRouter>
  );
}

export default App;
