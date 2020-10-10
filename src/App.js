import React, { Component } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
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
      ]
    }

  }

  sortAscendingName = () => {
    const sortName = this.state.people.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    console.log('Sort By Name Clicked');
    console.log(sortName);
    this.setState({
      people: sortName
    })

    console.log('######');
    console.log(this.state.people);
    console.log('######');
    /*this.setState({
      people: this.people.sort((a, b) => {
        return b.name - a.name
      })
    })*/

  }

  sortDescendingAge = () => {
    console.log('Sorting Date');
    const sortedAge = this.state.people.sort((a, b) => a.date - b.date);

    console.log('Before sorted');
    console.log(sortedAge);
    console.log('after sorted');

    this.setState({
      people: sortedAge.reverse()
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter sortAscendingName={this.sortAscendingName} sortDescendingAge={this.sortDescendingAge} ></Filter>
        <RecordTable sortedItems={this.state.people}></RecordTable>
      </div>
    );
  }
}

export default App;
