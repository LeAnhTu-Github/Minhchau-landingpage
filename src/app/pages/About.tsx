import { motion } from "motion/react";
import { Link } from "react-router";
import { Users, Target, Rocket, ShieldCheck, ArrowRight, Download, CheckCircle2 } from "lucide-react";
import FinancialStats from "../components/FinancialStats";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-40 relative overflow-hidden bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-cyan-900/10 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Về <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Minh Châu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Minh Châu hoạt động trong lĩnh vực dịch vụ và giải pháp công nghệ, cung cấp các dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì, kiểm thử và các dịch vụ nội dung số theo nhu cầu.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 transition-all hover:scale-105"
            >
              Liên hệ với chúng tôi
            </Link>
            <button className="px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold rounded-xl flex items-center gap-2 transition-all">
              <Download className="w-5 h-5" /> Tải hồ sơ năng lực
            </button>
          </div>
        </div>
      </section>

      {/* Overview & Vision */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-slate-800 rotate-2">
                <ImageWithFallback src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="Office" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Tầm nhìn & Sứ mệnh</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white">Tư duy triển khai hướng tới vận hành</h3>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Với Minh Châu, chất lượng dự án được thể hiện ở khả năng vận hành bền vững sau go-live. Chúng tôi ưu tiên làm rõ tiêu chí nghiệm thu, kế hoạch kiểm thử và tài liệu bàn giao.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: Target, title: "Mục tiêu", text: "Tập trung vào hiệu quả triển khai thực tế và sự hài lòng của khách hàng." },
                  { icon: Rocket, title: "Sứ mệnh", text: "Đồng hành lâu dài cùng doanh nghiệp trong hành trình chuyển đổi số." },
                  { icon: ShieldCheck, title: "Triết lý", text: "Chuyên nghiệp – Uy tín – Đặt lợi ích khách hàng làm trọng tâm." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/contact" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/40 inline-flex items-center gap-2 transition-all">
                  Trao đổi mục tiêu dự án của bạn <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Capability */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 gap-4">
            <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Đội ngũ chuyên gia</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Năng lực đội ngũ là nền tảng</h3>
            <p className="text-slate-400">
              Minh Châu có quy mô 56 nhân sự, trong đó khối kỹ thuật chiếm tỷ trọng lớn; tỷ lệ nhân sự có trình độ Đại học trở lên đạt 86%.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Quản lý dự án (PM/PO)",
              "Phân tích nghiệp vụ (BA)",
              "Phát triển phần mềm (Dev)",
              "Kiểm thử chất lượng (QA/QC)",
              "Vận hành hệ thống (SysOps)",
              "Hỗ trợ kỹ thuật 24/7"
            ].map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center group hover:bg-slate-800/50 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{role}</h4>
                <p className="text-slate-400 text-sm">Chuyên môn sâu, quy trình phối hợp chuyên nghiệp, đảm bảo tiến độ và chất lượng.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency / Financials */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
            <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Tính minh bạch</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Minh bạch năng lực – vững cơ sở hợp tác</h3>
            <p className="text-slate-400">
              Minh Châu công bố các chỉ tiêu theo năm để minh bạch năng lực tổ chức. Chúng tôi tự tin vào nền tảng tài chính để đảm bảo cam kết lâu dài với khách hàng.
            </p>
          </div>
          
          <FinancialStats />
        </div>
      </section>
    </div>
  );
}
