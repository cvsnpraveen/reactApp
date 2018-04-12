import React, { Component } from 'react';


class SearchComponent extends Component{
     render(){
        return(
            <div className="w_50">
                <div className="leftBlock w_100 text-right">
                    <button type="button" className="btn">Search</button>
                    <button type="button" className="btn">Export To Excel</button>
                </div>
            </div>
            )
        }
    }

export default SearchComponent;