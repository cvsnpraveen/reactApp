import React from 'react';

const FilterSubItemComponent = ({ label, fldType, inputType, fldId, className, data }) => {
        return(
            <div className="gridBlock w_50">
                {(label!=="") &&
                    <label htmlFor='{fldId}'>{label}</label>        
                }
                {(fldType === "input") &&
                    <input type={inputType}  name="{fldId}" className="{className}"/>
                }
                {(fldType === "select") &&
                    <select className={className} id={fldId} name={fldId}>
                        {data.map((element, index) => { return <option key={index}>{element}</option>})}
                    </select>
                }
            </div>
            )}

export default FilterSubItemComponent;