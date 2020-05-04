import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
// Redux stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DynamicSelect from './DynamicSelect';
import DynamicSelect1 from './DynamicSelect1'
// Icons
import EditIcon from '@material-ui/icons/Edit';
//Form
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const arrayOfData = [
  {
    id: 'Faculty',
    name: 'Faculty'    
  },
  {
    id: 'Student',
    name: 'Student'    
  },
];
const arrayOfData1 = [
  {
    id: 'CSE',
    name: 'CSE'    
  },
  {
    id: 'ECE',
    name: 'ECE'    
  },
  {
    id: 'MECH',
    name: 'MECH'    
  },
  {
    id: 'EEE',
    name: 'EEE'    
  },
  {
    id: 'IT',
    name: 'IT'    
  },
  {
    id: 'AS&H',
    name: 'AS&H'    
  },
];
const styles = (theme) => ({
  ...theme,
  button: {
    float: 'right'
  }
});

class EditDetails extends Component {
  state = {
    bio: '',
    website: '',
    location: '',
    open: false
  };
  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      website: credentials.website ? credentials.website : '',
      location: credentials.location ? credentials.location : ''
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    });
  };
  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedValue: selectedValue
    });
  };
  handleSelectChange1 = (selectedValue1) =>{
    this.setState({
      selectedValue1: selectedValue1
    });
  };
  
  handleSubmit = () => {
    const userDetails = {
      bio: this.state.selectedValue,
      website: this.state.website,
      location: this.state.selectedValue1
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="Edit Details"
          onClick={this.handleOpen}
          btnClassName={classes.button}
        >
          <EditIcon color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
          <FormControl className={classes.formControl}>     
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
                Select your Position</InputLabel>
              <DynamicSelect arrayOfData={arrayOfData}
                onSelectChange={this.handleSelectChange} />
              </FormControl>
              <br />    
              <TextField
                name="website"
                tpye="text"
                label="Regd no"
                placeholder="Your University Regd no"
                className={classes.textField}
                value={this.state.website}
                onChange={this.handleChange}
                fullWidth
              />
              <br />
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Select your Branch</InputLabel>
              <DynamicSelect1 arrayOfData1={arrayOfData1}
                onSelectChange1={this.handleSelectChange1} 
              />  
              </FormControl>
              </FormControl>
              </DialogContent>
            
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials
});

export default connect(
  mapStateToProps,
  { editUserDetails }
)(withStyles(styles)(EditDetails));
