import React, {useState}  from "react";
import {ListItem, List, ListItemText, Typography, Divider} from '@mui/material';
import uiData from "../course-data/ui/metadata.json"
import graphData from "../course-data/computer_graphics/metadata.json"
import desData from "../course-data/senior_design/metadata.json"

function Files(props){
    const [fileTitle, setTitle] = useState("Files")
    var ppts = [];
    if(props.class === "ui") {
        var ppts = [];
        uiData.map(item => {
            if(item.folder === "presentations") {
                var obj = {
                    title: item.title,
                    module: item.module
                }
                ppts.push(obj);
            }
        })
    }
    else if(props.class === "computer_graphics") {
        var ppts = [];
        graphData.map(item => {
            if(item.folder === "presentations") {
                var obj = {
                    title: item.title,
                    module: item.module
                }
                ppts.push(obj);
            }
        })
    }
    else {
        desData.map(item => {
            if(item.folder === "presentations") {
                var obj = {
                    title: item.title,
                    module: item.module
                }
                ppts.push(obj);
            }
        })
    }
    return(
        <div className="files-setup" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
            <h1>{fileTitle}</h1>
            <h5> Click the file title to download materials. </h5>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {ppts.map((value, index) => (
                <React.Fragment>
                <ListItem
                    key={index}
                    onClick={() => alert("Your file has been downloaded!")}
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
                            Module:  
                        </Typography>
                        {value.module}
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
export default Files;