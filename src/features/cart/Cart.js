import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {cartState, deleteItem} from "./cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    Button,
    Dialog,
    List,
    ListItem,
    ListItemText, Slide,
    Typography
} from "@mui/material";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

function CloseIcon() {
    return null;
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = () => {
    const cart = useSelector(cartState)
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <IconButton onClick={handleClickOpen} size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={cart.totalQuantity} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>


            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    {cart.items.map((item,index) => (
                        <ListItem button>
                            <ListItemText primary={item.name} secondary={item.price} />
                            <Button onClick={() => dispatch(deleteItem(index))}>Xoa</Button>
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </div>
    )
}
export default Cart
