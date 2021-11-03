import './component/Profile/styles.css';
import ProfilePhoto from "./component/Profile/ProfilePhoto"
import FullName from "./component/Profile/FullName"
import Adress from "./component/Profile/Address"

function App() {
  return (
    <div className="app">
            <FullName/>
            <ProfilePhoto/>
            <Adress/>
    </div>
    
  );
}

export default App;
