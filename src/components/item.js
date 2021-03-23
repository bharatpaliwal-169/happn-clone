import React from 'react';

const Item = (props) => {
  return (
          <div class='col-4 mb-4 mt-2'>
            <div className="card" key={props.id} data-aos='flip-right' data-aos-duration='3000'>
              <div className='card-body'>
                <img src={props.img} alt='{item.title}' className='img-fluid card-img-top' />
                <p>Designation</p>
              </div>
            </div>
          </div>
        )
}
export default Item;