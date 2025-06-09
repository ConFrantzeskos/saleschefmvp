
/// <reference types="vite/client" />

declare global {
  interface Window {
    __criticalError?: typeof console.error;
  }
}
