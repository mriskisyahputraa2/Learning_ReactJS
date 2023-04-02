import About from './components/About';
import CardProfile from './components/CardProfile';
import MyApp from './components/MyApp';
import './index.css';

function App() {
  return (<>
  <div className='flex justify-center flex-col text-center bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen'>
    <MyApp/>
    <About/>
    <CardProfile/>
  </div>
  </>
      
  );
}

export default App;
