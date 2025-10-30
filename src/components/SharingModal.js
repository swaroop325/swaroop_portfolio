import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QRCodeGenerator from './QRCodeGenerator';
import '../assets/css/SharingModal.css';

const SharingModal = ({ isOpen, onClose, contactData }) => {
  const [qrType, setQrType] = useState('vcard');
  const [shareStatus, setShareStatus] = useState('');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Prevent scrolling on body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Generate vCard for sharing
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

  // Handle Web Share API based on selected type
  const handleWebShare = async () => {
    let shareData = {};
    let clipboardText = '';

    switch (qrType) {
      case 'vcard':
        shareData = {
          title: `${contactData.name} - Contact Card`,
          text: generateVCard(),
          url: `https://${contactData.website}`
        };
        clipboardText = generateVCard();
        break;

      case 'url':
        shareData = {
          title: `${contactData.name}'s Website`,
          text: `Check out ${contactData.name}'s website`,
          url: `https://${contactData.website}`
        };
        clipboardText = `https://${contactData.website}`;
        break;

      case 'linkedin':
        shareData = {
          title: `${contactData.name} on LinkedIn`,
          text: `Connect with ${contactData.name} on LinkedIn`,
          url: contactData.linkedin
        };
        clipboardText = contactData.linkedin;
        break;

      case 'github':
        shareData = {
          title: `${contactData.name} on GitHub`,
          text: `Check out ${contactData.name}'s GitHub profile`,
          url: `https://github.com/${contactData.github}`
        };
        clipboardText = `https://github.com/${contactData.github}`;
        break;

      default:
        shareData = {
          title: contactData.name,
          text: `Connect with ${contactData.name}`,
          url: `https://${contactData.website}`
        };
        clipboardText = `https://${contactData.website}`;
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
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
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(clipboardText).then(() => {
        setShareStatus('✓ Copied to clipboard!');
        setTimeout(() => setShareStatus(''), 2000);
      }).catch(() => {
        setShareStatus('❌ Failed to copy');
        setTimeout(() => setShareStatus(''), 2000);
      });
    }
  };

  if (!isOpen) return null;

  const qrOptions = [
    { value: 'vcard', label: 'Contact Card', icon: '👤' },
    { value: 'url', label: 'Website', icon: '🌐' },
    { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
    { value: 'github', label: 'GitHub', icon: '💻' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="sharing-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="modal-header">
              <h2>Share Contact</h2>
              <button className="close-btn" onClick={onClose} aria-label="Close">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="modal-content">
              <div className="qr-type-selector">
                {qrOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`qr-type-btn ${qrType === option.value ? 'active' : ''}`}
                    onClick={() => setQrType(option.value)}
                  >
                    <span className="qr-type-icon">{option.icon}</span>
                    <span className="qr-type-label">{option.label}</span>
                  </button>
                ))}
              </div>

              <QRCodeGenerator contactData={contactData} type={qrType} />

              {/* Share Button */}
              <div style={{ marginTop: '2rem' }}>
                <motion.button
                  className="web-share-btn"
                  onClick={handleWebShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
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
                  {qrType === 'vcard' && 'Share Contact Card'}
                  {qrType === 'url' && 'Share Website'}
                  {qrType === 'linkedin' && 'Share LinkedIn'}
                  {qrType === 'github' && 'Share GitHub'}
                </motion.button>

                {shareStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      marginTop: '1rem',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      textAlign: 'center',
                      background: shareStatus.includes('✓')
                        ? 'rgba(0, 255, 136, 0.1)'
                        : 'rgba(255, 68, 68, 0.1)',
                      border: shareStatus.includes('✓')
                        ? '1px solid rgba(0, 255, 136, 0.3)'
                        : '1px solid rgba(255, 68, 68, 0.3)',
                      color: shareStatus.includes('✓') ? '#00ff88' : '#ff4444'
                    }}
                  >
                    {shareStatus}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SharingModal;
