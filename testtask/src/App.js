import logo from './logo.svg';
import './App.css';
import NewUser from './components/NewUser'
import UsersTable from "./components/UsersTable";

function App() {

  return (
      <div className="App d-flex justify-content-center flex-column align-items-center">
        <NewUser></NewUser>
          <UsersTable></UsersTable>
      </div>
  );
}

export default App;
