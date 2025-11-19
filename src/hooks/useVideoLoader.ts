/**
 * useVideoLoader Hook
 * Manages video loading state and progress
 */
import { useState, useRef, useCallback } from "react";

interface VideoLoaderState {
  isLoading: boolean;
  progress: number;
  isReady: boolean;
  error: string | null;
}

export const useVideoLoader = () => {
  const [state, setState] = useState<VideoLoaderState>({
    isLoading: true,
    progress: 0,
    isReady: false,
    error: null,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlay = useCallback(() => {
    setState({
      isLoading: false,
      progress: 100,
      isReady: true,
      error: null,
    });
  }, []);

  const handleProgress = useCallback(() => {
    if (videoRef.current) {
      const buffered = videoRef.current.buffered;
      const duration = videoRef.current.duration;

      if (duration > 0 && buffered.length > 0) {
        const loadedTime = buffered.end(buffered.length - 1);
        const progress = (loadedTime / duration) * 100;
        setState((prev) => ({
          ...prev,
          progress: Math.min(progress, 95), // Cap at 95% until canplay fires
        }));
      }
    }
  }, []);

  const handleError = useCallback(() => {
    setState({
      isLoading: false,
      progress: 0,
      isReady: false,
      error: "Error cargando el video",
    });
  }, []);

  return {
    videoRef,
    state,
    handlers: {
      onCanPlay: handleCanPlay,
      onProgress: handleProgress,
      onError: handleError,
    },
  };
};
