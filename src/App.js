import logo from './logo.svg';
import './App.css';
import MyGrid from './Layout';
import YouTube from './Mockup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ejercicio básico Layouts
        </p>

        <MyGrid/>
        <br/>
        <YouTube/>
      </header>
    </div>
  );
}

export default App;
