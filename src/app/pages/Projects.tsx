import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Search, Filter, ArrowRight, ExternalLink, ChevronRight, Globe, Layers, Code, Zap, Smartphone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Nâng cấp phần mềm Tổng đài di động SCall",
    client: "VNPT Vĩnh Phúc",
    value: "850.000.000 VNĐ",
    category: "Viễn thông",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    icon: Zap,
    slug: "scall-vnpt",
    description: "Nâng cấp hệ thống lõi tổng đài di động, đảm bảo hiệu năng xử lý cuộc gọi và tích hợp các dịch vụ giá trị gia tăng."
  },
  {
    id: 2,
    title: "Nâng cấp hệ thống phần mềm BHXH",
    client: "ICORP",
    value: "654.215.150 VNĐ",
    category: "Phần mềm",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    icon: Code,
    slug: "bhxh-icorp",
    description: "Xây dựng các phân hệ quản lý hồ sơ bảo hiểm xã hội trực tuyến, đồng bộ dữ liệu tập trung với độ bảo mật cao."
  },
  {
    id: 3,
    title: "Sửa chữa hệ thống tiếp nhận chuyển mạng giữ số online",
    client: "Hợp đồng sửa chữa",
    value: "966.175.041 VNĐ",
    category: "Viễn thông",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
    icon: Zap,
    slug: "mnp-repair",
    description: "Xử lý các lỗi kỹ thuật và tối ưu luồng quy trình chuyển mạng giữ số (MNP) cho nhà mạng."
  },
  {
    id: 4,
    title: "VR 360",
    client: "MobiFone IT Center",
    value: "993.000.000 VNĐ",
    category: "Multimedia/VR",
    img: "https://images.unsplash.com/photo-1592477342258-c4f30d121f45",
    icon: Smartphone,
    slug: "vr-360",
    description: "Phát triển nền tảng tham quan ảo VR 360 độ, mang lại trải nghiệm tương tác số hóa cho người dùng."
  },
  {
    id: 5,
    title: "Phát triển ứng dụng Multimedia",
    client: "Dự án nội dung số",
    value: "720.000.000 VNĐ",
    category: "Multimedia/VR",
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    icon: Globe,
    description: "Xây dựng các giải pháp truyền thông đa phương tiện tích hợp trên nền tảng web và di động."
  },
  {
    id: 6,
    title: "Hệ thống quản trị doanh nghiệp ERP",
    client: "Dự án SME",
    value: "1.200.000.000 VNĐ",
    category: "Phần mềm",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    icon: Code,
    description: "Số hóa quy trình vận hành nội bộ, quản lý kho vận và nhân sự cho doanh nghiệp quy mô vừa."
  }
];

const categories = ["Tất cả", "Phần mềm", "Viễn thông", "Multimedia/VR", "Game"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProjects = projects.filter(p => 
    activeCategory === "Tất cả" || p.category === activeCategory
  );

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-40 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="grid grid-cols-6 grid-rows-6 gap-4">
             {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-cyan-500/20 aspect-square" />
             ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col gap-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Dự án <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">tiêu biểu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Danh mục dự án thể hiện năng lực triển khai thực tế của Minh Châu trong các mảng phần mềm, tích hợp, multimedia và các hạng mục vận hành.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-slate-900">
               <div className="flex flex-wrap justify-center md:justify-start gap-2">
                 {categories.map((cat) => (
                   <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                      activeCategory === cat 
                        ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/40" 
                        : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                    }`}
                   >
                     {cat}
                   </button>
                 ))}
               </div>
               <div className="text-slate-500 text-sm font-medium">
                  Hiển thị <span className="text-white font-bold">{filteredProjects.length}</span> dự án
               </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all shadow-xl hover:shadow-cyan-500/5"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden">
                       <ImageWithFallback src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                       <div className="absolute top-4 left-4">
                         <span className="px-3 py-1 bg-cyan-600 text-white text-[10px] font-bold uppercase rounded-full shadow-lg">
                           {project.category}
                         </span>
                       </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow gap-4">
                       <div className="flex flex-col gap-2">
                         <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{project.client}</p>
                         <h3 className="text-xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                       </div>
                       <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                         {project.description}
                       </p>
                       <div className="mt-auto pt-6 flex justify-between items-center border-t border-slate-800/50">
                          <span className="text-white font-bold text-lg">{project.value}</span>
                          <Link to={`/projects/${project.slug}`} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:bg-cyan-600 transition-colors">
                             <ChevronRight className="w-5 h-5" />
                          </Link>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="p-12 md:p-24 rounded-[40px] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center flex flex-col items-center gap-8 relative overflow-hidden">
             <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
             <h2 className="text-3xl md:text-5xl font-extrabold text-white">Bạn có dự án tương tự?</h2>
             <p className="text-slate-400 text-lg max-w-2xl">
                Chúng tôi sẵn sàng tư vấn giải pháp tối ưu cho bài toán của bạn, cam kết về tiến độ và chất lượng bàn giao.
             </p>
             <Link to="/contact" className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 transition-all hover:scale-105 inline-flex items-center gap-2">
                Nhận tư vấn dự án <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
