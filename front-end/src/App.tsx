import './App.css';
import { Header } from './components/header';
import { TodoList } from './components/todo-list';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todos={
        [
          { title: "Do Dishes", isCompleted: true, description: 'test' },
          { title: "Car Wash", isCompleted: false, description: 'take car to the car wash' },
          { title: "Matt Day Care", isCompleted: false, description: 'take Matthew to day care' }
        ]

      } />
    </div>
  );
}

export default App;
