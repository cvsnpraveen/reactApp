import React, { Component } from 'react';

class FilterComponent extends Component{
    // handleChange = (e)=>{
    //     this.setState({ searchCriteria: e.target.value });
    // }
    // addToSearchCriteria = ()=>{
    //     let {searchCriteria} = this.state;
    //     if(searchCriteria){
    //         this.props.addSearchCriteria(searchCriteria);
    //     }

    // }

    handleChange = ()=>{
        let e = document.getElementById("ddlViewBy");
        //var strUser = e.options[e.selectedIndex].value;

        console.log("this==>", this)
        console.log("strUser==>", e.value);
       // this.addSearchCriteria(this.props.current);
    }
    
    render(){
        let {filters} = this.props.data;
        // let current=this.props.current;
        console.log("this.propsssss==>", this.props)

        let listItems = filters.map((element, index) => { return <option value={JSON.stringify(element)} key={index}>{element[0].label}</option>});

        return(
            <div className="filterBlock">
                <div className="w_50">
                    <div className="gridBlock w_50">
                        <label htmlFor="filter">Select Filter:</label>
                        <select className="form-control" id="ddlViewBy">
                            {listItems}
                        </select>
                    </div>
                    <div className="gridBlock w_50">
                        <button type="button" onClick={this.handleChange()} className="btn">Add To Search Criteria</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterComponent;