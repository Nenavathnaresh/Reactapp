import logo from './logo.svg';
import './App.css';
import Counter from './features/counter1/Counter';
import Counter2 from './features/counter2/Counter2';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
    <div className="border border-5 m-2 p-2 border-primary">
      <h1>Well come to App</h1>
      <Counter></Counter>
      <Counter2></Counter2>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
