import React from 'react';
import { ProductId } from '../types';
import { CreditSimulator } from './CreditSimulator';
import { X } from 'lucide-react';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: ProductId;
}

export const SimulationModal: React.FC<SimulationModalProps> = ({
  isOpen,
  onClose,
  initialProductId
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-red-600 flex items-center justify-center shadow-xl transition"
        >
          <X className="w-5 h-5" />
        </button>

        <CreditSimulator
          initialProductId={initialProductId}
          onSubmitted={() => {
            // keep open so user sees success feedback
          }}
        />

      </div>
    </div>
  );
};
