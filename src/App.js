import './App.css';
import SignIn from './components/Signin';
import TagManager from 'react-gtm-module';
 
TagManager.initialize({ gtmId: `${process.env.REACT_APP_GTM_ID}` });
function App() {
  return (
    <div className="App">
      <body>
        <SignIn></SignIn>
      </body>
    </div>
  );
}

export default App;
