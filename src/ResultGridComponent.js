import React, { Component } from 'react';

class SearchComponent extends Component{
     render(){
         let gridData = {
             header:[],
             content:[{}]
         }
        return(
            <div className="w_50">
                <table className="leftBlock w_100 text-right">
                    <tr>
                        <th>Data</th>

                    </tr>
                </table>
            </div>
            )
        }
    }

export default SearchComponent;