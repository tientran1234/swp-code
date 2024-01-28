import React, { useState } from 'react';

function Team() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageInfo) => {
    setSelectedImage(imageInfo);
  };

  return (
    <div>
      <div className="team py-5" id="agents">
        <div className="container py-xl-5 py-lg-3">
          <div className="text-center mb-lg-5 mb-4">
            <h3 className="tittle mb-2">Our Agents</h3>
            <p>Some words about our Agents</p>
          </div>
          <div className="row new-agileinfo">
            <div className="col-lg-4 team-left">
              <ul id="demo1_thumbs" className="list-inline">
                <li onClick={() => handleImageClick({ name: 'Carolyn Kylie', img: "../../../src/assets/images/t1.jpg", role: " Eligendi optio nam libero tempore cum soluta nobis est cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis optio cumque nihil impedit quo minus id quod maxime placeat facere possimus" })}>
                  <div>
                    <a>
                    <img src="../../../src/assets/images/t1.jpg" alt="" />
                    <div className="team-w3text mt-3">
                      <h4 className="mb-2">Carolyn Kylie</h4>
                      <p>Fugiat nulltur</p>
                    </div>
                    </a>
                  </div>
                </li>
                <li onClick={() => handleImageClick({ name: 'Brian Una', img: "../../../src/assets/images/t2.jpg", role: " Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis optio cumque nihil impedit quo minus id quod maxime placeat facere possimus" })}>
                  <div>
                    <a>
                    <img src="../../../src/assets/images/t2.jpg" alt="" />
                    <div className="team-w3text mt-3">
                      <h4 className="mb-2">Brian Una</h4>
                      <p>Omnis voluptnda</p>
                    </div>
                    </a>
                  </div>
                </li>
                <li onClick={() => handleImageClick({ name: 'David Joe', img: "../../../src/assets/images/t3.jpg", role: " Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis optio cumque nihil impedit quo minus id quod maxime placeat facere possimus" })}>
                  <div>
                    <a>
                    <img src="../../../src/assets/images/t3.jpg" alt="" />
                    <div className="team-w3text mt-3">
                      <h4 className="mb-2">David Joe</h4>
                      <p>Iste natus error</p>
                    </div>
                    </a>
                  </div>
                </li>
                <li onClick={() => handleImageClick({ name: 'Piers Sam', img: "../../../src/assets/images/t4.jpg", role: " Eligendi optio nam libero tempore cum soluta nobis est cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis optio cumque nihil impedit quo minus id quod maxime placeat facere possimus" })}>
                  <div>
                    <a>
                    <img src="../../../src/assets/images/t4.jpg" alt="" />
                    <div className="team-w3text mt-3">
                      <h4 className="mb-2">Piers Sam</h4>
                      <p>Excepteur singt</p>
                    </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div id="demo1_main_image" className="col-lg-8 team-right" style={{ backgroundImage: `url(${selectedImage ? selectedImage.img : ''})`, padding:0, transition: 'background-image 0.5s ease-in-out' }}>
              {selectedImage && (
                <div id="team">
                  <h3>{selectedImage.name}</h3>
                  <p>{selectedImage.role}</p>
                </div>
              )}
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
