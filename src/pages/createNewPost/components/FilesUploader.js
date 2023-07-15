import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import { API_URL } from "../../../constants/Api_Graphql";
import './filesUploader.scss';
// import uploadPost from "../../../api/upload";
import dragAndDrop from '../../../assets/images/icons/CreateNewPostPage/dragAndDrop.png';

function FilesUploader({onFileUpload}) {

const [isLoading, setIsLoading] = useState(false);
const [fileId, setFileId] = useState("");
const [fileURL, setFileUrl] = useState("");
const [dragEnter, setDragEnter] = useState(false);

const dragEnterHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragEnter(true)
}

const dragLeaveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragEnter(false)
}

const postFiles = async (file) => {
    const formData = new FormData();

    formData.append("photo", file);

    const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: localStorage.authToken
            ? { Authorization: "Bearer " + localStorage.authToken }
            : {},
        body: formData,
    })
    const data = await response.json();
    setFileUrl(data.url);
    setFileId(data._id);

    if (onFileUpload) {
        onFileUpload(data._id, data.url);
      }
}

const fileUploadHandler = async (e) => {
    setIsLoading(true);
    const files = e.target.files;
    await postFiles(files[0])
    setIsLoading(false);
}

const dropHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);
    const files = e.dataTransfer.files;
    await postFiles(files[0])
    setIsLoading(false);
}

return (
    <div className="drop-wrapper">{
        !dragEnter ?
            <div
                onDragEnter={(e) => dragEnterHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragEnterHandler(e)}

                className="labelFile"
            >
                {isLoading ?
                    <CircularProgress /> :

                    <label >
                        <img src={dragAndDrop} alt="drag and drop"/>
                        <br />
                        Drag photos here
                        <input
                            accept=".jpg,.jpeg,.png,.pdf"
                            multiple={true}
                            onChange={(e) => fileUploadHandler(e)}
                            type="file"
                            className="inputFile"
                        />
                    </label>
                }
            </div>
            :
            <div
                onDragEnter={(e) => dragEnterHandler(e)}
                onDragOver={(e) => dragEnterHandler(e)}

                onDragLeave={(e) => dragLeaveHandler(e)}

                onDrop={(e) => dropHandler(e)}

                className="labelFile"
                
            >
                <img src={dragAndDrop} alt="drag and drop"/>
                    
                    Drop files here
            </div>
    }
    {fileURL && <div className="preview-photo"><img src={`${API_URL}/${fileURL}`} alt="pic"/></div>}
    </div>
)
}


export default FilesUploader;


