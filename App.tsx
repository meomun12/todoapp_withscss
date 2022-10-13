import './App.css';
import TodoApp from './components/TodoApp';
import "./styling/main.scss";

function App() {
  return (
    <div className="App">
      <div className="todo-wrapper">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
