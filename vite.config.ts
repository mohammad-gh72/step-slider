import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Checker from "vite-plugin-checker";
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],
  build: {
    lib: {
      entry: "./src/lib/StepSlide.tsx", // فایل اصلی کامپوننت شما
      name: "StepSlide", // نام کتابخانه شما
      fileName: (format) => `step-slide.${format}.js`, // نحوه نام‌گذاری فایل‌ها
    },
    rollupOptions: {
      // اینجا تنظیمات اضافی می‌توانید اضافه کنید، مثلا اطمینان از اینکه
      // فایل‌های خارجی (مثل React) در پکیج قرار نگیرند
      external: ["react", "react-dom"], // برای جلوگیری از قرار گرفتن react و react-dom در پکیج
      output: {
        globals: {
          react: "React", // تعیین نام متغیرهای جهانی برای React
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
