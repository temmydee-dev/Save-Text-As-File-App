// edit documentation below file!


# 🗂 Multi-Format File Generator

A simple and powerful web-based file generator that allows users to write content in a textarea and export it into multiple file formats.

Built using vanilla JavaScript and browser-based libraries.

---

## 🚀 Features

- Export text as:
  - TXT (.txt)
  - HTML (.html)
  - CSV (.csv)
  - PDF (.pdf)
  - Excel (.xlsx)
  - ZIP (.zip)

- Dynamic file name support
- Automatic file extension handling
- Clean and simple UI
- Fully client-side (no backend required)

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- [jsPDF](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)
- [SheetJS (xlsx)](https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js)
- [JSZip](https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js)

---

## 📂 How It Works

### 1️⃣ User Inputs Content
The user types content into a textarea.

### 2️⃣ Select File Format
The user selects a file format from the dropdown menu.

### 3️⃣ Click Save
Depending on the selected format:

- Text-based formats (TXT, HTML, CSV) use `Blob`
- PDF uses `jsPDF`
- Excel uses `SheetJS`
- ZIP uses `JSZip`

The file is generated and downloaded automatically.

---

## 🧠 Supported Formats Explained

| Format | Method Used | Notes |
|--------|------------|-------|
| `.txt` | Blob | Plain text file |
| `.html` | Blob | Opens in browser |
| `.csv` | Blob | Comma-separated values |
| `.pdf` | jsPDF | Structured PDF document |
| `.xlsx` | SheetJS | Real Excel workbook |
| `.zip` | JSZip | Compressed archive |

---

## ⚠️ Important Notes

- HTML files require a browser as default program to open properly.
- Excel generation expects comma-separated values in the textarea.
- ZIP files currently contain a single text file inside the archive.

---

## 💡 Example HTML Content

To generate a proper HTML file, your textarea can contain:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

---

## 📦 Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Open `index.html` in your browser.

No additional setup required.

---

## 🎯 Future Improvements

- Add DOCX support
- Add multiple file support inside ZIP
- Add formatting controls
- Add preview mode
- Add drag-and-drop file input

---

## 📄 License

This project is open-source and available for learning and personal use.

---

## 👨‍💻 Author

Built with JavaScript to explore file generation and MIME type handling in the browser.