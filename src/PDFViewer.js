import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navbar';
import Footer from './Footer';

const PDFViewer = () => {
  const { pdfId } = useParams();
  const [contentUrl, setContentUrl] = useState('');
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    switch(pdfId) {
        case 'Ritsumeikan_University_Poster':
            setContentUrl("/PDF/Japan/Ritsumeikan University_6388014_Waris_Damkham.pdf");
            setIsImage(false);
            break;
        case 'BCC_Portfoilio':
            setContentUrl("/PDF/BCC/Waris Damkham Portfoilo.pdf");
            setIsImage(false);
            break;
        case 'NCU_CERT':
            setContentUrl("/PDF/Taiwan/2. Waris Damkham.pdf");
            setIsImage(false);
            break;
        case 'INCIT_CERT':
            setContentUrl("/PDF/Taiwan/1570835140.pdf");
            setIsImage(false);
            break;
        case 'CODEGODA':
            setContentUrl("/PDF/Comp/codegoda.pdf");
            setIsImage(false);
            break;
        case 'TCTT_2023':
            setContentUrl("/PDF/Comp/Sector -WARIS.pdf");
            setIsImage(false);
            break;
        case 'Huntress_CERT':
            setContentUrl("/PDF/Comp/MOO.png");
            setIsImage(true);
            break;
        case 'ICT_SEC':
            setContentUrl("/PDF/Cert/Test_Certificate_EN.pdf");
            setIsImage(false);
            break;
        case 'Blue-Team':
            setContentUrl("/PDF/Cert/Blue Team Junior Analyst Pathway Bundle-btja.pdf");
            setIsImage(false);
            break;
        case 'GDSC':
            setContentUrl("/PDF/Cert/download.pdf");
            setIsImage(false);
            break;
        case 'FutureSkill_Pen':
            setContentUrl("/PDF/Cert/641626a5fb58de7370b788bc.pdf");
            setIsImage(false);
            break;
        case 'NDG':
            setContentUrl("/PDF/Cert/WarisDamkham-NDG Linux Unhatc-certificate.pdf");
            setIsImage(false);
            break;
        default:
            setContentUrl('');
            setIsImage(false);
    }
  }, [pdfId]);

  return (
    <><Navigation /><div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {contentUrl && !isImage ? (
        <iframe
          src={contentUrl}
          style={{ width: '100%', height: '100%', border: "none" }}
          title="PDF" />
      ) : contentUrl && isImage ? (
        <img
          src={contentUrl}
          alt="Content"
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
      ) : (
        <p>No content found.</p>
      )}
    </div><Footer /></>
  );
};

export default PDFViewer;
