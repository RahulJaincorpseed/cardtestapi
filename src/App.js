import logo from './logo.svg';
import './App.css';
import CardComponent from './Component/CardComponent';

function App() {
  return (
    <div className="main">
      <h1 className='main-heading'>Card Data</h1>
      <div className='card-box'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default App;
