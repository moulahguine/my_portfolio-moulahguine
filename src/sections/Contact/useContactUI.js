"use client";

import { useState, useCallback } from "react";

export const useContactUI = () => {
  // UI state
  const [copyFeedback, setCopyFeedback] = useState({
    email: false,
    phone: false,
  });
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [showFormInModal, setShowFormInModal] = useState(false);

  // Clipboard copy function
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopyFeedback((prev) => ({ ...prev, [type]: false }));
      }, 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Email modal actions
  const handleCopyEmail = () => {
    copyToClipboard("mohamedoulahguine@gmail.com", "email");
    setIsEmailModalOpen(false);
  };

  const handleOpenForm = () => setShowFormInModal(true);

  const handleCloseEmailModal = useCallback(() => {
    setIsEmailModalOpen(false);
    setShowFormInModal(false);
  }, []);

  return {
    // UI state
    copyFeedback,
    isEmailModalOpen,
    showFormInModal,

    // Functions
    copyToClipboard,
    handleCopyEmail,
    handleOpenForm,
    handleCloseEmailModal,
    setIsEmailModalOpen,
  };
};
