function processImage() {
    const fileInput = document.getElementById('imageUpload');
    const resultDiv = document.getElementById('result');
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        resultDiv.innerHTML = `<p>Processing image...</p>`;
        // Simulate processing delay
        setTimeout(() => {
          resultDiv.innerHTML = `
            <p>Image processed successfully!</p>
            <img src="${e.target.result}" alt="Uploaded Image" style="max-width: 100%;">
            <p>Classification: High-grade ore detected.</p>
          `;
        }, 2000);
      };
  
      reader.readAsDataURL(file);
    } else {
      resultDiv.innerHTML = `<p>Please upload an image first.</p>`;
    }
  }// Array of mineral image paths