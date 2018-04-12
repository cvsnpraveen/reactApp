import React, { Component } from 'react';


class FilterComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchCriteria: [props.default]
        }
    }
    handleChange = (e)=>{
        this.setState({ searchCriteria: e.target.value });
    }
    addToSearchCriteria = ()=>{
        let {searchCriteria} = this.state;
        if(searchCriteria){
            this.props.addSearchCriteria(searchCriteria);
        }

    }
    render(){
        let {data} = this.props;
        let listItems = data.map((element, index) => { return <option value={JSON.stringify(element)} key={index}>{element[0].label}</option>});

        return(
            <div className="filterBlock">
                <div className="w_50">
                    <div className="gridBlock w_50">
                        <label htmlFor="filter">Select Filter:</label>
                        <select onChange={this.handleChange} className="form-control" id="filter">
                            {listItems}
                        </select>
                    </div>
                    <div className="gridBlock w_50">
                        <button type="button" onClick={this.addToSearchCriteria} className="btn">Add To Search Criteria</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterComponent;