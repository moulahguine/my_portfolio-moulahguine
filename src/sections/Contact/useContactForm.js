"use client";

import { useFormLogic } from "./useFormLogic";
import { useContactUI } from "./useContactUI";

export const useContactForm = () => {
  // Get form logic
  const formLogic = useFormLogic();

  // Get UI logic
  const uiLogic = useContactUI();

  return {
    ...formLogic,
    ...uiLogic,
  };
};
