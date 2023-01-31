import {
  Button, MenuItem, TextField, Typography, Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import WorkIcon from '@mui/icons-material/Work';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Person from "@mui/icons-material/Person";


export const renderText = ({ type, label, color, ...rest }) => (
  <Typography variant={type} color={color} {...rest}>
    {label}
  </Typography>
);

export const renderInputField = ({ name, label, type, state, onChange, disabled = false }) => {
  const { data, errors } = state;
  return (
    <TextField
      label={label}
      type={type ? type : "text"}
      variant='outlined'
      color='primary'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
export const renderSelect = ({ name, label, options, state, onChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      select
      label={label}
      variant='outlined'
      color='primary'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({ label, variant, color, onClick }) => (
  <Button
    variant="outlined-basic"
    style={{ backgroundColor: `var(--primary)`, color: `var(--card-bg)` }}
    size='large'
    onClick={onClick}>
    {label}
  </Button>
);

{/* Stepper Component Starts Here */ }

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'var(--gradient-bg)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'var(--gradient-bg)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.black[400] : '#eaeaf0',
    borderRadius: 1,
  },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: `var(--gray4)`,
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'var(--gradient-bg)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.30)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'var(--gradient-bg)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <KeyIcon />,
    2: <Person />,
    3: <MenuBookRoundedIcon />,
    4: <WorkIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

export const renderStepper = ({ state }) => (
  <Stepper activeStep={state.stepCount - 1} alternativeLabel connector={<ColorlibConnector />}>
    {state.steps.map((item, i) => (
      <Step key={i}>
        <StepLabel StepIconComponent={ColorlibStepIcon}>{item.label}</StepLabel>
      </Step>
    ))}
  </Stepper>
);

{/* Stepper Component Ends Here */}