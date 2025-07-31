import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SubjectDetail from './pages/SubjectDetail'
import Subjects from './pages/Subjects'
import FlashCard from './pages/FlashCard'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Subjects/> }/>
      <Route path='/subject/:subjectId' element={ <SubjectDetail/> }/>
      <Route path='/quiz/:subjectId' element={ <FlashCard/> }/>
    </Routes>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
