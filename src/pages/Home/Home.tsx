import {Dashboard} from '../../components/DashboardLayout/dashboard'
import './home.css'

export const Home = () => {
  return (
    <Dashboard>
      <div className="home">
        <div>
          <h1>
            Unilag Design Studio
          </h1>
          <p>
            Pioneering innovative research and education programs that actively 
            involve students in the realm of creativity and exploration.
          </p>
          <button type='button' className="btn-primary">Explore Innovative Designs</button>
        </div>
        <div></div>
      </div>
    </Dashboard>
  )
}
