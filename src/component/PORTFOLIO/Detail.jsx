import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHomeDetail } from '../../data/apiHome';
import Header from './Header';
import "../../assets/css/style.css"
import Footer from '../Footer';

function Detail() {
  const [detail, setDetail] = useState();
  let { id } = useParams();

  useEffect(() => {
   
    (async () => {
      try {
        const data = await getHomeDetail(id);
        setDetail(data);
      } catch (error) {
        console.error('Error fetching home detail:', error);
      }
    })();
  }, [id]);

  console.log(detail);

  return (
    <div>
      <Header name="Detail"></Header>
      {detail && (
        <div className="detail">
          <img src={detail.img} alt="" />
          <div className="content">
            <h1 style={{color:"red"}}>{detail.name}</h1>
            <p><span style={{color:"red"}}>Category: </span>{detail.category}</p>
            <p><span style={{color:"red"}}>Create At:  </span>{detail.createAt}</p>
            <p><span style={{color:"red"}}>Descriptions:  </span>{detail.descriptions}</p>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Detail;
