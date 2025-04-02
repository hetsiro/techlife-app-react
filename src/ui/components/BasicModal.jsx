import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia, Chip, Divider } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
};

export default function BasicModal({ id, name, specs, brand, type }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ width: '100%' }}>
            <Button 
            variant="outlined"
            size='small'
            fullWidth
            onClick={handleOpen}>View</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CardMedia
                        sx={{
                            height: 350,
                        }}
                        image={`/assets/items/${ id }.png`}
                    />
                    <Typography id="modal-modal-description" color='primary.main' variant="h6" sx={{ my: 2 }} textAlign='center'>
                        {name}
                    </Typography>
                    <Divider>
                        <Chip label="Specs" size="small" />
                    </Divider>
                    <Typography id="modal-modal-title" variant="subtitle1" component="h2" sx={{ my: 2 }} textAlign='center' >
                        {specs}
                    </Typography>
                    <Divider>
                        <Chip label="Brand" size="small" />
                    </Divider>
                    <Typography id="modal-modal-description" variant="body1" sx={{ my: 2 }} textAlign='center' >
                        {brand}
                    </Typography>
                    <Divider>
                        <Chip label="Type" size="small" />
                    </Divider>
                    <Typography id="modal-modal-description" variant="body2" sx={{ my: 2 }} textAlign='center' >
                        {type}
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}