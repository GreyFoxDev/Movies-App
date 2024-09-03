import React, { useState } from "react";
import PropTypes from "prop-types";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import "./style.scss";

const fileTypes = ["JPG", "PNG", "GIF"];

/**
 * @param {Object} props
 * @param {String} props.label
 * @param {String} props.name
 * @param {Function} props.onChange
 * @returns
 */
function AppDragAndDropFile(props) {
  const [file, setFile] = useState(null);

  

  return (
    <div>
      <FileUploader
        classes="file-uploader"
        handleChange={props.onChange}
        name={props.name}
        types={fileTypes}
        label={props.label}
      />

      {/* <button onClick={handleUpload}>Upload to Cloudinary</button> */}
    </div>
  );
}

AppDragAndDropFile.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AppDragAndDropFile.defaultProps = {
  name: "file",
  label: "Drop an image here",
  onChange: () => null,
};

export default AppDragAndDropFile;
