import MenuIcon from "@mui/icons-material/Menu";
import type { DialogProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "src/features/Auth/components/Register";

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose: DialogProps["onClose"] = (event, reason) => {
        console.log(event, reason);
        if (reason === "backdropClick") {
            return;
        }
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <MenuIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ color: "white" }} to="/">
                            Nome Shop
                        </Link>
                    </Typography>
                    <NavLink to="/todos" style={{ color: "white" }}>
                        <Button color="inherit">Todo</Button>
                    </NavLink>
                    <NavLink to="/albums" style={{ color: "white" }}>
                        <Button color="inherit"> Album</Button>
                    </NavLink>
                    <Button color="inherit" onClick={handleClickOpen}>
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
                <DialogContent>
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
