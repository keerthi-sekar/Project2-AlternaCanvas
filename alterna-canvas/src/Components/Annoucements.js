import React, {useState}  from "react";
import {ListItem, List, ListItemText, Typography, Divider} from '@mui/material';

function Annoucements() {
    var annoucements = [
        {title: "Class canceled today", date: "12/1/22"},
        {title: "Assignment 1 has been released", date: "11/1/22"},
        {title: "Complete Quiz 1 before 11:59pm, Friday", date: "10/1/22"},
        {title: "Welcome to Class", date: "9/1/22"}
    ];
    
    return(
        <div className="course-body" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
            <h1>Annoucements</h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {annoucements.map((value, index) => (
                <React.Fragment>
                <ListItem
                    key={index}
                    sx={{minWidth: '1100px'}}
                >
                <ListItemText
                    primary={                      
                    <Typography
                        fontWeight="bold"
                        fontSize="large"
                    >
                        {value.title}
                    </Typography>}
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Date: 
                        </Typography>
                        {value.date}
                        </React.Fragment>
                    }
                />
                </ListItem>
                <Divider component="li"/>
                </React.Fragment>
            ))}
            </List>
        </div>
        
    );

}

export default Annoucements;