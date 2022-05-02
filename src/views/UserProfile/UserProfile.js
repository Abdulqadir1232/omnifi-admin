import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from '@mui/material/Button';
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



import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TransactionPopup from "../../components/Popup/Popup"
import TransactionPopup1 from "../../components/Popup/popup1"
import { boxShadow } from "assets/jss/material-dashboard-react";

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
  button:{
    

    border: "none",
    boxShadow: "2px 2px 7px #552361",
    background: "#9c35b3",
    borderRadius: "3px",
    cursor:"pointer"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [showPopup,setShowPopup] = React.useState(false)
  const [showPopup1,setShowPopupOne] = React.useState(false)
  const [popUpData,setPopupData] = React.useState([])

  const {id} = useParams()
  const dispatch = useDispatch()
  const transactionDetails = useSelector(state=>({transactionDetails:state.user.transactionDetails}))

  useEffect(()=>{
    dispatch({type:"GET_TRANSACTIONS",value:id,})
  },[])

  const classes = useStyles();
  const getTableData = () => transactionDetails.transactionDetails.map(t => ([t.id,t.user_id,t.amount,t.transaction_type,t.status,t.created]))
  return (
    <div>
      <GridContainer>

       <GridItem xs={12} sm={12} md={12}>
       <Card>
         <CardHeader  color="primary">
           <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
           <h4 className={classes.cardTitleWhite}>Transactions History</h4>
         
          <Button style={{color:"white", fontSize:"14px"  , padding: "12px",}}  className={classes.button} onClick={() => { setShowPopupOne(true)}}>Create Transaction</Button>
           </div>
         </CardHeader>
         <CardBody>
           {transactionDetails.transactionDetails.length!=0?<>    <Table
             tableHeaderColor="primary"
             tableHead={["id","UserId","Amount","Transaction Type", "Status", "created"]}
             tableData={getTableData()}
             setShowPopup={setShowPopup}
             setPopupData={setPopupData}
           /></>:<h4>No Transaction Found </h4>}
       
         </CardBody>
       </Card>
       <TransactionPopup1 showPopup={showPopup1}  userId={id} setShowPopup={setShowPopupOne}/>
       <TransactionPopup showPopup={showPopup} popUpData={popUpData} setShowPopup={setShowPopup}/>
 
     </GridItem>
      </GridContainer>
    </div>
  );
}
