import React from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const handleFileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      // Use axios for the POST request
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Upload success:', response.data);
        // Handle success here (e.g., show a success message)
      })
      .catch((error) => {
        console.error('Upload failed:', error);
        // Handle the error here (e.g., show an error message)
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      // Handle any unexpected errors here
    }
  };

  return (
    <form onSubmit={handleFileSubmit} className="my-4">
        <input type="file" name="file-input" required />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload Image
        </button>
    </form>
  );
};

export default ImageUploader;
