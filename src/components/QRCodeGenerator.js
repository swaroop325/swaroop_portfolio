import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import '../assets/css/QRCodeGenerator.css';

const QRCodeGenerator = ({ contactData, type = 'vcard' }) => {
  const qrRef = useRef(null);

  // Generate vCard format
  const generateVCard = () => {
    return `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
TEL:${contactData.phone}
EMAIL:${contactData.email}
URL:https://${contactData.website}
URL:https://github.com/${contactData.github}
URL:${contactData.linkedin}
NOTE:Software Engineer | Full Stack Developer
END:VCARD`;
  };

  // Get content based on type
  const getQRContent = () => {
    switch (type) {
      case 'vcard':
        return generateVCard();
      case 'url':
        return `https://${contactData.website}`;
      case 'linkedin':
        return contactData.linkedin;
      case 'github':
        return `https://github.com/${contactData.github}`;
      default:
        return `https://${contactData.website}`;
    }
  };

  // Download QR code as image
  const downloadQRCode = () => {
    const svg = qrRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.download = `${contactData.name.replace(/\s+/g, '_')}_QRCode.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'vcard':
        return 'Contact Card';
      case 'url':
        return 'Portfolio Website';
      case 'linkedin':
        return 'LinkedIn Profile';
      case 'github':
        return 'GitHub Profile';
      default:
        return 'QR Code';
    }
  };

  return (
    <motion.div
      className="qr-code-generator"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="qr-code-header">
        <h3>{getTypeLabel()}</h3>
        <p>Scan to connect</p>
      </div>

      <div className="qr-code-container" ref={qrRef}>
        <QRCodeSVG
          value={getQRContent()}
          size={256}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={true}
        />
      </div>

      <motion.button
        className="download-qr-btn"
        onClick={downloadQRCode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download QR Code
      </motion.button>
    </motion.div>
  );
};

export default QRCodeGenerator;
