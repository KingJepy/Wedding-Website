
import "./Carousel.css";
import graduationpic from '../assets/graduationpic.jpg';
import oldpic from '../assets/oldpic.jpg';
import proposal from '../assets/proposal.jpg';
import prompic from '../assets/prompic.jpg';
import homePageImage from '../assets/homePageImage.jpg';


function Carousel() {
  const images = [
    graduationpic,
    oldpic,
    proposal,
    prompic,
    homePageImage
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-track">
        {[...images, ...images].map((image, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={image}
              alt={`Design ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;