import React from 'react';
import map from '../styles/assets/map.png';

const MapImg = () => {
  return(
    <div className="col-12 col-sm-6 offset-sm-3 text-center mt-5">
      <div className="row">
        <img src={map} className="img-fluid img-responsive"  alt='img'  />
      </div>
    </div>
  );
}

export default MapImg;