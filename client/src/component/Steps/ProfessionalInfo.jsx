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
import { addExperience } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";

const ProfessionalInfo = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  const [current, setCurrent] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [description, setDesc] = useState("");
  const navigate = useNavigate();


  const { jwt_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCheckBox = () => {
    setCurrent(!current);
  };
  const handleSubmitExperience = () => {
    if(!companyName || !description || !startDate) {
      return alert("All fields are required!")
    }
    let userData = {
      companyName,
      description,
      startDate: startDate.$d.toISOString(),
      current,
      jwt_token: jwt_token,
    };
    if (current == false) {
      userData.endDate = endDate.$d.toISOString();
    }
    console.log(userData);
    dispatch(addExperience(userData))
      .then((res) => {
        if(res.payload._id){
          navigate('/community')
      } else {
          alert(res.payload.error)
      }
      })
      .catch((err) => console.log(err));
  };

  const handleMenteeNext = ()=> {
    navigate('/community')
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
          label: "Professional Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid container spacing={3} style={{ marginBottom: "16px" }}>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              type="text"
              variant="outlined"
              color="primary"
              size="small"
              fullWidth={true}
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginBottom: "16px" }}>
          <Grid item xs={12}>
            <TextField
              label="Description"
              type="text"
              variant="outlined"
              color="primary"
              size="small"
              fullWidth={true}
              name="description"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginBottom: "16px" }}>
          <Grid item xs={12} sm={6}>
            {/* {renderInputField({
            state,
            name: "startDate",
            label: "Start Date",
            onChange: handleChange,
          })} */}
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
            label="Currently Working Here"
          />
        </FormGroup>
      </Grid>

      <Grid container component={Box} justifyContent="flex-end" mt={3}>
        <Box ml={2}>
          {state.account_type == "mentee" ? renderButton({ label: "Skip", onClick: handleMenteeNext }) : renderButton({ label: "Finish", onClick: handleSubmitExperience })}
          
        </Box>
      </Grid>
    </Box>
  );
};

export default ProfessionalInfo;
