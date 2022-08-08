import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/cart/cartSlice";

const products = [
    {
        id: 1,
        name: 'Dien thoai iphone',
        image: 'https://cdn.tgdd.vn/Products/Images/42/269832/Xiaomi-redmi-note-11-blue-600x600.jpeg',
        price: '100000'
    },
    {
        id: 2,
        name: 'Dien thoai iphone',
        image: 'https://cdn.tgdd.vn/Products/Images/42/269832/Xiaomi-redmi-note-11-blue-600x600.jpeg',
        price: '100000'
    },
    {
        id: 3,
        name: 'Dien thoai iphone',
        image: 'https://cdn.tgdd.vn/Products/Images/42/269832/Xiaomi-redmi-note-11-blue-600x600.jpeg',
        price: '100000'
    },
    {
        id: 4,
        name: 'Dien thoai iphone',
        image: 'https://cdn.tgdd.vn/Products/Images/42/269832/Xiaomi-redmi-note-11-blue-600x600.jpeg',
        price: '100000'
    }
]

const ProductList = ()  => {
    const dispatch = useDispatch();

    const handleAddCart = (item) => {
        dispatch(addToCart(item))
    }

    return (
        <div>
            <Grid container spacing={2} mt={4}>
            {products.map((item, index) => (
                <Grid item xs={3} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height=""
                        image={item.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button variant="contained" color="success" size="small" onClick={() => handleAddCart(item)}>Add To Cart</Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>

        </div>
    )
}

export default ProductList
