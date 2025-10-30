import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QRCodeGenerator from './QRCodeGenerator';
import NFCShareWidget from './NFCShareWidget';
import '../assets/css/SharingModal.css';

const SharingModal = ({ isOpen, onClose, contactData }) => {
  const [activeTab, setActiveTab] = useState('qr');
  const [qrType, setQrType] = useState('vcard');

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

            <div className="modal-tabs">
              <button
                className={`tab-btn ${activeTab === 'qr' ? 'active' : ''}`}
                onClick={() => setActiveTab('qr')}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                QR Code
              </button>

              <button
                className={`tab-btn ${activeTab === 'nfc' ? 'active' : ''}`}
                onClick={() => setActiveTab('nfc')}
              >
                <svg
                  width="20"
                  height="20"
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
                NFC Share
              </button>
            </div>

            <div className="modal-content">
              <AnimatePresence mode="wait">
                {activeTab === 'qr' && (
                  <motion.div
                    key="qr"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
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
                  </motion.div>
                )}

                {activeTab === 'nfc' && (
                  <motion.div
                    key="nfc"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="nfc-info">
                      <h3>📱 NFC Contact Sharing</h3>
                      <p>
                        Write your contact information to an NFC tag or share directly with
                        nearby devices.
                      </p>
                      <div className="nfc-requirements">
                        <p><strong>Requirements:</strong></p>
                        <ul>
                          <li>Android device with Chrome browser</li>
                          <li>NFC enabled in device settings</li>
                          <li>Blank NFC tag or NFC-enabled device</li>
                        </ul>
                      </div>
                    </div>

                    <NFCShareWidget contactData={contactData} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SharingModal;
