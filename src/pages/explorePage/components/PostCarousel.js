import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

function PostCarousel() {
  
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
  return (
    <Carousel>
      {items.map((item, index) => (<Item key={index} item={item}/>)    
      )}
    </Carousel>
  )
}

export default PostCarousel;


function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}


