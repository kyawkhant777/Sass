import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInput,
  CRow,
} from "@coreui/react";
import React from "react";
import { useEffect, useState } from "react";
import $ from "jquery";
const [error, setError] = useState([]);
import SuccessError from "../../common/SuccessError";

const LoginReact = () => {
  useEffect(() => {
    $(window).resize(function () {
      setZoomSize(Math.round(window.devicePixelRatio * 100));
    });
  }, []);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [zoomSize, setZoomSize] = useState(
    Math.round(window.devicePixelRatio * 100)
  );
  const userNameChange = (e) => {
    setUserName(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };


  const LoginClick = () =>{
    if (userName == "admin" && password == "12345") {
      history.push(`/menus/Home`);
      localStorage.setItem(`LoginProcess`, "true");
    } else {
      setError(["UserName or Password is Wrong"])
    }
  }

  return (
    <>
      {zoomSize < 150 && (
        <div className="min-vh-100 flex-row align-items-center login-bg">
          <CRow>
            <CCol lg="6"></CCol>
            <CCol lg="6">
              <CRow>
                <CCol lg="2"></CCol>
                <CCol lg="8">
                  <CCard style={{ marginTop: "200px" }}>
                    <CCardHeader className="Ccard-design-start ">
                      <h3 style={{ marginTop: "15px" }}>LoginForm</h3>
                      <CCardBody className="Ccard-design-end">
                      <SuccessError success={success} error={error} />
                        <CRow>
                          <CCol lg="4">
                            {" "}
                            <h5 style={{ marginTop: "5px" }}>Username</h5>
                          </CCol>
                          <CCol lg="8">
                            <CInput
                              className="input-field-blue-background"
                              value={userName}
                              onChange={userNameChange}
                              onKeyDown={keyDownHandler}
                            />
                          </CCol>
                        </CRow>
                        <br></br>
                        <CRow>
                          <CCol lg="4">
                            {" "}
                            <h5 style={{ marginTop: "5px" }}>Password</h5>
                          </CCol>
                          <CCol lg="8">
                            <CInput
                              className="input-field-blue-background"
                              value={password}
                              onChange={passwordChange}
                              onKeyDown={keyDownHandler}
                            />
                          </CCol>
                        </CRow>
                        <br></br>

                        <CRow
                          style={{ justifyContent: "end", marginRight: "3px" }}
                        >
                          <CButton className="btn btn create-btn">
                            Login
                          </CButton>
                        </CRow>
                      </CCardBody>
                    </CCardHeader>
                  </CCard>
                </CCol>
                <CCol lg="2"></CCol>
              </CRow>
            </CCol>
          </CRow>
        </div>
      )}
      ;
      {zoomSize > 149 && (
        <div className="login-bg-mobile">
          <br></br>
          <br></br>
          <h2
            style={{ textAlign: "center", fontWeight: "800", color: "white" }}
          >
            LoginForm
          </h2>
        </div>
      )}
    </>
  );
};

export default LoginReact;
