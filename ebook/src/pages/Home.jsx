import book1 from "../img/book1.jpg";
import book2 from "../img/book2.jpg";
import book3 from "../img/book3.jpeg";
import java from "../img/spi.jpg";
import c from "../img/Crow.jpg";
import download from "../img/self.jpeg";
import ml from "../img/Stephen.jpg";
import story from "../img/Wood.jpg";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer/Footer";
const Home = () => {
  return (
    <div>
      <div className="card mb-3 " style={{maxWidth:"1500px",height:"490px",backgroundColor: '#7448e3'}}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{color:"white",fontSize:"40px"}}>Welcome to MeroDiary</h5>
              <p className="card-text" style={{color:"white"}}>A Merodiary is a treasure chest for the curious mind, where each book is a key unlocking realms of knowledge and imagination</p>
              <a href="/login" className="btn btn-danger" style={{marginTop:"20px"}}>Get Started</a>
            </div>
          </div>
          <div className="col-md-4">
            <img src={download} className="img-fluid rounded-start" alt="..." style={{height:"400px",marginTop:"30px"}} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{marginRight:"60px"}}>
            <div className="card paint-card">
              <div className="card-body text-center">
                <img src={java} className="img-fluid" alt="Java" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{color:"white",fontSize:"40px"}}>Welcome to Meordiary</h5>
              <p className="card-text" style={{color:"black"}}>Welcome to our E-Book Store Merodiary, your premier destination for all things digital reading! We specialize in providing an extensive collection of e-books across various genres, catering to the diverse tastes and preferences of our readers. At our E-Book Store Merodiary, we believe in the power of literature to enlighten, entertain, and inspire. Whether you're a seasoned bookworm or just beginning your reading journey, we have something for everyone. Dive into captivating fiction, explore insightful non-fiction, expand your knowledge with educational resources, or embark on thrilling adventures with our selection of e-books.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{maxWidth:"100%"}} >
        <Footer />
      </div> */}
    </div>
  );
};

export { Home };
