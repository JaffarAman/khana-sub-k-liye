import React, { useEffect, useState } from "react";
import styles from "./RequestScreen.module.css";
import Header from "../components/Header.jsx";
import { Button, Modal } from "react-bootstrap";
import AdminImg from "../Images/images.jfif";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import swal from "sweetalert";
const RequestScreen = () => {
  const [show, setShow] = useState(false);
  const [requestArr, setrequestArr] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading , setLoading] = useState(true)
  const [ind , setInd] = useState(null)
  const [ref , setref] = useState(false)
   
  useEffect(async () => {
   
    
    const dbRef = collection(db, "requestForm");
    const todoData = await getDocs(dbRef);
    const todo = [];
    todoData.forEach((doc) => {
      // console.log(doc.data() , doc.id )
      todo.push({
        formSerialNum: doc.id,
        name: doc.data().name,
        fatherName: doc.data().fatherName,
        cnicNum: doc.data().cnic,
        dob: doc.data().dob,
        nnoOffamily: doc.data().fmember,
        status: doc.data().status,
        key: doc.id,
      });
    });
    setLoading(false)
    // console.log("todoArr" , todo)
    setrequestArr([...requestArr, ...todo]);
  }, [ref]);

  console.log(requestArr);
  const acceptRequest = async (indeNum)=>{
    const key = requestArr[indeNum].key
    console.log(key)
    ///create db collection with doc id///
    const dbRef = doc(db , "requestForm" , key)
    await updateDoc( dbRef , {
      status : "accept"
    })
    .then(res=>{
      console.log("UPdated Successfull");
      swal("Created", "Request Accepted", "success");
      
    }).catch(err=>console.log(err))
    
}
const rejectRequest = async (indeNum)=>{
    const key = requestArr[indeNum].key
    console.log(key)
    ///create db collection with doc id///
    const dbRef = doc(db , "requestForm" , key)
    await updateDoc( dbRef , {
      status : "rejected"
    })
    .then(res=>{
      console.log("UPdated Successfull");
      swal("Created", "Request Rejected", "success");
    }).catch(err=>console.log(err))
    
}
  return (
    <div className={styles.mainBox}>
      <Header />

      <section className={styles.requestBox}>
        <div className={styles.heading}>
          <h3>Form Request</h3>
        </div>


        {loading ?  
            <section className="text-center">

        <section class="spinner-border text-primary mt-5" role="status">
                <span class="sr-only" >Loading...</span>
              </section> 
            </section>
              :
        <div className={styles.listBox}>
          <table border="1px">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Cnic</th>
              <th>Family Member</th>
              <th>Accept</th>
              <th>Rejected</th>
              <th>View Details</th>
            </tr>
            {requestArr.map((val, ind) => {
                return (
                  val.status == "pending" ?
                <>
                  <tr key={ind}>
                    <td>{val.formSerialNum}</td>
                    <td>{val.name}</td>
                    <td>{val.cnicNum}</td>
                    <td>{val.nnoOffamily}</td>
                    <td>
                      <button onClick={()=>{
                          acceptRequest(ind)
                      }}>ACCEPT</button>
                    </td>
                    <td>
                      <button onClick={()=>{
                          rejectRequest(ind)
                      }}
                      >Rejected</button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setShow(true);
                          setInd(ind)   
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                </>
                : null
              ) 
            })}
          </table>
        </div>
              }

      </section>

      <Modal show={show} dialogClassName={styles.modalBox} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className={`row ${styles.modalRow}`}>
            <div className={`col-lg-4 col-md-6 col-sm-12`}>
              <img src={AdminImg} width="100%" height="200" alt="" />
            </div>
            <div className={`col-lg-8 col-md-6 col-sm-12`}>
              <table border="1px">
                <tr>
                  <td>Serial Num: </td>
                  <td>{requestArr && requestArr[ind]&& requestArr[ind].formSerialNum}</td>
                </tr>
                <tr>
                  <td>Name: </td>
                  <td>{ requestArr && requestArr[ind] && requestArr[ind].name}</td>
                </tr>
                <tr>
                  <td>fatherName: </td>
                  <td>{ requestArr && requestArr[ind] && requestArr[ind].formSerialNum}</td>
                </tr>
                <tr>
                  <td>CNIC number: </td>
                  <td>{ requestArr && requestArr[ind] && requestArr[ind].cnicNum}</td>
                </tr>
                <tr>
                  <td> Date of Birth: </td>
                  <td>{ requestArr && requestArr[ind] && requestArr[ind].dob}</td>
                </tr>
                <tr>
                  <td>family members: </td>
                  <td>{ requestArr && requestArr[ind] && requestArr[ind].nnoOffamily}</td>
                </tr>
                <tr>
                  <td>help category: </td>
                  <td>1 month</td>
                </tr>
                <tr>
                  <td>monthly income: </td>
                  <td>8000</td>
                </tr>
              </table>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Accept
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Rejected
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RequestScreen;
