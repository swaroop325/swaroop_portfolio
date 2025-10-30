import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/NFCShareWidget.css';

const NFCShareWidget = ({ contactData }) => {
  const [nfcSupported, setNfcSupported] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareStatus, setShareStatus] = useState('');

  useEffect(() => {
    // Check if Web NFC is supported
    if ('NDEFReader' in window) {
      setNfcSupported(true);
    }
  }, []);

  // Generate vCard for NFC
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

  // Handle NFC write
  const handleNFCWrite = async () => {
    if (!nfcSupported) {
      setShareStatus('NFC not supported on this device');
      return;
    }

    try {
      setIsSharing(true);
      setShareStatus('Hold your device near an NFC tag...');

      // eslint-disable-next-line no-undef
      const ndef = new NDEFReader();
      await ndef.write({
        records: [
          {
            recordType: "text",
            data: generateVCard()
          },
          {
            recordType: "url",
            data: `https://${contactData.website}`
          }
        ]
      });

      setShareStatus('✓ Contact shared successfully!');
      setIsSharing(false);

      setTimeout(() => {
        setShareStatus('');
      }, 3000);

    } catch (error) {
      console.error('NFC Write Error:', error);

      if (error.name === 'NotAllowedError') {
        setShareStatus('❌ Permission denied. Please allow NFC access.');
      } else if (error.name === 'NotSupportedError') {
        setShareStatus('❌ NFC not supported on this device.');
      } else if (error.name === 'NotReadableError') {
        setShareStatus('❌ NFC tag not found or cannot be written.');
      } else {
        setShareStatus('❌ Failed to share. Try again.');
      }

      setIsSharing(false);

      setTimeout(() => {
        setShareStatus('');
      }, 3000);
    }
  };

  // Handle Web Share API (fallback for mobile)
  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: contactData.name,
          text: `Connect with ${contactData.name}`,
          url: `https://${contactData.website}`
        });
        setShareStatus('✓ Shared successfully!');
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Share Error:', error);
          setShareStatus('❌ Failed to share');
        }
      }

      setTimeout(() => {
        setShareStatus('');
      }, 2000);
    }
  };

  return (
    <div className="nfc-share-widget">
      {nfcSupported ? (
        <>
          <motion.button
            className="nfc-share-btn"
            onClick={handleNFCWrite}
            disabled={isSharing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="nfc-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
              <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
              <path d="M12.91 4.1a15.91 15.91 0 0 1 0 15.8" />
              <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
            </svg>
            {isSharing ? 'Hold Near NFC Tag...' : 'Write to NFC Tag'}
          </motion.button>

          {shareStatus && (
            <motion.div
              className={`share-status ${shareStatus.includes('✓') ? 'success' : shareStatus.includes('❌') ? 'error' : 'info'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {shareStatus}
            </motion.div>
          )}
        </>
      ) : (
        <>
          <div className="nfc-not-supported">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
              <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
              <path d="M12.91 4.1a15.91 15.91 0 0 1 0 15.8" />
              <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
            </svg>
            <div className="nfc-not-supported-text">
              <p><strong>NFC not supported</strong></p>
              <p className="nfc-subtitle">Available on Android Chrome only</p>
            </div>
          </div>

          {navigator.share && (
            <motion.button
              className="web-share-btn"
              onClick={handleWebShare}
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
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share Contact
            </motion.button>
          )}

          {shareStatus && (
            <motion.div
              className={`share-status ${shareStatus.includes('✓') ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {shareStatus}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default NFCShareWidget;
