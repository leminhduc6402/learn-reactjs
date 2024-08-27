import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem, type DialogProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Login from "src/features/Auth/components/Login";
import Register from "src/features/Auth/components/Register";
import { RootState } from "src/store/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "src/features/Auth/userSlide";
const MODE = {
    LOGIN: "login",
    REGISTER: "register",
};

export default function Header() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state: RootState) => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
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
                    <NavLink to="/products" style={{ color: "white" }}>
                        <Button color="inherit">Products</Button>
                    </NavLink>
                    <NavLink to="/albums" style={{ color: "white" }}>
                        <Button color="inherit"> Album</Button>
                    </NavLink>
                    {isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )}
                    {!isLoggedIn && (
                        <IconButton onClick={handleUserClick}>
                            <AccountCircleIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
            <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
                <IconButton
                    onClick={() => setOpen(false)}
                    style={{ position: "absolute", top: 0, right: 0 }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent style={{ minWidth: "400px", minHeight: "300px", padding: "20px" }}>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register onCloseDialog={() => handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Login Here
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login onCloseDialog={() => handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Register Here
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}
