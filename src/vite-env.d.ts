/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: {
    MODE: string;
    BASE_URL: string;
    PROD: boolean;
    DEV: boolean;
    SSR: boolean;
    VITE_BASE_URL: string;
    VITE_ASSET_PATH: string;
    VITE_PUBLIC_PATH: string;
    [key: string]: string | boolean | undefined;
  };
} 