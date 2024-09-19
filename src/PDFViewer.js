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
        case 'CAP':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedAppSecPractitioner(CAP).pdf");
            setIsImage(false);
            break;
        case 'chickenME':
            setContentUrl("/PDF/Senior/SP2023-31-Piyanuch-Poster.pdf");
            setIsImage(false);
            break;
        case 'Proposal':
            setContentUrl("/PDF/Senior/SP2023-31-Aj.Piyanuch-PPT.pdf");
            setIsImage(false);
            break;
        case 'DVWA':
            setContentUrl("/PDF/KPMG/DVWA_Lab.pdf");
            setIsImage(false);
            break;
        case 'EZ':
            setContentUrl("/PDF/KPMG/Ez_Shop.pdf");
            setIsImage(false);
            break;
        case 'HTBA_2024':
            setContentUrl("/PDF/Comp/Certificate-Waariss.pdf");
            setIsImage(false);
            break;
        case 'CAPen':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedAppSecPentester(CAPen).pdf");
            setIsImage(false);
            break;
        case 'CNPen':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedNetworkPentester(CNPen).pdf");
            setIsImage(false);
            break;
        case 'HTB_Academy_Student_Transcript':
            setContentUrl("/PDF/HTB/HTB_Academy_Student_Transcript.pdf");
            setIsImage(false);
            break;  
        case 'Def':
            setContentUrl("/PDF/Senior/Defense_SP2023-31-Aj.Piyanuch-PPT.pdf");
            setIsImage(false);
            break;
        case 'KPMG':
            setContentUrl("/PDF/Cert/KPMG_Internship_Certificate.pdf");
            setIsImage(false);
            break;
        case 'CAPenX':
            setContentUrl("/PDF/Cert/CAPenX.pdf");
            setIsImage(false);
            break;
        case 'CMPen-Android':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedMobilePentester(CMPen-Android).pdf");
            setIsImage(false);
            break;
        case 'CBBH':
            setContentUrl("/PDF/Cert/HTB Certified Bug Bounty Hunter.pdf");
            setIsImage(false);
            break;
        case 'GHF':
            setContentUrl("/PDF/Cert/GitHubFoundations.pdf");
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
