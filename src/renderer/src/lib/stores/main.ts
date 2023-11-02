import { Writable, writable } from 'svelte/store';

export const storeItem: Writable<string> = writable('Electron Vite, Svelte & Tailwind');