import Header from '../Header/Header';
import MyRouter from '../Router/Router';
import './App.scss';
import DataTable from '../Home/Table';
function App() {
  return (
    <div className="App">
      <Header />
      <DataTable />
      <MyRouter />
    </div>
  );
}

export default App;
