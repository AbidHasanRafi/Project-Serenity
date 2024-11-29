require("dotenv").config();
const {
  AzureKeyCredential,
  DocumentAnalysisClient,
} = require("@azure/ai-form-recognizer");

const apiKey = process.env.AZURE_DOCUMENT_INTELLIGENCE_API_KEY;
const endpoint = process.env.AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT;

const client = new DocumentAnalysisClient(
  endpoint,
  new AzureKeyCredential(apiKey)
);

async function analyzeDocument(filePath, modelId = "prebuilt-document") {
  const fs = require("fs");
  const readStream = fs.createReadStream(filePath);

  try {
    const poller = await client.beginAnalyzeDocument(modelId, readStream);
    const result = await poller.pollUntilDone();

    if (!result) {
      console.error("Analysis failed.");
      return null;
    }

    console.log("Document analysis result:");
    const pagesContent = [];
    for (const page of result.pages || []) {
      const pageContent = {
        pageNumber: page.pageNumber,
        lines: page.lines.map((line) => line.content),
      };
      pagesContent.push(pageContent);
    }
    return pagesContent;
  } catch (error) {
    console.error("Error analyzing document:", error.message);
    throw error;
  }
}

module.exports = {
  analyzeDocument,
};
