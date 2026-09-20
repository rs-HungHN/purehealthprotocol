import { redirect } from "next/navigation";

// Chuyển hướng trực tiếp từ Server-side (Vercel Edge), không cần load React/JS
// Tốc độ phản hồi: < 100ms
export default function GoPage() {
  redirect("https://partners.superpower.com/derek-cole");
}
