import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface PropsType {
    img: string,
    desc: string,
    path: string,
}

export default function VideoCard({img, desc, path}: PropsType) {
    const navigate = useNavigate()
    return (
        <Card sx={{margin: "10px"}}>
            <CardMedia component={"iframe"} image={img} sx={{height: 300}}/>
            <CardContent>
                <Typography variant='h3'>{desc}</Typography>
                <CardActions>
                    <Button sx={{marginLeft: "auto"}} onClick={() => navigate(path)} variant="contained">Details</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
