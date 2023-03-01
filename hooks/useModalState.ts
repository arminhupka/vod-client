import { useState } from "react";

const useModalState = (open = false) => {
  const [isOpen, setIsOpen] = useState(open);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle,
  };
};

export default useModalState;
