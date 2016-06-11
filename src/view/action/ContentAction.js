import alt from '../alt';

class ContentAction {
    handleClick(type) {
        return type;
    }
}

export default alt.createActions(ContentAction);