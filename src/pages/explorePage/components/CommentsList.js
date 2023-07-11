import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comment from './Comment';

function CommentsList({comments}) {
  return ( 
  
    comments && comments.length ? 
    <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{  fontWeight: 'light', fontSize: 14 }}>
      View all comments
    </AccordionSummary>
    <AccordionDetails>
    {comments && comments.length ? 
      comments.map(comment => (
        <Comment comment={comment}  key={comment._id} /> 
      ))
      : null}
    </AccordionDetails>
  </Accordion> : null )
  
  
}

export default CommentsList;