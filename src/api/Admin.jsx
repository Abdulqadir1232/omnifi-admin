import { put } from 'redux-saga/effects';
import { ToastContainer, toast } from 'react-toastify';
const NEW_HOST = "http://localhost:8080";

export function*    getAdmin({ values }) {
    const token = localStorage.getItem('token')
    // const user = localStorage.getItem('user')
    console.log("val")
    const data = yield fetch(`${NEW_HOST}/auth/user`, {
      method: "GET",
      headers: { "Content-Type": "application/json", 'Authorization': 'Bearer' + " " + token },
     
    })
      .then((res) => {
    console.log({res})
        return res.json();
      })
      .catch((error) => {
        throw error;
      });
      // console.log(data,"adada")
    yield put({ type: "GOT_ADMIN", data });
  }