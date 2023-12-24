import {PrettyChatWindow} from 'react-chat-engine-pretty'


const ChatsPage =(props)=>{
    return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId='24156556-ab5f-4ae6-9355-e0fb2fd259ac'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
    </div>
    )
}

export default ChatsPage; 