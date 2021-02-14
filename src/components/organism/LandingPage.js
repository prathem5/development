import React from 'react';
import {

  Button,
  TextInput,
  Form,
  TextArea,
  Select,
  SelectItem,
  Grid,
  Row,
  Column,
  RadioButtonGroup,
  RadioButton
 
} from 'carbon-components-react';
import { createUseStyles } from 'react-jss';
import { fontFamily, lineHeight, paddingTop } from 'styled-system';






const styles = createUseStyles({
  contentWrapper: {
    paddingTop:'10rem',
    maxWidth:'100%',
    minHeight: ' calc(100% - 82)',
    
  }
 ,
 formContainer:{
   padding:{
     top: 40,
     right: 40,
     bottom:40,
     left:40

   },
   maxWidth:'100%',
   backgroundColor:'#e0e0e0'
   
 },
 dexcriptionText:{
  fontWeight:'bold',
  fontSize : '0.875rem',
   
   lineHeight:'1.25rem',
   letterSpacing:0.16
 },
 pageHeading:{
   fontSize:'2rem',
   fontWeight:'400',
   lineHeight:'2.5rem',
   letterSpacing:0.16,
   paddingTop:' 4rem',
   paddingBottom:'3rem',
   fontFamily:'Victor'
 },
 progressBarContainer:{
paddingBottom:'2.5rem'
 },
 RadioButton:{
   borderTop:'3px solid transperent'

 },
 infoDescription:{
  
 fontSize : '0.875rem',
 
  lineHeight:'1.25rem',
  letterSpacing:0.16

 }
} )


const LandingPage = () => {
  const classes = styles(); 
  
  return (
  
    <div  className={classes.contentWrapper}>
      <div className={classes.pageHeading} >
        <h1>Enter your personal information</h1>
   </div>
   <div>
     <div >
  <RadioButtonGroup
  className={classes.progressBarContainer}
    defaultSelected="default-selected"
    legend="Group Legend"
    name="radio-button-group"
    valueSelected="default-selected"
   orientation='horizontal'>
    <RadioButton
      id="radio-1"
      labelText="Welcome"
      checked="true"
    />
    <RadioButton
      id="radio-2"
      labelText="Page Validation"
      value="default-selected"
    />
    <RadioButton
      id="radio-3"
      labelText="Review"
      value="disabled"
    />
  </RadioButtonGroup>
  </div>
   </div>
      <div className ={classes.formContainer}>
      <div> 
      <labelText className= {classes.dexcriptionText} style={{fontWeight: ''}} >Please enter the same information you provided in your Providence health system medical record.</labelText>
      </div>
      <div  style={{paddingTop: '2rem'}}> 
      <labelText className={classes.infoDescription}>The information you provide on this page is used to locate your record from your health system for the
         purpose of issuing your vaccine records to your mobile device. By providing your mobile number you are consenting 
         to be contacted regarding the availability of your vaccine records. Your mobile number will not be used for mobile
          marketing, and messaging or data charges may be imposed by your carrier.</labelText>
          </div>   
  <Form>
    <Grid>
      
  <Row  style={{paddingTop: '2rem'}}>
        
  <Column >
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="FirstName"
      placeholder="Jhon"
      
    />
</Column>
  <Column >
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="LastName"
      placeholder="Doe"
    />
  </Column>
  </Row>
  <Row  style={{paddingTop: '2rem'}}>
      
  <Column >
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Date of Birth"
      placeholder="DD/MM/YYYY"
    />
</Column>
  <Column >
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Social Security Number (Last 4 Digits, optional)"
      placeholder="####"
    />
  </Column>
  </Row>
  <div style={{paddingTop: '2rem'}}>
  <span>Mobile Number</span>  
  <Row  >
  <Column style={{fontSize: '.75rem' ,lineHeight:'0'}}>  
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="To receive text messages and download our mobile application"
      placeholder="(###)###-###"
    />
</Column>
  <Column>
    
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Email"
      placeholder="you@mail.com"
      backgroundColor="#f0efef"

    />
  </Column>
  </Row>
  </div>
  <Row  style={{paddingTop: '2rem'}}>
        <div></div>
  <Column>
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Mailing Address"
    
      placeholder="Primary Street Address"
    />
</Column>
  <Column>
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Mailing Address 2 (optional)"
      
      placeholder="Unit #, Apt, Suite"
    />
  </Column>
  </Row>
  <Row  style={{paddingTop: '2rem'}}>
        <div></div>
  <Column>
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="City"
      placeholder="Seatle"
    />
</Column>
<Column className="bx--column" >
  <Row>
    <Column>
    <Select
      defaultValue="placeholder-item"
      id="select-1"
      invalidText="This is an invalid error message."
      labelText="State"
    >
      <SelectItem
        text="Option 1"
        value="option-1"
      />
      <SelectItem
        text="Option 2"
        value="option-2"
      />
      <SelectItem
        text="Option 3"
        value="option-3"
      />
    </Select>
    </Column>
  

  <Column>
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Postal Code"
      placeholder="#####"
    />
    </Column>
    </Row>
  </Column>
  
  </Row>
  
  <Row style={{paddingTop: '2rem'}}> 
    <Button
    style={{marginLeft:'1rem'}}
    kind="secondary"
    tabIndex={0}
    type="submit"
  >
    Continue
  </Button></Row>
  </Grid>
 
</Form>


  </div>
</div>
    );
};

export default LandingPage;