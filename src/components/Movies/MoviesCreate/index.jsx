import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppButton from "../../AppButton";
import AppInputField from "../../AppInputField";
import AppDragAndDropFile from "../../AppDragAndDropFile";
import "./style.scss";
import { addMovie } from "../../../store/actions";
import axios from "axios";

const MovieCreateScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const goBack = () => navigate("/");

  const [state, setState] = React.useState({
    title: "",
    publishYear: 0,
    poster: "",
  });

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(addMovie(state));
      navigate("/");
    }
  };

  const handleChange = (name, value) => {
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleFileUpload = async (file) => {
    if (file) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "MERNSTACK");
        const cloudName = "talhakash";

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );

        setState((prev) => ({
          ...prev,
          poster: response.data.secure_url,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!state.title.trim()) {
      errors.title = "Title is required";
    }

    if (
      !state.publishYear ||
      isNaN(state.publishYear) ||
      state.publishYear <= 0
    ) {
      errors.publishYear = "Valid publishing year is required";
    }

    console.log("errors",errors);
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="movies-create">
      <h2 className="heading">Create a new movie</h2>
      <div className="create-form">
        <div className="img-uploader">
          <AppDragAndDropFile
            onChange={(Image) => {
              handleFileUpload(Image);
            }}
            name="poster"
          />
        </div>
        <div className="fields">
          <AppInputField
            placeholder="Title"
            name="title"
            value={state.title}
            onChange={handleChange}
            error={errors.title}
          />
          <AppInputField
            placeholder="Publishing year"
            type="number"
            name="publishYear"
            value={state.publishYear}
            onChange={handleChange}
            error={errors.publishYear}
          />
          <div className="action-btns">
            <AppButton
              text="Cancel"
              disabled={isLoading}
              outline={true}
              onClick={goBack}
            />
            <AppButton
              text="Submit"
              disabled={isLoading}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCreateScreen;
