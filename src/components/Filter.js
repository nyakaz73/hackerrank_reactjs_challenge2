import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {


    render() {
        return (
            <div className="checkboxes">
                <Checkbox onClick={this.props.sortAscendingName} />
                <label>Name</label>
                <Checkbox onClick={this.props.sortDescendingAge} />
                <label>Age</label>
            </div>
        );
    }
}

//PropTypes
Filter.propTypes = {
    sortAscendingName: PropTypes.func.isRequired,
    sortDescendingAge: PropTypes.func.isRequired
}
export default Filter;