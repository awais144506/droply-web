"tsx"
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { SignupModal } from "@/components/modals/signup-modal";

interface SignupContextType {
  openSignup: () => void;
  closeSignup: () => void;
  isOpen: boolean;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSignup = () => setIsOpen(true);
  const closeSignup = () => setIsOpen(false);

  return (
    <SignupContext.Provider value={{ openSignup, closeSignup, isOpen }}>
      {children}
      <SignupModal isOpen={isOpen} onClose={closeSignup} />
    </SignupContext.Provider>
  );
}

export function useSignup() {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
}