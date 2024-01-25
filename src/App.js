import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Counter from './Counter';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className='border border-2 border-danger m-2 p-2'>
        <h1>App</h1>
        <Counter></Counter>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
