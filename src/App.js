import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
   <Provider store={store}>
     <div>
      <TodoList></TodoList>
    </div>
   </Provider>
  );
}

export default App;
