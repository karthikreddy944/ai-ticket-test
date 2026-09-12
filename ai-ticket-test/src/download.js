function downloadFile(file) {
    console.log("Starting download...");

    const path = file.path;
    console.log("Downloading from:", path);

    return fetch(path)
        .then(response => response.blob())
        .then(blob => {
            console.log("Download completed");
            return blob;
        });
}

module.exports = { downloadFile };
