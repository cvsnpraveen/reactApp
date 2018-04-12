import React, { Component } from 'react';
import FilterSubItemComponent from './FilterSubItemComponent';

class FilterItemComponent extends Component{
    render(){
        let item = this.props.item;
        const {showClose} = this.props;
        return(
            <div className="w_50 filterGrid">
                {(showClose === undefined ||showClose === true) &&
                    <div className="text-right">
                        <button className="closeBtn"></button>
                    </div>
                }
                {item.map((subItem, index)=> <FilterSubItemComponent key={index} {...subItem}/>)}
            </div>
        )}
    }
export default FilterItemComponent;