import alt from '../alt';
import ContentAction from '../action/ContentAction';

class ContentStore {
    constructor() {
        this.bindListeners({
            handleClick: ContentAction.handleClick
        });

        this.state= {
            count : 1
        }
    }

    handleClick = (type)=>{
        let count = this.state.count;
        switch (type){
            case 0:
                count+= 1;
                break;
            case 1:
                count -=1;
                break;
        }
        this.setState({count:count});
    }
}

export default alt.createStore(ContentStore , 'ContentStore');