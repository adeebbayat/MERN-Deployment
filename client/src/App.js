import logo from './logo.svg';
import Main from './views/Main';
import Detail from './views/Detail';
import New from './views/New';
import Update from './views/Update';
import './App.css';
import {Routes,Route,Link,Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/pets/new" element={<New/>} />
        <Route path="/pets/:id/edit" element = {<Update/>}/>
        <Route path="/pets/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
