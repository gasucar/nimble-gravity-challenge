export const BASE_URL = import.meta.env.VITE_API_URL;

if(!BASE_URL) {
    console.warn("VITE_API_URL is not defined. API calls may fall.");
}