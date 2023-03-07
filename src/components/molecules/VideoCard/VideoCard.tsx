import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

interface PropsType {
    img: string,
    desc: string
}

export default function VideoCard({img, desc} : PropsType) {
  return (
    <Card sx={{margin: "10px"}}>
        <CardMedia image={img} sx={{height: 300}} />
        <CardContent>
            <Typography variant='body2'>{desc}</Typography>
            <CardActions>
                <Button sx={{marginLeft: "auto"}} variant="contained">Details</Button>
            </CardActions>
        </CardContent>
    </Card>
  )
}
