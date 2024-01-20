import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';


import './styles/header.scss';
import './styles/app.scss';
import './styles/home.scss';









function App() {
  return (
      <BrowserRouter>
          <Header />
              <Routes>
                <Route path={'/*'} element={<Home />}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;









