import logo from './logo.svg';
import './App.css';
import AllPlayers from './features/players/AllPlayers';
import SelectedPlayers from './features/players/SelectedPlayers';

function App() {
  return (
    <div className='d-flex flex-wrap p-3 m-2 border border-5 border-success '>
      <div className='w-50 p-3 border border-5 border-success rounded'>
        <h1 className='grad text-center'>All Players</h1>
        <AllPlayers></AllPlayers>
      </div>
      <div className='w-50 p-3 border border-5 border-success rounded'>
      <h1 className='grad text-center'>Slected Players</h1>
        <SelectedPlayers></SelectedPlayers>
      </div>
    </div>
  );
}

export default App;