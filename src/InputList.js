import React, { useState, Fragment } from "react";
import "./App.css"
import axios from "axios"
const InputList = () => {
  const [inputFields, setInputFields] = useState([
    { songName: '', songAlbum: '',songDuration: '', songKey: '',songDanceability: '', songAcousticness: '' }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ songName: '', songAlbum: '',songDuration: '', songKey: '',songDanceability: '', songAcousticness: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "songName") {
      values[index].songName = event.target.value;
    } else if (event.target.name === "songAlbum"){
      values[index].songAlbum = event.target.value;
    }else if (event.target.name === "songDuration"){
        values[index].songDuration = event.target.value;
    }else if (event.target.name === "songKey"){
        values[index].songKey = event.target.value;
    }else if (event.target.name === "songDanceability"){
        values[index].songDanceability = event.target.value;
    }else {
        values[index].songAcousticness = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
    axios
      .post("http://localhost:8080/songs/",inputFields)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h3 >ADD THE SONG DETAILS:</h3>
      <form onSubmit={handleSubmit}>
        <div >
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
                <br />
            <table>
            <tr>
                <td>
              <input 
                type = "text"
                name = "songName"
                id = "songName"
                placeholder = "Song Name"
                value={inputField.songName}
                onChange={event => handleInputChange(index, event)} 
            />
                </td>
                <td>
            <input 
                type = "text"
                name = "songAlbum"
                id = "songAlbum"
                placeholder = "Album Name"
                value={inputField.songAlbum}
                onChange={event => handleInputChange(index, event)} 
            />
                </td>
                <td>
            <input 
                type = "text"
                name = "songDuration"
                id = "songDuration"
                placeholder = "Duration"
                value={inputField.songDuration}
                onChange={event => handleInputChange(index, event)}
            />
                </td>
                <td>
            <input 
                type = "text"
                name = "songKey"
                id = "songKey"
                placeholder = "Key"
                value={inputField.songKey}
                onChange={event => handleInputChange(index, event)} 
            />
                </td>
                <td>
            <input 
                type = "text"
                name = "songDanceability"
                id = "songDanceability"
                placeholder = "Danceability Value" 
                value={inputField.songDanceability}
                onChange={event => handleInputChange(index, event)}
            />
                </td>
                <td>
            <input 
                type = "text"
                name = "songAcousticness"
                id = "songAcousticness"
                placeholder = "Acousticness Value"
                value={inputField.songAcousticness}
                onChange={event => handleInputChange(index, event)}
            />
                </td>
                <td>
            <button
                className="but1"
                type="button"
                onClick={() => handleRemoveFields(index)}
            >-
            </button>
                </td>
                <td>
            <button
                className="but1"
                type="button"
                onSubmit={() => handleAddFields()}
            >+
            </button>
            </td>
            </tr>
            </table>
            </Fragment>
          ))}
        </div>
        <div >
          <button
            className="but"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
        <br/>
      </form>
    </>
  );
};
export default InputList;
