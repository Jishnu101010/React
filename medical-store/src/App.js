import './App.css'
import Navbar from './components/Navbar'

function App(){
  return(
    <div><Navbar/>
    <div className='container'>
      <div className='row p-4 shadow rounded '>
        <div className='col-md-6'>
          <h1>Welcome to medical store!</h1>
          <p>Identify your medicine needs!</p>
        </div>
        
      </div>
      <div className='row'>
        <div className='col p-4 shadow rounded '>
          <h2>About our medical store</h2>
          <p>Keep track of your medicine</p>
          <p>Easily log your medicine consumption, view your progress, and achieve your health goals!</p>
          </div>
      </div>
      <div className='row p-4 shadow rounded'>
        <div className='col-md-4 p-4  '>
          
          <h3>Log your intake</h3>
          <p>Record your medicine intake Daily</p>
        </div>
        </div>
        <div className='col-md-4 p-4'>
          
          <h3 style={{marginLeft:'27px'}}>Reach Goals</h3>
          <p>Stay on top of your medicine goals</p>
        </div>
      </div>
    </div>
  )
}
export default App

