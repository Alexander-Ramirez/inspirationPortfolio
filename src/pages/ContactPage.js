const ContactPage = () => {
  return (
    <section className='contact' id='contact'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          Contact
        </h2>
        <div className='section-content'>
          <p>I am looking for job opportunities, and would love to connect!</p>
          <p>
            Send me an Email or connect on social media:
          </p>
          <div className='social-icons'>
            <a href='https://github.com/Alexander-Ramirez/'>
              Github
            </a>
            <a href='https://www.linkedin.com/idk'>
             Linkedin
            </a>
            <a href='aleramirez201@gmail.com'>
             Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;