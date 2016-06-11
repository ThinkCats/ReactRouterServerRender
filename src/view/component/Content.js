import React, {Component} from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import ContentAction from '../action/ContentAction';
import ContentStore from '../store/ContentStore';

class Content extends Component {
    static getStores() {
        return [ContentStore];
    }

    static getPropsFromStores() {
        console.log('global state:',ContentStore.getState());
        return ContentStore.getState();
    }

    handleClick = (type)=> {
        console.log('click:',type);
        ContentAction.handleClick(type);
    };

    render() {
        return (
            <div>
                Hahaha ... <br/>
                {this.props.count} <br/>
                <a onClick={()=>this.handleClick(0)}>增加</a> &nbsp;
                <a onClick={()=>this.handleClick(1)}>减少</a>
            </div>
        )
    }
}


export default connectToStores(Content)