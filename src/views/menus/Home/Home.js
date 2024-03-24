import { CCol, CRow, CInput, CSelect, CButton } from "@coreui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SuccessError from "../../common/SuccessError";
import {
  emailChk,
  nullChk,
  numberChk,
  validateName,
} from "../../common/CommonValidation";
import Confirmation from "../../common/Confirmation";
import Loading from "../../common/Loading";
import Dropzone from "react-dropzone";

const Home = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [ConfirmationModal, setConfirmationModal] = useState(false);
  const [content, setContent] = useState();
  const [type, setConfirmType] = useState();
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState([]);
  const [userName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [Skill, setSkill] = useState([
    { id: "1", name: "English" },
    { id: "2", name: "Korea" },
    { id: "3", name: "French" },
    { id: "4", name: "Russia" },
    { id: "5", name: "Japan" },
  ]);
  const [Birthday, setBirthday] = useState([
    { id: "1", name: "3/6/2000" },
    { id: "2", name: "3/6/2001" },
    { id: "3", name: "3/6/2002" },
    { id: "4", name: "3/6/2003" },
    { id: "5", name: "3/6/2004" },
  ]);

  const [chooseSkill, setChooseSkill] = useState("");

  const [chooseBirthday, setChooseBirthday] = useState("");

  const BirthdayChange = (e) => {
    setChooseBirthday(e.target.value);
  };

  const SkillChange = (e) => {
    setChooseSkill(e.target.value);
  };

  const userNameChange = (e) => {
    setUserName(e.target.value);
  };
  const phNumberChange = (e) => {
    setPhNumber(e.target.value);
  };
  const AddressChange = (e) => {
    setAddress(e.target.value);
  };
  const EmailChange = (e) => {
    setEmail(e.target.value);
  };
  const LoadingClick = () => {
    setLoading(true);
  };
  const resetClick = () => {
    setConfirmationModal(true);
    setContent("Are you sure want to edit");
    setConfirmType("edit");
  };
  const editOK = () => {
    setUserName("");
    setEmail("");
    setPhNumber("");
    setAddress("");
    setSkill("");
    setBirthday("");
    setConfirmationModal(false);
  };
  const deleteClick = () => {
    setConfirmationModal(true);
    setContent("Are you sure want Delete?");
    setConfirmType("delete");
  };
  const deleteOK = () => {
    alert("Delete");
  };

  const resignClick = () => {
    setConfirmationModal(true);
    setContent("Are you sure want reign?");
    setConfirmType("resign");
  };

  const resignOK = () => {
    alert("resign");
  };

  const updateClick = () => {
    setConfirmationModal(true);
    setContent("Are you sure want Update?");
    setConfirmType("update");
  };
  const updateOK = () => {
    alert("Update");
  };
  const saveClick = () => {
    let errMsg = [];
    if (!nullChk(userName)) {
      errMsg.push("Please fill  username");
    } else if (!validateName(userName)) {
      errMsg.push("Please fill character only in username");
    }
    if (!nullChk(Email)) {
      errMsg.push("Please fill Email");
    } else if (!emailChk(Email)) {
      errMsg.push("Please fill email character in email");
    }
    if (!nullChk(phNumber)) {
      errMsg.push("Please fill Phone Number");
    } else if (!numberChk(phNumber)) {
      errMsg.push("Please fill number only in Phone Number");
    }
    if (!nullChk(Address)) {
      errMsg.push("Please fill Your Address");
    }

    if (!nullChk(chooseBirthday)) {
      errMsg.push("Please fill Your Birthday");
    }
    if (!nullChk(chooseSkill)) {
      errMsg.push("Please fill Your Skill");
    }
    if (errMsg.length <= 0) {
      history.push(`/menus/Result`)
      localStorage.setItem("USERNAME", userName);
      localStorage.setItem("EMAIl", Email);
      localStorage.setItem("ADDRESS", Address);
      localStorage.setItem("BIRTHDAY", chooseBirthday);
      localStorage.setItem("PHNUMBER", phNumber);
      localStorage.setItem("SKILL", chooseSkill);
    } else {
      setError(errMsg);
    }
  };
  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const removeFile = () => {
    setFiles([]);
  };
  return (
    <>
      <h1>Home</h1>
      <h3>
        <b>
          This is <em>Registration Form </em>for you.
        </b>
      </h3>
      <SuccessError success={success} error={error} />
      <CRow>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">Username</CCol>
            <CCol lg="8">
              <CInput type="text" value={userName} onChange={userNameChange} />
            </CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">Email</CCol>
            <CCol lg="8">
              <CInput type="text" value={Email} onChange={EmailChange} />
            </CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">Address</CCol>
            <CCol lg="8">
              <CInput type="text" value={Address} onChange={AddressChange} />
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">Date Of Birth</CCol>
            <CCol lg="8">
              <CSelect value={chooseBirthday} onChange={BirthdayChange}>
                <option value={""}>Select</option>
                {Birthday.map((data, index) => {
                  return (
                    <option key={index} value={data.name}>
                      {data.name}
                    </option>
                  );
                })}
                ;
              </CSelect>
            </CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">Phone Number</CCol>
            <CCol lg="8">
              <CInput type="text" value={phNumber} onChange={phNumberChange} />
              <br></br>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">Skill</CCol>
            <CCol lg="8">
              <CSelect value={chooseSkill} onChange={SkillChange}>
                <option value={""}>Select</option>
                {Skill.map((data, index) => {
                  return (
                    <option key={index} value={data.name}>
                      {data.name}
                    </option>
                  );
                })}
                ;
              </CSelect>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      ;
      <CRow style={{ justifyContent: "center" }}>
        <CButton className="btn btn-success ml-5 " onClick={saveClick}>
          Save
        </CButton>
        <CButton className="btn btn-danger ml-5" onClick={resetClick}>
          Reset
        </CButton>
        <CButton className="btn btn-warning ml-5" onClick={deleteClick}>
          Delete
        </CButton>
        &nbsp;&nbsp;
        <CButton className="btn btn-facebook ml-5" onClick={updateClick}>
          Update
        </CButton>
        &nbsp;&nbsp;
        <CButton className="btn btn-info ml-5" onClick={resignClick}>
          Resign
        </CButton>
        &nbsp;&nbsp;
        <CButton className="btn btn-dark ml-5" onClick={LoadingClick}>
          Loading
        </CButton>
        <Confirmation
          show={ConfirmationModal}
          content={content}
          type={type}
          deleteOK={deleteOK}
          updateOK={updateOK}
          resignOK={resignOK}
          editOK={editOK}
          cancel={() => setConfirmationModal(false)}
          cancelButton="No"
          okButton="Yes"
        />
      </CRow>
      <Loading start={loading} />
      <CRow>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <CInput
                type="text"
                readOnly
                placeholder="Click here to attach file"
              />
            </div>
          )}
        </Dropzone>
        <div style={{ display: "flex", marginTop: "20px" }}>
          {files.map((a) => (
            <>
              <li
                style={{ marginTop: "-14px", marginLeft: "5px" }}
                key={a.name}
              >
                {a.name}
              </li>
              <label
                style={{
                  marginLeft: "20px",
                  color: "red",
                  marginTop: "-14px",
                  cursor: "pointer",
                }}
                onClick={removeFile}
              >
                X
              </label>
            </>
          ))}
        </div>
      </CRow>
    </>
  );
};
export default Home;
