import React, { Component } from 'react';
import data from './data';
import Item from './item';
class List extends Component {
  render() {
    return (
      <>
        <div className="col-12 col-sm-6 offset-sm-3 text-center mt-5">
          <div className="row">

              {data.map((item) => {
                return (
                  <Item {...item} />
                )
              })}
          </div>
        </div>
      </>
    );
  }
}

export default List;