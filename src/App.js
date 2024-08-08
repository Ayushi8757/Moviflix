import Body from './Components/Body';
import appStore from './utills/appStore';
import firebase from './utills/firebase';
import { getAuth, ProviderId} from "firebase/auth";
import {Provider} from "react-redux"
function App() {
   const auth = getAuth();
  return (
    <div>
      <Provider store={appStore}>
      <Body/>
      </Provider>
    
    </div>
  );
};

export default App;
