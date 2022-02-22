import React, { Component } from 'react';
import './App.css';
import { Table, TableHead, TableRow, TableCell, TableContainer,TableBody } from '@material-ui/core';
import Data from "./data.json";

class App extends Component {
  constructor()
  {
    super();
    this.state={
      list:[]
    }
  }
  
  onClick=(value)=>{
    try{
      fetch(`http://localhost:3000/movies?Name_like=${value}`,)
      .then((response)=>response.json())
      .then((data)=>{this.setState({list:data})})
    }
    catch(error)
    {
      console.log("ee",error)
    }
  
}
  render() {
    return (
      <div className='wrapper' >
        

        <p>
          <input className='search' type="text" onChange={(e)=>this.onClick(e.target.value)} placeholder='Search'></input>
        </p><br />
        <div>
          <TableContainer className="hello">
            <Table >
              <TableHead>
                <TableRow className="hel2">
                  <TableCell >Name</TableCell>
                  <TableCell >URL</TableCell>
                  <TableCell > ThumbNail</TableCell>
                  <TableCell> Series</TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {this.state.list.map((b)=>(              
                      <TableRow>
                        <TableCell>{b.Name}</TableCell>
                        <TableCell>{b.Url}</TableCell>
                        <TableCell><img src={b.Thumbnail} alt="eternals" width="200" height="200"/></TableCell>
                        <TableCell>{b.Series}</TableCell>
                        </TableRow>
                  ))}
                  </TableBody>
                  
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}
export default App;
