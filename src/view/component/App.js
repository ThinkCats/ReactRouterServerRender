import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                This is a react head!<br/>
                {this.props.children}
                This is footer!
            </div>
        )
    }
}

export default App;