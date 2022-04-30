import React, { useEffect, useState } from "react";
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
import Table from "components/Table/TransactionTable";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputAdornment from '@mui/material/InputAdornment';



import avatar from "assets/img/faces/marc.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TransactionPopup from "../../components/Popup/Popup"

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
  const [showPopup,setShowPopup] = React.useState(false)
  const [popUpData,setPopupData] = React.useState(false)

  const {id} = useParams()
  const dispatch = useDispatch()
  const transactionDetails = useSelector(state=>state.user.transactionDetails)
  console.log(transactionDetails)
  useEffect(()=>{
    dispatch({type:"GET_TRANSACTIONS",value:id,})
  },[])
  console.log(id)
  const classes = useStyles();
  const getTableData = () => transactionDetails.map(t => ([t.user_id,t.amount,t.amount,t.transaction_type,t.status,t.created]))
  return (
    <div>
      <GridContainer>
       
{/* table create */}

 

       <GridItem xs={12} sm={12} md={12}>
       <Card>
         <CardHeader color="primary">
           <h4 className={classes.cardTitleWhite}>Transactions History</h4>
           {/* <p className={classes.cardCategoryWhite}>
             Here is a subtitle for this table
           </p> */}
         </CardHeader>
         <CardBody>
           <Table
             tableHeaderColor="primary"
             tableHead={["User-id", "Name", "Amount","Transaction Type", "Status", "created"]}
             tableData={getTableData()}
             setShowPopup={setShowPopup}
             setPopupData={setPopupData}
           />
         </CardBody>
       </Card>
       <TransactionPopup showPopup={showPopup} popUpData={popUpData} setShowPopup={setShowPopup}/>
     </GridItem>
      </GridContainer>
    </div>
  );
}
