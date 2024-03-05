import React, { useEffect, useState } from 'react';
import { AppBar, Tab, Tabs, List, ListItem, ListItemText } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Replace with your actual API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    const handleTabChange = (event, newValue) => {
        if (newValue === 0) {
            navigate('/dashboard');
        } else if (newValue === 1) {
            navigate('/user-form');
        }
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs onChange={handleTabChange}>
                    <Tab label="Dashboard" />
                    <Tab label="User Form" />
                </Tabs>
            </AppBar>
            <List>
                {data.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.title} secondary={item.body} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Dashboard;