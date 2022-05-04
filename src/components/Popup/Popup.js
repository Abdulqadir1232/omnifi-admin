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
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux'
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
  inputFields: {
    webkitAppearance: "none",
    boxSizing: "border-box",
    size: "small",
    borderRadius: "5px",
  },

  circularButton: {
    padding: "10px 40px",
    background: "#0D0D2B",
    borderRadius: "50px",
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    color: "#ffffff",
  },
  greyText: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "left",
    color: "black",
  }
};
const useStyles = makeStyles(styles);
export default function TransactionPopup({ showPopup, popUpData, setShowPopup }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formData, setFormData] = React.useState({})
  React.useEffect(() => {


    setFormData({ transactionId: popUpData[0], userId: popUpData[1], balance: popUpData[2], type: popUpData[3], status: "accept", created: popUpData[5] })

  }, [popUpData])




  function submitForm() {
    
    dispatch({ type: "UPDATE_TRANSACTION", values: formData })
  }


  return (
    <>
      <Dialog onClose={() => { setShowPopup(false) }} open={showPopup}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} style={{ maxWidth: '100%', flex: 1 }}>
            <Card style={{ boxShadow: "none" }}>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Amount </h4>

              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <h4 className={classes.greyText}>UserId</h4>
                    <TextField
                      className={classes.inputFields}
                      margin="small"
                      size="small"
                      value={formData.userId}
                      type={"text"}
                      disabled
                      fullWidth
                    />

                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <h4 className={classes.greyText}>Transaction Type</h4>
                    <TextField
                      className={classes.inputFields}
                      margin="small"
                      size="small"
                      value={formData.type}
                      type={"text"}
                      disabled
                      fullWidth
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <h4 className={classes.greyText}>Amount</h4>
                    <TextField
                      className={classes.inputFields}
                      margin="small"
                      size="small"

                      onChange={(e) => { setFormData({ ...formData, ["balance"]: e.target.value }) }}
                      value={formData.balance}
                      type={"number"}

                      fullWidth
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <h4 className={classes.greyText}>Created At</h4>
                    <TextField
                      className={classes.inputFields}
                      margin="20px"
                      size="small"
                      value={new Date(formData.created).toLocaleString()}
                      type={"text"}
                      disabled
                      fullWidth
                    />
                  </GridItem>

                  <GridItem xs={12} sm={3} md={5}>
                    <h4 className={classes.greyText}>Status</h4>
                    <Select fullWidth
                      value={formData.status}

                      onChange={(e) => { setFormData({ ...formData, ["status"]: e.target.value }) }}
                    >
                      <MenuItem value={"accept"}>accept</MenuItem>
                      <MenuItem value={"reject"}>reject</MenuItem>

                    </Select>

                  </GridItem>

                </GridContainer>

              </CardBody>
              <CardFooter style={{ justifyContent: "flex-end" }}>
                <Button style={{ backgroundColor: "#ab47bc", padding: "5px 20px", color: "white", borderRadius: "25px", border: "2px solid #ab47bc", marginRight: "8px" }} onClick={() => { submitForm() }}>Submit</Button>
                <Button style={{ backgroundColor: "white", padding: "5px 20px", color: "#ab47bc", border: "1px solid #ab47bc", borderRadius: "25px" }} onClick={() => { setShowPopup(false) }}>Cancel</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </Dialog>
    </>
  )
}
