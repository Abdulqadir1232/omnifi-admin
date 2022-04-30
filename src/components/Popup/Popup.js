import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from '@mui/material/InputAdornment';
import NativeSelect from '@mui/material/NativeSelect';
import CustomInput from "components/CustomInput/CustomInput.js";
import CardHeader from "components/Card/CardHeader.js";
import Dialog from '@mui/material/Dialog';
import { border } from '@mui/system';
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
const useStyles = makeStyles(styles);
export default function TransactionPopup({showPopup,popUpData,setShowPopup}) {
  const classes = useStyles();
  console.log(popUpData, "Data")
  return (
    <>
      <Dialog onClose={()=>{setShowPopup(false)}} open={showPopup}>
      <GridContainer>
      <GridItem xs={12} sm={12} md={8} style={{maxWidth:'100%',flex:1}}>
          <Card  style={{boxShadow:"none"}}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Amount </h4>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText= {"User-Id"}
                      id="User-Id"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: true,
                        value:popUpData[0],
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Amount"
                      id="username"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        // disabled: false,
                        value:popUpData[2],
                      }}
                    />
                  </GridItem>
                {/* </GridContainer> */}
                {/* <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer> */}
                {/* <GridContainer> */}
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Transaction Type"
                      id="transaction-type"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: true,
                        value:popUpData[3],
                      }}
                    />
                  </GridItem>
                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem> */}
          <GridItem xs={12} sm={3} md={5}>
         <FormControl  variant="standard" sx={{ m: 1.2, minWidth: 175 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
             Status
          </InputLabel>
          <NativeSelect
            defaultValue={popUpData[4]}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={"awaiting"}>Awaiting </option>
            <option value={"accept"}>Accept </option>
            <option value={"rejected"}>Rejected </option>
          </NativeSelect>
        </FormControl>
      </GridItem>
                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem> */}
                </GridContainer>
                {/* <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                    <CustomInput
                      labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      id="about-me"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                </GridContainer> */}
              </CardBody>
              <CardFooter style={{justifyContent:"flex-end"}}>
                <Button  style={{backgroundColor:"#ab47bc",color:"white",borderRadius:"25px",border:"2px solid #ab47bc",marginRight:"8px"}}>Submit</Button>
                <Button  style={{backgroundColor:"white",color:"#ab47bc", border:"1px solid #ab47bc",borderRadius:"25px"}} onClick={()=>{setShowPopup(false)}}>Cancel</Button>
              </CardFooter>
            </Card>
          </GridItem>
          </GridContainer>
      </Dialog>
    </>
  )
}
