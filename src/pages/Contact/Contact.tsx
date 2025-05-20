import {Dashboard} from '../../components/DashboardLayout/dashboard'
import './contact.css'

export const Contact = () => {
  return (
    <Dashboard>
      <div className="contact">
        <div className='contact__header'>
          <h1> Contact Us</h1>
          <p>We'd love to hear from you! Feel free to reach out to us with any questions,
             inquiries, or partnership opportunities. Our team is ready to assist you.</p>
             </div>
        <div className='contact__container'>
          <div className='contact__details'>
            <div className='contact__details__location'>
              <h1>Office Location</h1>
              <p>UNILAG Design Studio Headquarters:
                <br />3rd Floor Systems Engineering Building,
                <br />UNILAG, Lagos State, 10001,
                Nigeria.</p>
            </div>
            <div className='contact__details__location'>
          <h1 >Contact Information</h1>
          <p >
            WhatsApp: <a href="" >08137500777</a>
          </p>
          <p >
            YouTube: <a href="https://www.youtube.com/@unilagdesignstudio6689" >Unilag Design Studio</a>
          </p>
          <p >
            X: <a href="https://x.com/Unilag_Design?t=xge9u2bXo8j2iCQ5vq__DQ&s=08" >Unilag Design Studio</a>
          </p>
          <p>
            Email: <a href="">sdkcjskdcnjsk</a>
          </p>
          <p >
            Hours: Monday-Friday, 8AM-4PM
          </p>
      </div>
          </div>
          <div>
            <form className='contact__form'>
              <div>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                id="name"
                placeholder="Your Name"/>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                id="email"
                placeholder="Your Email"/>
              </div>
              
              <div>
                <label htmlFor="message">Message</label>
                <textarea 
                name="message" 
                id="message"
                placeholder='Your Message'
                ></textarea>
              </div>
              <div>
                <button className='btnprimary' type='submit'>Send Message</button>
              </div>
             </form>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}
