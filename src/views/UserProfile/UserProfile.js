import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputAdornment from '@mui/material/InputAdornment';



import avatar from "assets/img/faces/marc.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

export default function UserProfile() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const {id} = useParams()
  const dispatch = useDispatch()
  const {userDetails} = useSelector(state=>state.user)
  console.log(userDetails)
  useEffect(()=>{
    dispatch({type:"GET_USER",value:id,})
  },[])
  console.log(id)
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Amount </h4>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelText= {id}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
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
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer> */}
              {/* <GridContainer> */}
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
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
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Awaiting </option>
          <option value={20}>Accept </option>
          <option value={30}>Rejected </option>
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
            <CardFooter>
              <Button color="primary">Confirm</Button>
            </CardFooter>
          </Card>
        </GridItem>
{/* table create */}

 
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>id:{id}</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
              </p>
              {/* <Button color="primary" round>
                Follow
              </Button> */}
            </CardBody>
          </Card>
        </GridItem><GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
            Transaction history
            </h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["User-id", "Name", "Amount", "Status", "created"]}
              tableData={[
                ["4", "Dakota Rice", "$36,738", "deposit", "2022-04-27T05:08:03.677Z"],
                ["4", "Dakota Ricer", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["4", "Dakota Rice", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Dakota Rice",
                  "$38,735",
                  "Korea, South",
                  "Overland Park",
                ],
                [
                  "4",
                  "Dakota Rice",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten",
                ],
                ["4", "Dakota Rice", "$78,615", "Chile", "Gloucester"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
    </div>
  );
}
