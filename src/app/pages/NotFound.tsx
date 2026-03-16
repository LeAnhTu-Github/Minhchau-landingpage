import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-black text-slate-800 animate-pulse select-none">404</h1>
      <div className="absolute flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Không tìm thấy trang</h2>
        <p className="text-slate-400 max-w-md">
          Có vẻ như đường dẫn bạn đang truy cập không tồn tại hoặc đã được di chuyển sang một vị trí khác.
        </p>
        <Link
          to="/"
          className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 transition-all flex items-center gap-2"
        >
          <Home className="w-5 h-5" /> Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}
