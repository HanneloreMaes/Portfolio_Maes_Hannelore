import './App.css';
import Home from './components/Home';
import { useThemeDetector } from './components/DarkTheme';

function App() {

  const isDarkTheme = useThemeDetector();

  return (
    <div className={isDarkTheme ? "App": "App AppDark"}>
      <Home/>
    </div>
  );
}

export default App;
