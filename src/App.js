import './App.css';
import { CountButton } from './components/CountButton';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  // https://www.youtube.com/watch?v=LoYbN6qoQHA
  return (
    <div className="App">
      <CountButton />
      <TodoWrapper />
    </div>
  );
}

export default App;
