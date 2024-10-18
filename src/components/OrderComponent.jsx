import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography, Tabs, Tab } from '@mui/material';

const OrderComponent = ({ open, close }) => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Modal open={open} onClose={close}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 3,
                    borderRadius: 1,
                    outline: 'none',
                }}
            >
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    textColor="text-custom-orange"
                    indicatorColor="text-custom-orange"
                    variant="fullWidth"
                    centered
                >
                    <Tab label="Delivery" />
                    <Tab label="Pickup" />
                    <Tab label="Dine-in" />
                </Tabs>
                <Box hidden={tabValue !== 0}>
                    <Typography variant="body1" className="mb-2">
                        Which branch would you like to pick up from?
                    </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="Select city"
                        select
                        SelectProps={{ native: true }}
                    >
                        <option value="cairo"></option>
                        {/* Add city options here */}
                    </TextField>
                    <TextField
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="Select branch"
                        select
                        SelectProps={{ native: true }}
                    >
                        <option value="cairo"> cairo</option>
                        {/* Add branch options here */}
                    </TextField>
                    <Typography variant="body2" className="text-red-500 mt-2">
                        Please note that cash pick-up orders are prepared after arriving at the branch for quality purposes.
                    </Typography>
                </Box>
                <Box hidden={tabValue !== 1}>
                    <Typography variant="body1" className="mb-2">
                        Pickup specific content here.
                    </Typography>
                </Box>
                <Box hidden={tabValue !== 2}>
                    <Typography variant="body1" className="mb-2">
                        Dine-in specific content here.
                    </Typography>
                </Box>
                <Button variant="contained" color="primary" className="mt-4" fullWidth>
                    Log in
                </Button>
                <Button variant="contained" className="bg-orange-500 text-white mt-2" fullWidth>
                    Start Ordering
                </Button>
            </Box>
        </Modal>
    );
};

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);


//     <div className="App">
//       <button onClick={handleOpen} className="p-4 bg-orange-500 text-white">
//         Order Now
//       </button>
//       <OrderModal open={open} handleClose={handleClose} />
//     </div>



export default OrderComponent;
