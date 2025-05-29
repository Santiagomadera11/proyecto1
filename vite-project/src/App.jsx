import './App.css'
import { RoutesModule } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <RoutesModule />
    </BrowserRouter>
    </>
  )
}

export default App
