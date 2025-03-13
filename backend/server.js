import express from "express";
import puppeteer from "puppeteer";
import { Parser } from "json2csv";
import PDFDocument from "pdfkit";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());

async function scrapeInstagram(hashtag) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const url = `https://www.instagram.com/explore/tags/${hashtag}/`;
  await page.goto(url, { waitUntil: "networkidle2" });

  // Extract posts
  const posts = await page.evaluate(() => {
    const data = [];
    document.querySelectorAll("article img").forEach((img) => {
      data.push({
        image: img.src,
        caption: img.alt || "No caption",
      });
    });
    return data;
  });

  await browser.close();
  return posts;
}

// Search Hashtags
app.get("/search/:hashtag", async (req, res) => {
  try {
    const hashtag = req.params.hashtag;
    const results = await scrapeInstagram(hashtag);
    res.json(results);
  } catch (error) {
    res.status(500).send("Error scraping Instagram");
  }
});

// Download CSV
app.get("/download/csv/:hashtag", async (req, res) => {
  try {
    const hashtag = req.params.hashtag;
    const results = await scrapeInstagram(hashtag);

    const parser = new Parser();
    const csv = parser.parse(results);

    res.header("Content-Type", "text/csv");
    res.attachment(`${hashtag}.csv`);
    res.send(csv);
  } catch (error) {
    res.status(500).send("Error generating CSV");
  }
});

// Download PDF
app.get("/download/pdf/:hashtag", async (req, res) => {
  try {
    const hashtag = req.params.hashtag;
    const results = await scrapeInstagram(hashtag);

    const doc = new PDFDocument();
    const filePath = `${hashtag}.pdf`;
    doc.pipe(fs.createWriteStream(filePath));

    results.forEach((post) => {
      doc.text(`Image: ${post.image}`);
      doc.text(`Caption: ${post.caption}`);
      doc.moveDown();
    });

    doc.end();

    res.download(filePath, (err) => {
      if (err) res.status(500).send("Error generating PDF");
      fs.unlinkSync(filePath);
    });
  } catch (error) {
    res.status(500).send("Error generating PDF");
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
