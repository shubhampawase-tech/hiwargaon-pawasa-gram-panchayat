import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
    plugins: [react(), VitePWA({ registerType: 'autoUpdate', manifest: { name: 'Gram Panchayat Hiwargaon Pawasa', short_name: 'GP Hiwargaon', start_url: './', display: 'standalone', background_color: '#f8fafc', theme_color: '#166534', icons: [] } })],
    base: './'
});
