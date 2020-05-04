import React, {Component} from 'react';

class DynamicSelect1 extends Component{
    // constructor(props){
    //     super(props)
    // }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue1 = event.target.value;
        this.props.onSelectChange1(selectedValue1);
    }
    render(){
        let arrayOfData1 = this.props.arrayOfData1;
        let options = arrayOfData1.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.name}
                </option>
            );
            return (
            <select name="customSearch"
             className="custom-search-select"
              onChange={this.handleChange}>
                <option>Select Option</option>
                {options}
           </select>
        )
    }
}

export default DynamicSelect1;