


import React, {Component} from 'react'
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './ChatFeed';


class Messenger extends Component {
    constructor (props){
        super(props)
    }
    render(){
        return(
            <div>
                <ChatEngine
			height='80vh'
			userName='Mithiya'
			userSecret='Mithu@123'
			projectID='83ad1c0b-3e26-44a7-874c-ba131592f0a3'
		/></div>
        )
    }
}

export default Messenger