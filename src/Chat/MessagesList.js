import React from 'react'
import { List, ListItem } from 'material-ui/List';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton'
import moment from 'moment'
import Avatar from 'material-ui/Avatar'





const MessagesList = (props) => (
    <List>
        {
            props.messages.map(message => (
                <ListItem
                    leftAvatar={
                        <Avatar
                            src={message.author.img}
                        />
                    }
                    primaryText={message.text}
                    secondaryText={`
                    ${moment(message.timestamp).format('DD-MM-YYYY hh:mm')}
                    ${message.author.displayName || message.author.email}
                `}
                    key={message.key}
                    rightIconButton={
                        <IconButton
                            onClick={() => props.onDeleteMessageClickHandler(message.key)}
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