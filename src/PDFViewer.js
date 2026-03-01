import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import Navigation from './Navbar';
import Footer from './Footer';

const PDFViewer = () => {
  const { pdfId } = useParams();
  const [contentUrl, setContentUrl] = useState('');
  const [isImage, setIsImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      const isAndroid = /android/i.test(userAgent);
      const isMobileDevice = /Mobi|Android/i.test(userAgent);
      
      setIsMobile(isIOS || isAndroid || isMobileDevice);
    };
    
    checkMobile();
  }, []);

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
        case 'CWES':
            setContentUrl("/PDF/Cert/CWES.pdf");
            setIsImage(false);
            break;
        case 'GHF':
            setContentUrl("/PDF/Cert/GitHubFoundations.pdf");
            setIsImage(false);
            break;
        case 'GOF':
            setContentUrl("/PDF/Cert/GitOpsFoundations.pdf");
            setIsImage(false);
            break;       
        case 'GTI101':
            setContentUrl("/PDF/Cert/Cyber_Threat_Intelligence_101.pdf");
            setIsImage(false);
            break;  
        case 'MCRTA':
            setContentUrl("/PDF/Cert/MCRTA.pdf");
            setIsImage(false);
            break;  
        case 'MLPen':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedAI_MLPentester(C-AI_MLPen).pdf");
            setIsImage(false);
            break;  
        case 'FullHouse':
            setContentUrl("/PDF/Cert/FullHouse.pdf");
            setIsImage(false);
            break;  
        case 'CMPen-IOS':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedMobilePentester(CMPen-iOS).pdf");
            setIsImage(false);
            break;
        case 'CCPenX-AWS':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedCloudPentestingeXpert-AWS(CCPenX-AWS).pdf");
            setIsImage(false);
            break;
        case 'C-APIPen':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedAPIPentester(C-APIPen).pdf");
            setIsImage(false);
            break;
        case 'CPTS':
            setContentUrl("/PDF/Cert/HTB Certified Penetration Testing Specialist.pdf");
            setIsImage(false);
            break;
        case 'HCCDA-Tech':
            setContentUrl("/images/HWENDCTEDA511122.png");
            setIsImage(true);
            break;
        case 'CKBPro':
            setContentUrl("/PDF/Cert/WarisDamkham-CertifiedKioskBreakoutProfessional(CKBPro).pdf");
            setIsImage(false);
            break;
        case 'CCEP':
            setContentUrl("/PDF/Cert/CCEP.pdf");
            setIsImage(false);
            break;
        case 'CCPC':
            setContentUrl("/PDF/Cert/certified_c_certificate.pdf");
            setIsImage(false);
            break;
        default:
            setContentUrl('');
            setIsImage(false);
    }
  }, [pdfId]);

  return (
    <>
      <Navigation />
      <div style={{ 
        width: '100%', 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '20px'
      }}>
        {contentUrl && isImage ? (
          <img
            src={contentUrl}
            alt="Content"
            style={{ maxHeight: '80vh', maxWidth: '100%', objectFit: 'contain' }}
          />
        ) : contentUrl && !isImage && isMobile ? (
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
	            <div style={{ 
	              background: '#f8f9fa', 
	              padding: '40px', 
	              borderRadius: '12px',
	              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
	            }}>
	              <FaFilePdf aria-hidden="true" focusable="false" style={{ fontSize: '4rem', color: '#ff6347', marginBottom: '20px' }} />
	              <h3 style={{ marginBottom: '20px' }}>PDF Document</h3>
              <p style={{ marginBottom: '30px', color: '#666' }}>
                PDF viewing is not supported on mobile browsers. Please download the document to view it.
              </p>
              <a 
                href={contentUrl}
                download
                className="btn btn-primary btn-lg"
                style={{ 
                  background: '#ff6347', 
                  border: 'none',
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  borderRadius: '6px'
                }}
	              >
	                <FaDownload className="me-2" aria-hidden="true" focusable="false" />
	                Download PDF
	              </a>
              <div style={{ marginTop: '20px' }}>
                <a 
                  href={contentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#666', textDecoration: 'underline', fontSize: '0.9rem' }}
                >
                  Or try opening in new tab
                </a>
              </div>
            </div>
          </div>
        ) : contentUrl && !isImage ? (
          <iframe
            src={contentUrl}
            style={{ width: '100%', height: '80vh', border: 'none' }}
            title="PDF"
          />
        ) : (
          <p>No content found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PDFViewer;
