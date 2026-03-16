import { motion } from "motion/react";
import { Link } from "react-router";
import { Code, Zap, ShieldCheck, Search, ArrowRight, CheckCircle2, Terminal, Layers, Globe, Workflow } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const services = [
  {
    id: "software",
    title: "Phát triển phần mềm & chuyển đổi số",
    subtitle: "Phát triển phần mềm theo yêu cầu",
    desc: "Chúng tôi xây mới hoặc nâng cấp hệ thống phần mềm phục vụ nghiệp vụ doanh nghiệp, ưu tiên tính ổn định, khả năng mở rộng và bảo mật. Phù hợp với các dự án cần xử lý nghiệp vụ phức tạp hoặc hệ thống tải cao.",
    bullets: [
      "Web/app, portal, dashboard vận hành",
      "Nâng cấp/tối ưu hệ thống hiện hữu",
      "Tích hợp API, đồng bộ dữ liệu"
    ],
    icon: Code,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "telecom",
    title: "Tích hợp hệ thống & viễn thông",
    subtitle: "Tích hợp hệ thống viễn thông",
    desc: "Minh Châu có năng lực tích hợp hệ thống viễn thông theo yêu cầu dự án, bao gồm các nền tảng và kết nối như IP/SS7/HLR/IN. Chúng tôi tập trung vào tính ổn định, liên thông dữ liệu và khả năng vận hành bền vững.",
    bullets: [
      "Liên thông hệ thống, tích hợp nền tảng",
      "Thiết kế luồng dữ liệu & kiểm soát rủi ro",
      "Hỗ trợ vận hành sau triển khai"
    ],
    icon: Zap,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: "sla",
    title: "Vận hành – bảo trì – SLA",
    subtitle: "Vận hành theo SLA",
    desc: "Sau khi go-live, tính ổn định quyết định hiệu quả dự án. Minh Châu cung cấp dịch vụ vận hành–bảo trì theo SLA, hỗ trợ xử lý sự cố, bảo trì định kỳ và đề xuất cải tiến vận hành.",
    bullets: [
      "Tiếp nhận & phân loại sự cố theo mức độ",
      "Bảo trì định kỳ, tối ưu hiệu năng",
      "Báo cáo vận hành & khuyến nghị cải tiến"
    ],
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    color: "from-emerald-400 to-teal-600"
  },
  {
    id: "qa",
    title: "Kiểm thử QA",
    subtitle: "Kiểm thử & đảm bảo chất lượng",
    desc: "Minh Châu triển khai hoạt động kiểm thử từ phân tích yêu cầu đến xây dựng test plan, test case và báo cáo chất lượng, hỗ trợ nghiệm thu và bàn giao tài liệu theo tiêu chuẩn dự án.",
    bullets: [
      "Test chức năng, hồi quy (tuỳ dự án)",
      "Báo cáo lỗi & theo dõi khắc phục",
      "Tài liệu kiểm thử phục vụ nghiệm thu"
    ],
    icon: Search,
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    color: "from-purple-500 to-indigo-600"
  }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-40 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Dịch vụ của <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Minh Châu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Minh Châu cung cấp dịch vụ theo mô-đun, giúp khách hàng lựa chọn đúng phương án theo mục tiêu dự án. Mỗi dịch vụ đều hướng tới khả năng vận hành thực tế, tiêu chí nghiệm thu rõ ràng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-32">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`flex flex-col gap-8 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-cyan-400 uppercase tracking-wider">{service.title}</h2>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">{service.subtitle}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-4 items-center p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                        <span className="text-slate-200 font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/contact" className="px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all inline-flex items-center gap-2">
                      Nhận tư vấn giải pháp <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className={`relative ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-slate-800 relative z-10">
                    <ImageWithFallback src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>
                  {/* Decorative backdrop */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} opacity-10 blur-3xl rounded-[40px] pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[40px] p-12 md:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden">
             <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
             
             <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
               Chưa chắc chọn dịch vụ nào?
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl">
               Gửi mô tả yêu cầu, Minh Châu sẽ tư vấn mô hình phù hợp (trọn gói / thuê đội / SLA) và đề xuất lộ trình triển khai theo mục tiêu thực tế.
             </p>
             <Link to="/contact" className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 transition-all hover:scale-105 inline-flex items-center gap-2">
               Gửi yêu cầu tư vấn <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
