/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TODO_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
