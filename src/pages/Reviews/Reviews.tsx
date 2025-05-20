import { useState, useEffect } from "react";
import { Dashboard } from "../../components/DashboardLayout/dashboard";
import "./reviews.css";

type TestimonialProps = {
  message: string;
  internName: string;
  internImage?: string;
};

export const Reviews = ({
  testimonials,
}: {
  testimonials: TestimonialProps[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Dashboard>
      <div className="reviews">
        <div className="testimonial__intro">
          <h2 className="testimonial__header">What Our Interns Say</h2>
          <p className="testimonial__paragraph">
            Hear from some of the incredible talents we've worked with.
          </p>
        </div>

        <div className="testimonial__main">
          <div className={`testimonial-card ${isVisible ? "visible" : "hidden"}`}>
            <div className="testimonial__text">
              <span className="quote-icon">“</span>
              <p className="testimonial__message">{currentTestimonial.message}</p>
              <span className="quote-icon quote-end">”</span>
              <p className="testimonial__name">— {currentTestimonial.internName}</p>
            </div>
            {currentTestimonial.internImage && (
              <div className="testimonial__image-container">
                <img src={currentTestimonial.internImage} alt={currentTestimonial.internName} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Dashboard>
  );
};
