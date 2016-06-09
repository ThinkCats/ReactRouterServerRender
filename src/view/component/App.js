import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <span className="header">This is a react head?</span><br/>
                {this.props.children}
                This is footer!
            </div>
        )
    }
}

export default App;