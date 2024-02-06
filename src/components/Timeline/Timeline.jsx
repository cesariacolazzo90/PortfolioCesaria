import './Timeline.css'

const Timeline = () => {
  return (
    <section className='design-section'>
      <div className='timeline'>
        <div className='timeline-empty'></div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-component timeline-content'>
          <h3>Ironhack (2023)</h3>
          <p>
            Full Stack Developer (HTML, CSS, JavaScript, MongoDB, Express.js, React.js,
            Node.js)
          </p>
        </div>

        <div className='timeline-component timeline-content'>
          <h3>SFMC Email Marketing Specialist(2023)</h3>
          <p>Max Mara Fashion Group </p>
        </div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-empty'></div>
        <div className='timeline-empty'></div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-component timeline-content'>
          <h3>The British Standards Institution</h3>
          <p>Marketing Assistant</p>
        </div>
        <div className='timeline-component timeline-content'>
          <h3>University of Modena and Reggio Emilia </h3>
          <p>M.A. Economics</p>
        </div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-empty'></div>
        <div className='timeline-empty'></div>
        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>
        <div className='timeline-component timeline-content'>
          <h3>Ca'Foscari University of Venice(2009 - 2016)</h3>
          <p>M.A. Chinese Language</p>
        </div>
      </div>
      <div className='timeline-middle'>
        <div className='timeline-circle'></div>
      </div>
    </section>
  )
}

export default Timeline
