import {Dashboard} from '../../components/DashboardLayout/dashboard'
// import Back from '../../assets/bg.jpg'
import './home.css'

export const Home = () => {
  return (
    <Dashboard>
      <div className="home">
        <div className="hero-section">
          <h1 className="main-title">
            Unilag Design Studio
          </h1>
          <p className="hero-description">
            Pioneering innovative research and education programs that actively 
            involve students in the realm of creativity and exploration.
          </p>
          <button type='button' className="btn-primary">Explore Innovative Designs</button>
        </div>
        {/* <div className="hero-image">
          <img src={Back} alt="" />
        </div> */}
      </div>
    </Dashboard>
  )
}
