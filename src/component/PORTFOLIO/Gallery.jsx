import React from 'react'

function Gallery() {
  return (
    <div><section className="wthree-row w3-gallery py-5">
    <div className="container py-xl-5 py-lg-3">
        <div className="text-center mb-lg-5 mb-4">
            <h3 className="tittle mb-2">Portfolio</h3>
            <p>See Our Portfolio</p>
        </div>
        <ul className="portfolio-categ filter mb-5 pb-4 text-center border-bottom">
            <li className="port-filter all active">
                <a href="#">All</a>
            </li>
            <li className="cat-item-1">
                <a href="#" title="Category 1">Bedroom</a>
            </li>
            <li className="cat-item-2">
                <a href="#" title="Category 2">Bathroom</a>
            </li>
            <li className="cat-item-3">
                <a href="#" title="Category 3">Kitchen</a>
            </li>
            <li className="cat-item-4">
                <a href="#" title="Category 4">Living Room</a>
            </li>
            <li className="cat-item-5">
                <a href="#" title="Category 5">Office</a>
            </li>
            <li className="cat-item-6">
                <a href="#" title="Category 6">Pool</a>
            </li>
        </ul>
        <ul className="portfolio-area clearfix">
            <li className="portfolio-item2" data-id="id-1" data-type="cat-item-1">
                <span className="image-block">
                    <a className="image-zoom" href="images/g1.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g1.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-2" data-type="cat-item-2">
                <span className="image-block">
                    <a className="image-zoom" href="images/g2.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g2.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-2" data-type="cat-item-2">
                <span className="image-block">
                    <a className="image-zoom" href="images/g3.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g3.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-4" data-type="cat-item-4">
                <span className="image-block">
                    <a className="image-zoom" href="images/g4.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g4.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-1" data-type="cat-item-1">
                <span className="image-block">
                    <a className="image-zoom" href="images/g5.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g5.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-6" data-type="cat-item-6">
                <span className="image-block">
                    <a className="image-zoom" href="images/g6.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g6.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-4" data-type="cat-item-3">
                <span className="image-block">
                    <a className="image-zoom" href="images/g7.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g7.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-4" data-type="cat-item-4">
                <span className="image-block">
                    <a className="image-zoom" href="images/g8.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g8.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
            <li className="portfolio-item2" data-id="id-5" data-type="cat-item-5">
                <span className="image-block">
                    <a className="image-zoom" href="images/g9.jpg" data-gal="prettyPhoto[gallery]">
                        <img src="../../../src/assets/images/g9.jpg" className="img-fluid w3layouts agileits" alt="Traventure"/>
                    </a>
                </span>
            </li>
        </ul>
    </div>
</section></div>
  )
}

export default Gallery