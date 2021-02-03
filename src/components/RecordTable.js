import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const people = [
    {
        name: "Veronica Mize",
        dob: "11/29/2011"
    }, {
        name: "Cecilia Olsson",
        dob: "09/16/1992"
    }, {
        name: "Peter Parker",
        dob: "01/16/1992"
    }, {
        name: "Jimmy Shergil",
        dob: "12/12/2001"
    }, {
        name: "Alexander Alfred",
        dob: "02/09/1891"
    }, {
        name: "Janice Shroyer",
        dob: "12/01/1982"
    }, {
        name: "Ralph White",
        dob: "11/30/2011"
    }, {
        name: "Deborah T. Decker",
        dob: "10/31/1999"
    }
];
class RecordTable extends Component {

    componentDidMount() {
        this.sortAscendingName();
    }
    UNSAFE_componentWillReceiveProps({ sortedItems }) {
        if (sortedItems === "name") {
            this.sortAscendingName()
        } else if (sortedItems === "age") {
            console.log("sort by age")
            this.sortDescendingAge()
        }

    }
    sortDescendingAge = () => {
        people.sort((a, b) => {
            var dateA = new Date(a.dob), dateB = new Date(b.dob)
            return dateB - dateA
        })
        people.reverse()
    }

    compare = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }


    sortAscendingName = () => {
        people.sort(this.compare)
    }

    render() {

        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {people.map((userData, index) => (
                            <TableRow key={index}>
                                <TableCell>{userData.name}</TableCell>
                                <TableCell>{userData.dob}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

//PropTypes
// RecordTable.propTypes = {
//     sortedItems: PropTypes.array.isRequired
// }

export default RecordTable;
