import React from 'react';

function Filter(props) {
    return (
        <div className='filter'>
        <div className='filter-result'>{props.count} </div>
        <div className="filter-category">
          Category{" "}
          <select
            value={props.category}
            onChange={
              props.filterProducts
            }
          >
            <option value=""></option>
            <option value="Hilo">Hilo</option>
            <option value="Ecolana">Ecolana</option>
            <option value="Lana">Lana</option>
            <option value="Totora">Totora</option>
            <option value="Yute">Yute</option>
            
          </select>
        </div>
        
        </div>
    )
}

export default Filter;