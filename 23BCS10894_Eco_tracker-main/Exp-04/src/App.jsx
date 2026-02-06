import './App.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import DashboardSummary from './pages/DashboardSummary'
import DashboardAnalytics from './pages/DashboardAnalytics'
import Login from './pages/Login'
import Logs from './pages/Logs'

function App() {

  return (
    <main>
    <>
    <BrowserRouter>
    <Header  title={"EcoTrack"}/>

     <Routes>

      <Route path="/login" element={<Login/>} />

      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }>


      <Route index element={<DashboardSummary/>} />
      <Route path="summary" element={<DashboardSummary/>} />
      <Route path="analytics" element={<DashboardAnalytics/>} />
      
      </Route>
      <Route path="logs" element={<Logs/>} />


    </Routes> 
    
    </BrowserRouter>
    </>
    </main>

  )
}

export default App
