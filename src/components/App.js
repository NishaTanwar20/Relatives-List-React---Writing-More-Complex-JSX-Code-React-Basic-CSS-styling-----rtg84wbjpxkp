import React, {Component, useState} from "react";
import '../styles/App.css';

const relativeList=[
    {name:'nisha',key:'relativeListItem1'},
    {name:'nidhi',key:'relativeListItem2'}
];

class App extends Component {

    render() {
       
       
        return(
            <div id="main">
               {/* Do not remove the main div */}
               
               <ol key="relativeList">
                    {relativeList.map((relative) => {
                        return (
                            <li key={relative.key}>{relative.name}</li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}


export default App;
