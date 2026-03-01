const textarea = document.querySelector("textarea"),
    fileNameInput = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".save-as select"),
    saveBtn = document.querySelector(".save-btn");


selectMenu.addEventListener("change", () => {
    const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", async () => {
    const fileType = selectMenu.value;
    const fileName = fileNameInput.value || "documents";

    // PDF
    if (fileType === "application/pdf") {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(textarea.value, 10, 10);
        doc.save(`${fileName}.pdf`);
        return;
    }

    // Excel (.xlsx)
    if (fileType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        const wb = XLSX.utils.book_new();

        // Convert textarea text into rows
        const rows = textarea.value.split("\n").map(row => row.split(","));
        const ws = XLSX.utils.aoa_to_sheet(rows);

        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, `${fileName}.xlsx`);
        return;
    }

    // ZIP
    if (fileType === "application/zip") {
        const zip = new JSZip();

        // add a file inside the zip
        zip.file("file.txt", textarea.value);

        const content = await zip.generateAsync({ type: "blob" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = `${fileName}.zip`;
        link.click();
        return;
    }

    // PPT
    if (fileType === "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
        let pptx = new PptxGenJS();
        let slide = pptx.addSlide();

        slide.addText(textarea.value, {
            x: 1,
            y: 1,
            w: 8,
            h: 4,
            fontSize: 18
        });

        pptx.writeFile({ fileName: `${fileName}.pptx` });
        return;
    }

    const blob = new Blob([textarea.value], { type: fileType });
    const fileUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    const extensionMap = {
        "text/html": "html"
    }
    const extension = extensionMap[fileType] || "txt";
    link.download = `${fileName}.${extension}`;
    link.href = fileUrl;
    link.click();
});




