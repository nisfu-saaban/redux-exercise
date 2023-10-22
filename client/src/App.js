import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { LoginPage, HomePage } from './pages';
import { Navbar, MainContent } from './components';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
    </>
  );
}

export default App;
