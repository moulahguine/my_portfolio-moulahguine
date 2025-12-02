"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useForm } from "@formspree/react";

export const useFormLogic = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formResponse, setFormResponse] = useState({ type: "", message: "" });
  const [formKey, setFormKey] = useState(0);

  // Formspree integration
  const [state, handleSubmit, reset] = useForm("myzdnqpd");

  // Refs to avoid dependency issues in useEffect
  const resetRef = useRef();
  const clearFormRef = useRef();

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const form = e.target;
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    if (nameInput) nameInput.value = formData.name;
    if (emailInput) emailInput.value = formData.email;
    if (messageInput) messageInput.value = formData.message;

    await handleSubmit(e);
  };

  // Reset form
  const clearForm = useCallback(() => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }, []);

  // Update refs immediately
  resetRef.current = reset;
  clearFormRef.current = clearForm;

  // Handle form success/error responses
  useEffect(() => {
    if (state.succeeded) {
      if (clearFormRef.current) clearFormRef.current();
      setFormResponse({
        type: "success",
        message: "Thank you! I'll reply soon.",
      });

      const timer = setTimeout(() => {
        setFormResponse({ type: "", message: "" });
        if (resetRef.current) resetRef.current(); // Reset Formspree for new submissions
        setFormKey((prev) => prev + 1); // optional, forces form re-render
      }, 2000);

      return () => clearTimeout(timer);
    }

    if (state.errors && state.errors.length > 0) {
      setFormResponse({
        type: "error",
        message: "Something went wrong, please try again.",
      });
    }
  }, [state.succeeded, state.errors]);

  return {
    // Form data and state
    formData,
    errors,
    formResponse,
    state,
    formKey,

    // Functions
    handleInputChange,
    onSubmit,
    clearForm,
  };
};
