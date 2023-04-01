import About from './components/About';
import Button from './components/Button';
import CardProfile from './components/CardProfile';
import MyApp from './components/MyApp';
import './index.css';

function App() {
  return (<>
  <div className='flex justify-center flex-col text-center bg-teal-500 min-h-screen'>
    <MyApp/>
    <About/>
    <CardProfile/>
    <Button/>
  </div>
  </>
      
  );
}

export default App;
