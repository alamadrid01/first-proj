import Homepage from './pages/homepage/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Task from './pages/task/Task';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path='/task' element = {<Task />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
