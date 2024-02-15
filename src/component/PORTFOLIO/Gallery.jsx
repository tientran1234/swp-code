import React, { useState, useEffect } from 'react';
import { getHome } from '../../data/apiHome';
import { Link } from 'react-router-dom'

function Gallery() {
  const [home, setHome] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getHome().then((data) => setHome(data));
  }, []);

  const uniqueCategories = Array.from(new Set(home.map((data) => data.category)));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredHome = selectedCategory
    ? home.filter((data) => data.category === selectedCategory)
    : home;

  return (
    <div>
      <section className="wthree-row w3-gallery py-5">
        <div className="container py-xl-5 py-lg-3">
          <div className="text-center mb-lg-5 mb-4">
            <h3 className="tittle mb-2">Portfolio</h3>
            <p>See Our Portfolio</p>
          </div>
          <ul className="portfolio-categ filter mb-5 pb-4 text-center border-bottom">
            {uniqueCategories.map((category, index) => (
              <li
                key={index}
                className={category === selectedCategory ? "port-filter active" : "port-filter"}
                onClick={() => handleCategoryClick(category)}
              >
                <p>{category}</p>
              </li>
            ))}
            <li className="port-filter all" onClick={() => handleCategoryClick(null)}>
              <p href="#">All</p >
            </li>
          </ul>
          <ul className="portfolio-area clearfix">
            {filteredHome.map((data) => (
              <li
                key={data.id}
                className={`portfolio-item2`}
                data-id={`id-${data.id}`}
                data-type={`cat-item-${data.category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="image-block">
                  <Link className="image-zoom" style={{ height: "100px" }}  to={`detail/${data.id}`}>
                    
                    <img src={data.img} style={{ width: "100%", height: "250px" }} className="img-fluid w3layouts agileits" alt="Traventure" />
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
