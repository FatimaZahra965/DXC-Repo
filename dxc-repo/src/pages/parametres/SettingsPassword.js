import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Divider, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';

function SettingsPassword(props) {
    const [values, setValues] = useState({
        password: '',
        newPassword:'',
        confirm: ''
       
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    return (
        <div>
      <form>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
        <TextField
            fullWidth
            label="Password"
            margin="normal"
            size="small"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New Password"
            margin="normal"
            size="small"
            name="newPassword"
            onChange={handleChange}
            type="password"
            value={values.newPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            size="small"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
        </div>
    );
}

export default SettingsPassword;