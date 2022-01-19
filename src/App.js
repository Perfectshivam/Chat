import './App.css';
import Message from './components/Message';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Message/> : <SignIn />}
    </>
  );
}

export default App;