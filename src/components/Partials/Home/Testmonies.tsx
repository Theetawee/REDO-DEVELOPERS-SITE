import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Card from './Card';
import Customer1 from "../../../assets/cloud.jpg";
import Customer2 from "../../../assets/cust.jpg";


export default function Testmonies() {
  return (<div>
      <MDBCarousel  touch={true}  interval={5000}>
          <MDBCarouselItem itemId={1}>
              <Card
                  image={Customer1}
                  stars={2}
                  description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                  name='Vannessa'
                  title='CEO'
              />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
              <Card
                  image={Customer2}
                  stars={4}
                  name='Jane de Cruz'
                  title="Chairman"

                  description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
              />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
              <Card
                  image={Customer1}
                  stars={5}
                  name="James"
                  title='CFO'
                  description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
              />
          </MDBCarouselItem>
      </MDBCarousel></div>
  );
}
