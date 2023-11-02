import logo from './logo.svg';
import './App.css';
import RightPane from './components/App_Components/rightPane';
import LeftPane from './components/App_Components/leftPane';

function App() {
  return (
    <div className="App">
      <LeftPane />
      <RightPane />
    </div>
  );
}

export default App;

