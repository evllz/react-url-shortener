import React, { useState } from "react";
import "./styles.css";
import axiosWithAuth from "./axiosWithAuth";
import { Typography, TextField, Button } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AssignmentIcon from "@material-ui/icons/Assignment";

export default function App() {
  const [url, setUrl] = useState({
    long_url: "",
    domain: "bit.ly",
    group_guid: "o_47b15pa5sq",
  });
  const [res, setRes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://api-ssl.bitly.com/v4/shorten", url)
      .then((res) => {
        setRes(res.data.link);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChanges = (e) => {
    e.persist();
    setUrl({ ...url, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <div
        style={{ backgroundColor: "#3f51b5", color: "white", margin: "0px" }}>
        <Typography variant="h2">URL Shortener</Typography>
      </div>
      <div style={{ marginTop: "15%", marginBottom: "19%" }}>
        <div style={{ margin: "15px" }}>
          <TextField
            style={{ hover: "none" }}
            label="URL"
            name="long_url"
            value={url.long_url}
            variant="standard"
            onChange={handleChanges}
          />
        </div>
        <div>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Short me!
          </Button>
        </div>
        <div>
          <Typography
            variant="h6"
            style={{
              margin: "15px",
              border: "black solid 1px",
              padding: "10px",
              width: "40%",
              marginLeft: "30%",
            }}>
            Link: {res}
            <CopyToClipboard text={res}>
              <Button variant="contained" color="primary">
                <AssignmentIcon />
              </Button>
            </CopyToClipboard>
          </Typography>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#3f51b5",
          color: "white",
          margin: "0px",
          height: "50px",
        }}>
        <Typography style={{ paddingTop: "15px" }} variant="subtitle2">
          Powered by Bitly
        </Typography>
      </footer>
    </div>
  );
}
