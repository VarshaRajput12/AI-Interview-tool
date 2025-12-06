// Text-to-Speech Hook
import { useRef, useState } from 'react';

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef(window.speechSynthesis);
//   const utteranceQueueRef = useRef([]);

  const speak = (text, options = {}) => {
    return new Promise((resolve) => {
      if (!synthRef.current) {
        console.error('Speech synthesis not supported');
        resolve();
        return;
      }

      // Skip if text is empty
      if (!text || text.trim().length === 0) {
        resolve();
        return;
      }

      // Cancel any ongoing speech
      synthRef.current.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = options.rate || 1.0;
      utterance.pitch = options.pitch || 1.0;
      utterance.volume = options.volume || 1.0;
      utterance.lang = options.lang || 'en-US';

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        resolve();
      };

      utterance.onerror = (event) => {
        // Only log non-critical errors
        if (event.error !== 'interrupted' && event.error !== 'canceled') {
          console.warn('Speech synthesis error:', event.error);
        }
        setIsSpeaking(false);
        resolve();
      };

      // Small delay to ensure browser allows speech
      setTimeout(() => {
        try {
          synthRef.current.speak(utterance);
        } catch (error) {
          console.error('Failed to speak:', error);
          setIsSpeaking(false);
          resolve();
        }
      }, 100);
    });
  };

  const speakFiller = async (text) => {
    // Quick filler phrases with slightly faster rate
    return speak(text, { rate: 1.1, volume: 0.8 });
  };

  const speakQuestion = async (text) => {
    // Clear, normal-paced questions
    return speak(text, { rate: 0.95, volume: 1.0 });
  };

  const cancel = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  return {
    speak,
    speakFiller,
    speakQuestion,
    cancel,
    isSpeaking,
    isSupported: !!(window.speechSynthesis)
  };
};
