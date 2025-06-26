import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const HomePage = () => {
  return (

    <><div className="body">
      <Header />
      <div className="inner-body">
        <div id="home-head">

          <h1 id="headline">Welcome to Vivekanand</h1><h1 id="headline2">collage</h1>
          <p id="journy-text">Your journey to excellence starts here.</p>
          <button id="apply-btn">Apply Now</button>
        </div>

        <div>
          <p className="home-text1"><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in
            1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>

          <p className="home-text2">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities,
            experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

        </div>

        <h1 id="choose-text">Why Choose Vivekanand College?</h1>
        <ul id="why-list">
          <li className="list">Legacy of Excellence: Decades of commitment to quality education.</li>
          <li className="list">Experienced Faculty: Learn from renowned experts and passionate educators.</li>
          <li className="list">Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
          <li className="list">Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
          <li className="list">Strong Placements: Excellent career opportunities with leading companies.</li>
        </ul>
        <h2 className="section-title">Campus Life & Facilities</h2>

        <div className="campus-gallery">
          <div
            className="campus-img1"
            style={{ backgroundImage: `url(${"C:\On_job_tranning\React_pro\vck-react-project\vck-react-app\public\vivekanand-campus.jpg"})` }}
          ></div>
          <div
            className="campus-img2"
            style={{ backgroundImage: `url(${"C:\On_job_tranning\React_pro\vck-react-project\vck-react-app\public\vivekanand-poster.jpeg"})` }}
          ></div>
        </div>


        <div className="explore-section">
          <p className="explore-text">
            Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
          </p>

          <p className="ready-text">Ready to explore our courses?</p>

          <button className="explore-button"><Link to="/course">Explore Courses</Link></button>
        </div>

      </div>

    </div>
      <Footer /></>

  );

}

export default HomePage;