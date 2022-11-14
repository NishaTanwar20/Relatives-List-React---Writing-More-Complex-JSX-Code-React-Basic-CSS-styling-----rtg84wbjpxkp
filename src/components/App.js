import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
     const relativeNames=[
        {name:'nisha',key:'relativeListItem1'},
        {name:'nidhi',key:'relativeListItem2'}
     ];
       
        return(
            <div id="main">
               {/* Do not remove the main div */}
               
                <ol key={relativeList}>
                    {relativeNames.map(relative => {
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
