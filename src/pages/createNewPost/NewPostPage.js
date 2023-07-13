import FileUploader from './components/FilesUploader';
import NewPost from './components/NewPost'

function NewPostPage() {
  return (
   <div style={{display:"flex", flexDirection: "column", gap: "40px"}}>
     <NewPost />
    {/* <FileUploader /> */}
   </div>
  )
}

export default NewPostPage;