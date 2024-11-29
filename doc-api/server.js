const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const { analyzeDocument } = require("./azureDocumentClient");

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(fileUpload());

app.post("/analyze-document", async (req, res) => {
  if (!req.files || !req.files.document) {
    return res.status(400).send("No document uploaded.");
  }

  const document = req.files.document;
  const filePath = path.join(__dirname, "uploads", document.name);

  const fs = require("fs");
  if (!fs.existsSync(path.join(__dirname, "uploads"))) {
    fs.mkdirSync(path.join(__dirname, "uploads"));
  }

  await document.mv(filePath);

  try {
    const analysisResult = await analyzeDocument(filePath);
    res.status(200).json(analysisResult);
  } catch (error) {
    console.error("Document analysis failed:", error);
    res.status(500).json({ error: "Document analysis failed." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
