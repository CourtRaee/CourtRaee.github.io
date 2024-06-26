import "../testimonial/testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial">
      <h1 className="testimonial-header">testimonial.</h1>

      <div className="testimonial-container">
        <div className="left-container">
          <div className="left-top">
            <img src="/assets/left-quotes.png"></img>
          </div>
          <div className="left-bottom">
            <br></br>
          </div>
        </div>

        <div className="quote">
          <p className="quote-copy">
            I've just had the final meeting with my cohort and I wanted to say
            how pleased I was with the final result. Actually, I was blown away.
            The team really listened to what I needed, incorporated everything I
            wanted into the tool and even achieved some stretched goals we had
            set. They worked quickly and created a workable and visually
            appealing product. Can’t believe how well they worked – what a
            credit to the school.
          </p>
        </div>

        <div className="right-container">
          <div className="right-top">
            <img src="/assets/right-quotes.png"></img>
          </div>
          <div className="right-bottom">
            <br></br>
          </div>
        </div>
      </div>

      <div className="quote-name">
        <p className="name">
          Siobhan Bassford - Director of Communications @ West Midlands Combined
          Authority
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
