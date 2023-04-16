import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/image-upload.component";

function App() {
  return (
    <div className="container">
      <h3>Smart Exam IDs</h3>
      <h4>Upload the Student Photo to IPFS</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;
