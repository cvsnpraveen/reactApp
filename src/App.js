import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FilterComponent from "./FilterComponent";
import FilterItemComponent from "./FilterItemComponent";
import SearchComponent from "./SearchComponent";
import { connect } from 'react-redux';
import { setDefaultFilter } from "./actions/simpleAction";


export class App extends Component {
    
    setDefaultFilter = ()=>{
        console.log("Step2");
        
        let data = {
            defaultFilter : [
                [
                    {
                    label: "Start Date",
                    fldType: "input",
                    inputType: "date",
                    fldId: "startDate",
                    className:"",
                    data: ""
                },
                {
                    label: "End Date",
                    fldType: "input",
                    inputType: "date",
                    fldId: "endDate",
                    className: "",
                    data: ""
                },
                {
                    label: "Status",
                    fldType: "select",
                    inputType: "select",
                    fldId: "Status",
                    className:"",
                    data: ["", "All", "Draft", "PendingApproval", "Expired", "Rejected", "Active", "PendingCancellation"]
                }
            ]],
            filterData : [
                [
                    {
                        label: "Pricing Rule ID",
                        fldType: "label",
                        inputType: "",
                        fldId: "pricingRuleId",
                        className:"",
                        data:""
                    },
                    {
                        label: "",
                        fldType: "input",
                        inputType: "text",
                        fldId: "pricingRuleId",
                        className: "",
                        data:""
                    }
                ],
                [
                    {
                        label: "Pricing Rule Name",
                        fldType: "label",
                        inputType: "text",
                        fldId: "pricingRuleName",
                        className:"",
                        data:""
                    },
                    {
                        label: "",
                        fldType: "input",
                        inputType: "text",
                        fldId: "pricingRuleName",
                        className: "",
                        data:""
                    }
                ],
                [
                    {
                        label: "Pricing Category",
                        fldType: "select",
                        inputType: "select",
                        fldId: "pricingCategory",
                        className:"",
                        data: ["", "DSB Standard Adjustment", "Product Exclusion", "QA"]
                    },
                    {
                        label: "Pricing Sub Category",
                        fldType: "select",
                        inputType: "select",
                        fldId: "PricingSubCategory",
                        className: "",
                        data: ["", "Config Discount", "Office Discount", "Discount JS 1 Rebate", "Discount JS 2 Rebate", "Discount JS 3 Rebate", "EM Discount", "Discount SEAP", "Vol Disc Win Pro", "Vol Disc Win", "MDA Discount"]
                    }
                ],
                [
                    {
                        label: "Customer",
                        fldType: "select",
                        inputType: "select",
                        fldId: "customer",
                        className:"",
                        data: ["", "Partner type", "CUSTOM OEM GROUP", "Sold-To Organization"]
                    },
                    {
                        label: "Search for:",
                        fldType: "input",
                        inputType: "text",
                        fldId: "searchFor",
                        className: "",
                        data: ""
                    }
                ],
                [
                    {
                        label: "Material",
                        fldType: "",
                        inputType: "",
                        fldId: "material",
                        className:"",
                        data: ""
                    },
                    {
                        label: "",
                        fldType: "input",
                        inputType: "text",
                        fldId: "material",
                        className: "",
                        data: ""
                    }
                ]          
            ]
        }
        this.props.setDefaultFilter(data);
    }

    componentDidMount() {
        console.log("Step1");
        this.setDefaultFilter();
      }
    
  render() {
      let {filters} = this.props.data,
          {defaultFilter} = this.props.data,
          {searchCriteria} = this.props.data;

           console.log("this.props", this.props);
    return (
      <div className="container App search">
        <h2>Search Pricing Rule</h2>
        <FilterComponent addSearchCriteria = {this.addSearchCriteria} data = {filters} default = {filters[0]}/>
        {searchCriteria.map((item, index)=> <FilterItemComponent key= {index} item = {item}/>)}

        {/*Default Filter*/}
        {defaultFilter.map((item, index)=> <FilterItemComponent key= {index} showClose="false" item = {item}/>)}

        {/*Search Buttons Block*/}
        <SearchComponent/>
      </div> 
      );
    } 
  }

const mapStateToProps = state=>({
  ...state
})

const mapDispatchToProps = (dispatch)=>({
    setDefaultFilter(data){
        console.log("Step3", data);        
        dispatch(setDefaultFilter(data))
    }
}) 

  
export default connect(mapStateToProps,mapDispatchToProps)(App);