import Body from './Components/Body';
import firebase from './utills/firebase';
import { getAuth} from "firebase/auth"; 
function App() {
   const auth = getAuth();
  return (
    <div>
      <Body/>
    </div>
  );
};

export default App;
