import React from 'react'
import { List, ListItem } from 'material-ui/List';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton'
import moment from 'moment'


const MessagesList = (props) => (
    <List>
        {props.messages.map(message => (
            <ListItem
                key={message.key}
                primaryText={message.text}
                secondaryText={moment(message.timestamp).format('DD-MM-YYYY hh:mm')}
                rightIconButton={
                    <IconButton
                    onClick ={() => alert(message.key)}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            >

            </ListItem>
        ))}
    </List>
)

export default MessagesList