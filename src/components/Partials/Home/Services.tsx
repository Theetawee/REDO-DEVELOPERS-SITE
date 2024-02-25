import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WebDev from "../../../assets/web.jpg"
import Cloud from "../../../assets/cloud.jpg"
import AppDev from "../../../assets/appDev.jpg"
import { useNavigate } from "react-router-dom";






const Services = () => {
    const navigate = useNavigate();
  return (
      <Carousel infiniteLoop={true} showThumbs={false} onClickItem={() => navigate("/services")} dynamicHeight={true} autoPlay={true}  showArrows={true}>
          <div className="w-full h-full">
              <img src={WebDev} />
              <p className="legend">Legend 2</p>
          </div>

          <div>
              <img src={Cloud} />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={AppDev} />
              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
  );
}

export default Services
