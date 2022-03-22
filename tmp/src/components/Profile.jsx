import React, { useState, useEffect } from 'react'
import '../css/profile.css'
import { getUserById } from '../Api'

export default function Profile ({log}) {

  const [user, setUser]= useState([])
  useEffect(async ()=> {
    let response = await getUserById(log);
    setUser(response.data);
  }, []);

  const [info, setInfo]= useState({name:`${user.name}`,email:`${user.email}`})
  const [modal, setModal]= useState(false)

  const handleChange = e => {
    setInfo(e.target.value)
  }
  
  return (
    <div className="totalContainer">
      <div className="profileContainer">
        <div className="profileHead">
          <h3>Mon Profile</h3>
          <button className="btn btn-outline-primary m-3" onClick={() => { setModal(!modal); setInfo({name:`${user.name}`,email:`${user.email}`})}}>Change</button>
        </div>
        <div className="profileCompte">
          <div className="profileCompteTitle">
            <h4>Mon Compte</h4>
          </div>
          <div className="profileCompteInfoContainer">
            <div className="profileCompteInfo">
              <div className="avatar">
                <div><p>AB</p></div>
              </div>
              <div className="name">
                <p>{user.name}</p>
                <p>{user.role}</p>
              </div>
              <div className="contact">
                <p>Contact</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={modal ? "modalContainer" : "modalContainerOff"}>
        <div className="modalTitle">
          <h4>Change les infos</h4>
        </div>
        <form className="userUpdateForm" onChange={handleChange}>
          <div>
            <label>Full Name</label>
            <input type="text" value={info.name}></input>
          </div>
          
          <div>
            <label>Email</label>
            <input type="email" value={info.email}></input>
          </div>
          <div>
            <input type="submit" value="enregistrer" className="btn btn-outline-success"></input>
          </div>
        </form>
      </div>

      <div className={modal ? "diaphragm" : "diaphragmOff"} onClick={() => { setModal(!modal); setInfo({name:`${user.name}`,email:`${user.email}`})}}></div>
    </div>
  )
}