import React, { useEffect, useState } from "react";
import API from "../Api";

function Profile({log}) {
  const [Profile, setProfile] = useState([]);

  useEffect(() => {
    API.get(`users/${log.id}`).then((res) => {
      setProfile(res.data);
    });
  }, []);
  console.log(Profile);
  return (
    <div>Profile</div>
  )
}

export default Profile