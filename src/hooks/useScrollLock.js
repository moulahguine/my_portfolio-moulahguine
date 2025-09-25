import { useEffect, useRef } from "react";

// Global counter to track how many components have requested scroll lock
let scrollLockCounter = 0;
let originalOverflow = "";

/**
 * Custom hook for managing page scroll lock across multiple components
 * Uses a counter-based system to safely handle multiple overlays/modals
 *
 * @param {boolean} isOpen - Whether the component is open and should lock scroll
 * @returns {void}
 *
 * @example
 * // In any component (modal, overlay, menu, etc.)
 * const [isOpen, setIsOpen] = useState(false);
 * useScrollLock(isOpen);
 */
export const useScrollLock = (isOpen) => {
  const hasLockedRef = useRef(false);

  useEffect(() => {
    if (isOpen && !hasLockedRef.current) {
      // Component is opening - request scroll lock
      scrollLockCounter++;
      hasLockedRef.current = true;

      // Store original overflow value on first lock
      if (scrollLockCounter === 1) {
        originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      }
    } else if (!isOpen && hasLockedRef.current) {
      // Component is closing - release scroll lock
      scrollLockCounter--;
      hasLockedRef.current = false;

      // Restore scroll when no components are locking
      if (scrollLockCounter === 0) {
        document.body.style.overflow = originalOverflow || "unset";
        originalOverflow = "";
      }
    }

    // Cleanup function - ensure scroll is restored if component unmounts
    return () => {
      if (hasLockedRef.current) {
        scrollLockCounter--;
        hasLockedRef.current = false;

        if (scrollLockCounter === 0) {
          document.body.style.overflow = originalOverflow || "unset";
          originalOverflow = "";
        }
      }
    };
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hasLockedRef.current) {
        scrollLockCounter--;
        hasLockedRef.current = false;

        if (scrollLockCounter === 0) {
          document.body.style.overflow = originalOverflow || "unset";
          originalOverflow = "";
        }
      }
    };
  }, []);
};

export default useScrollLock;
