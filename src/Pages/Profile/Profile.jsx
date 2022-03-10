import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.scss";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loadProfile();
  }, []);
  const loadProfile = async () => {
    const res = await axios.get("http://localhost:3003/profile");
    setProfile(res.data);
  };
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Name : {profile.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Email : {profile.email}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Phone : {profile.phone}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Website : {profile.website}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to={"/editprofile"}>Update Profile</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Profile;
