import CardProfile from './components/CardProfile';
import MyApp from './components/MyApp';
import './index.css';

function App() {
  return (<>
  <div className='flex justify-center flex-col text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-screen '>
    <div className=''>
      <MyApp/>
      <CardProfile/>
      
    </div>
  </div>
  </>
      
  );
}

export default App;
