import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './App.css';
import Addtask from './components/Addtask';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import { persistor, store } from './reducer/store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Addtask />
          <Todolist />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
