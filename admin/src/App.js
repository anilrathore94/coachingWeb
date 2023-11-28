import logo from './logo.svg';
import './App.css';
import Routes  from './Routes/Routes';
import { ProfileProvider } from './component/ui/contextProvider.js';


function App() {
  return (
    <>
    <ProfileProvider>
    <Routes/>
    </ProfileProvider>
    </>
  );
}

export default App;
