import './App.css';
import Leftbar from './Leftbar'
import Playbar from './Playbar'
import Page from './Page'
function App() {
  return (
    <div className="container">
    <Leftbar/>
    <Page/>
    <Playbar/>
    </div>
  )
}

export default App;
