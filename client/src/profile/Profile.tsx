import { useState, useContext, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { UserContext } from "../UserContext";
import UserInfo from "../types/UserInfo";
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';
import Circle from '@mui/icons-material/accountcircle';
import Personface from '@mui/icons-material/face';



export default function Profile() {
  const [user, setUser] = useState<UserInfo | undefined>(undefined);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editIcon, setEditIcon] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newIcon, setNewIcon] = useState();
  const context = useContext(UserContext)!;
  const { userInfo } = context;

  useEffect(() => {
    setUser(userInfo);
    setNewName(userInfo?.name || "");
    setNewEmail(userInfo?.email || "");
  }, [userInfo]);

  const handleNameEdit = () => {
    setEditName(true);
  };

  const handleEmailEdit = () => {
    setEditEmail(true);
  };

  const handleNameSave = async () => {
    try {
      await axios.patch(`api/users/${user?.id}`, { name: newName });
      setEditName(false);
    } catch (error) {
      console.error("Error updating name:", error);
    }
  };

  const handleEmailSave = async () => {
    try {
      await axios.patch(`api/users/${user?.id}`, { email: newEmail });
      setEditEmail(false);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handleCancel = () => {
    setEditName(false);
    setNewName(user?.name || "");
    setEditEmail(false);
    setNewEmail(user?.email || "");
    // setNewIcon(null) 
  };

  return (
    <Card sx={{ maxWidth: 450, margin: 2, padding: 1, marginLeft: 52 ,marginTop:8}}>
      <CardHeader title="Profile" >
        </CardHeader>
         {/* <PersonIcon/>
            <Personface/>
            <Circle/> */}
      <Divider />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {editName ? (
            <TextField
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              label="Name"
              variant="outlined"
            />
          ) : (
            <Typography variant="h5" gutterBottom>
              Name: {user?.name || "N/A"}
            </Typography>
          )}
          {editEmail ? (
            <TextField
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              label="Email"
              variant="outlined"
            />
          ) : (
            <Typography variant="h5" color="text.secondary">
              Email: {user?.email || "N/A"}
            </Typography>
          )}

          <Box>
            {editName ? (
              <>
                <Button onClick={handleNameSave}>Save Name</Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </>
            ) : (
              <Button onClick={handleNameEdit}>Edit Name</Button>
            )}
            {editEmail ? (
              <>
                <Button onClick={handleEmailSave}>Save Email</Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </>
            ) : (
              <Button onClick={handleEmailEdit}>Edit Email</Button>
            )}
            {editEmail ? (
              <>
                <Button onClick={handleEmailSave}>Save Email</Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </>
            ) : (
              <Button onClick={handleEmailEdit}>Edit Email</Button>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
