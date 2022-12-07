import Users from './components/users'
import './App.css';

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Mehmet",
  },
  {
    id: 3,
    name: "Ali",
  },
]

function App() {
  return (
    <div className="App">
      <Users name="lorem" surname="ipsum" age={20} isLoggedIn={true}  friends={friends} />
    </div>
  );
}

export default App;
