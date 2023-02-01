import {
  Box,
  Grid,
  Paper,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
  renderStepper,
} from "../common/displayComponent";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useDispatch, useSelector } from "react-redux";
import { addEducation } from '../../redux/authSlice';


const EducationalInfo = ({ state, handleChange, handleNext, handlePrev }) => {
  const [current, setCurrent] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [collegeName, setCollegeName] = useState("");
  const [description, setDesc] = useState("");

  const {jwt_token} = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const handleCheckBox = () => {
    setCurrent(!current);
  };

  const handleSubmitEducation = ()=> {
    if(!collegeName || !description || !startDate) {
      return alert("All fields are required!")
    }
    let userData = {
      collegeName,
      description,
      startDate: startDate.$d.toISOString(),
      current,
      jwt_token: jwt_token
    }

    if(current == false){
      userData.endDate = endDate.$d.toISOString()
    }
    console.log(userData)
    dispatch(addEducation(userData)).then(res=> handleNext()).catch(err=> console.log(err))
  }

  return (
    <Box
      style={{
        paddingLeft: "40px",
        paddingTop: "60px",
        paddingBottom: "60px",
        paddingRight: "40px",
      }}
    >
      {renderStepper({ state })}
      <Box mt={2} mb={2} pt={6} pb={6}>
        {renderText({
          label: "A Bit About Your Education",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          <TextField
          label= "College Name"
          type="text"
          variant='outlined'
          color='primary'
          size='small'
          fullWidth={true}
          name="collegeName"
          value={collegeName}
          onChange={(e)=> setCollegeName(e.target.value)}
        />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          <TextField
          label= "Field of Study/Description"
          type="text"
          variant='outlined'
          color='primary'
          size='small'
          fullWidth={true}
          name="description"
          value={description}
          onChange={(e)=> setDesc(e.target.value)}
        />
          
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              value={endDate}
              disabled={current}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={handleCheckBox} />}
          label="Currently Studying Here"
        />
      </FormGroup>

      <Grid container component={Box} justifyContent="flex-end" mt={3}>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleSubmitEducation })}</Box>
      </Grid>
    </Box>
  );
};

export default EducationalInfo;
