import './App.css';
import BarChart from './charts/Bar';

function App() {
  return (
    <div className="App">
      <div className="title">Profit if trade close earlier/later</div>
      <BarChart />
    </div>
  );
}

export default App;
