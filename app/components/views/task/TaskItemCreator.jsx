import React from 'react'
import { Button } from 'react-bootstrap/lib'
import TaskItemEditorModal from './TaskItemEditorModal'

export default class TaskItemCreator extends React.Component {
    static propTypes = {
        onTaskItemSaved: React.PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }
    toggleModalEditor(){
        this.setState({ showModal: !this.state.showModal });
    }
    render() {
        return (
            <div>
                <Button 
                    bsSize={(this.props.bsSize) ? this.props.bsSize : "sm"} 
                    bsStyle="primary" onClick={this.toggleModalEditor.bind(this)}>
                    New Task
                </Button>
                <TaskItemEditorModal
                    showModal={this.state.showModal}
                    onTaskItemSaved={this.props.onTaskItemSaved}
                    onToggleModal={this.toggleModalEditor.bind(this)} />
            </div>
        )
    }
}