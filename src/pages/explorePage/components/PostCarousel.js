import Carousel from 'react-material-ui-carousel';
import noImagePhoto from '../../../assets/images/icons/HomePage/no-image.png';
import { API_URL } from "../../../constants/Api_Graphql";

function PostCarousel({items}) {
  
  return (
    <Carousel navButtonsAlwaysVisible={true} autoPlay={false} sx={{width: '100%', height: '280px'}}>
      {items.map((image, index) => (<img className="post-image"
        src={`${image?.url !== null && image?.url !== "null" ? `${API_URL}/${image?.url}` : noImagePhoto}`}
        alt={image?.url !== null && image?.url !== "null" ? "post" : "no post"}
        key={index}
        />)    
      )}
    </Carousel>
  )
}

export default PostCarousel;



