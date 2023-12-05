import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PDFViewer = () => {
  const { pdfId } = useParams();
  const [contentUrl, setContentUrl] = useState('');
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    switch(pdfId) {
        case '1':
            setContentUrl("/PDF/Japan/Ritsumeikan University_6388014_Waris_Damkham.pdf");
            setIsImage(false);
            break;
        case '2':
            setContentUrl("/PDF/BCC/Waris Damkham Portfoilo.pdf");
            setIsImage(false);
            break;
        case '3':
            setContentUrl("/PDF/Taiwan/2. Waris Damkham.pdf");
            setIsImage(false);
            break;
        case '4':
            setContentUrl("/PDF/Taiwan/1570835140.pdf");
            setIsImage(false);
            break;
        case '5':
            setContentUrl("/PDF/Comp/codegoda.pdf");
            setIsImage(false);
            break;
        case '6':
            setContentUrl("/PDF/Comp/Sector -WARIS.pdf");
            setIsImage(false);
            break;
        case '7':
            setContentUrl("/PDF/Comp/MOO.png");
            setIsImage(true);
            break;
        case '8':
            setContentUrl("/PDF/Cert/Test_Certificate_EN.pdf");
            setIsImage(false);
            break;
        case '9':
            setContentUrl("/PDF/Cert/Blue Team Junior Analyst Pathway Bundle-btja.pdf");
            setIsImage(false);
            break;
        case '10':
            setContentUrl("/PDF/Cert/download.pdf");
            setIsImage(false);
            break;
        case '11':
            setContentUrl("/PDF/Cert/641626a5fb58de7370b788bc.pdf");
            setIsImage(false);
            break;
        case '12':
            setContentUrl("/PDF/Cert/WarisDamkham-NDG Linux Unhatc-certificate.pdf");
            setIsImage(false);
            break;
        default:
            setContentUrl('');
            setIsImage(false);
    }
  }, [pdfId]);

  return (
    <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {contentUrl && !isImage ? (
        <iframe
          src={contentUrl}
          style={{ width: '100%', height: '100%', border: "none" }}
          title="PDF"
        />
      ) : contentUrl && isImage ? (
        <img
          src={contentUrl}
          alt="Content"
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
        />
      ) : (
        <p>No content found.</p>
      )}
    </div>
  );
};

export default PDFViewer;
