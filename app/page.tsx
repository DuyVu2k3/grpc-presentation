"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Circle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      
      {/* --- HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Chương 9: Streaming Nâng Cao
          </h1>
          <div className="flex items-center gap-3 text-slate-600">
            <span className="font-medium">HTTP/2</span>
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium">gRPC</span>
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium text-blue-600">Giao tiếp Real-time</span>
          </div>
        </div>
      </motion.div>

      {/* --- HTTP/2 FEATURES --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Tại sao dùng HTTP/2?</h2>
        <p className="text-slate-600 mb-8">
          gRPC được xây dựng trên HTTP/2 - giao thức web hiện đại với 3 tính năng vượt trội:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { 
              num: "1", 
              title: "Giao thức nhị phân", 
              desc: "Dữ liệu nhị phân compact, parse nhanh hơn 40% so với text-based HTTP/1.1",
              detail: "Thay vì JSON/XML dạng text, HTTP/2 dùng binary frames - giảm kích thước và tăng tốc độ xử lý"
            },
            { 
              num: "2", 
              title: "Đa luồng (Multiplexing)", 
              desc: "Nhiều request/response song song trên 1 kết nối TCP duy nhất",
              detail: "Không cần mở nhiều connections như HTTP/1.1, tránh head-of-line blocking"
            },
            { 
              num: "3", 
              title: "Nén Header", 
              desc: "HPACK giảm 85% overhead của headers, tiết kiệm bandwidth",
              detail: "Headers lặp lại được nén và tái sử dụng, đặc biệt hiệu quả với nhiều requests"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="border border-slate-200 p-6 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  {item.num}
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-2 font-medium">{item.desc}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-bold">⚡ Kết quả:</span>
            <span className="text-slate-700">Hiệu suất tăng 2-3x so với HTTP/1.1, latency giảm đến 50%</span>
          </div>
        </div>
      </motion.div>

      {/* --- COMPARISON: REST vs STREAMING --- */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">So sánh: REST vs gRPC Streaming</h2>
        <p className="text-slate-600 mb-8">
          Sự khác biệt cơ bản giữa request-response truyền thống và streaming hiện đại
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* REST - OLD WAY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border border-slate-200 p-8 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <Circle className="w-5 h-5 text-red-500" />
            <h3 className="text-xl font-semibold text-slate-900">REST API (Đơn hướng - Chặn)</h3>
          </div>
          
          <p className="text-slate-600 text-sm mb-6">
            Mô hình truyền thống: Client gửi 1 request, đợi response, rồi mới tiếp tục
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="text-red-500 mt-0.5 font-bold">✗</span>
              <div>
                <span className="font-semibold">Request/Response tuần tự</span>
                <p className="text-xs text-slate-500">Phải chờ response trước khi gửi request tiếp theo</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="text-red-500 mt-0.5 font-bold">✗</span>
              <div>
                <span className="font-semibold">Không có server push</span>
                <p className="text-xs text-slate-500">Server không thể chủ động gửi data, client phải polling</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="text-red-500 mt-0.5 font-bold">✗</span>
              <div>
                <span className="font-semibold">Dạng text (JSON/XML)</span>
                <p className="text-xs text-slate-500">Kích thước lớn, parsing chậm</p>
              </div>
            </div>
          </div>

          {/* Animated Diagram */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <p className="text-xs text-slate-600 mb-4 font-semibold">Kết nối HTTP/1.1:</p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-slate-700 rounded-full flex items-center justify-center text-slate-700 font-medium text-xs mb-2">
                  Client
                </div>
                <p className="text-xs text-slate-500">Trình duyệt</p>
              </div>
              <div className="flex-1 mx-4 relative h-24">
                <div className="absolute top-6 w-full h-1 bg-slate-200 rounded"/>
                <motion.div
                  className="absolute top-6 left-0 w-12 h-1 bg-red-500 rounded"
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute top-0 left-0 text-xs text-red-600 font-mono">
                  GET /api/data
                </div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs text-red-500 font-semibold px-2 py-1 bg-red-50 rounded whitespace-nowrap">
                  ⏸ Đang chờ...
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-slate-700 rounded-full flex items-center justify-center text-slate-700 font-medium text-xs mb-2">
                  Server
                </div>
                <p className="text-xs text-slate-500">API Backend</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 px-3 py-2 rounded text-xs text-red-700">
              ⏱ Độ trễ cao: ~200-500ms mỗi request
            </div>
          </div>
        </motion.div>

        {/* gRPC STREAMING - NEW WAY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-2 border-blue-500 bg-blue-50/50 p-8 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-slate-900">gRPC Streaming (Không chặn)</h3>
          </div>
          
          <p className="text-slate-700 text-sm mb-6">
            Mô hình hiện đại: Nhiều messages chạy song song, server có thể push bất cứ lúc nào
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-2 text-slate-700 text-sm">
              <span className="text-blue-500 mt-0.5 font-bold">✓</span>
              <div>
                <span className="font-semibold">Đa luồng (Multiplexed)</span>
                <p className="text-xs text-slate-600">Nhiều requests/responses song song trên 1 connection</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-700 text-sm">
              <span className="text-blue-500 mt-0.5 font-bold">✓</span>
              <div>
                <span className="font-semibold">Server Push tự động</span>
                <p className="text-xs text-slate-600">Server chủ động gửi data real-time khi có update</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-700 text-sm">
              <span className="text-blue-500 mt-0.5 font-bold">✓</span>
              <div>
                <span className="font-semibold">Protobuf nhị phân</span>
                <p className="text-xs text-slate-600">Compact, parse nhanh, giảm 60% bandwidth</p>
              </div>
            </div>
          </div>

          {/* Animated Diagram */}
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <p className="text-xs text-blue-700 mb-4 font-semibold">Kết nối HTTP/2 đa luồng:</p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mb-2">
                  Client
                </div>
                <p className="text-xs text-blue-600">gRPC Client</p>
              </div>
              <div className="flex-1 mx-4 relative h-28">
                <div className="absolute top-2 left-0 text-xs text-blue-600 font-semibold">
                  Luồng 1, 2, 3...
                </div>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="relative" style={{ marginTop: i === 0 ? 20 : 6 }}>
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-blue-500 shadow-lg"
                      style={{ top: i * 10 }}
                      animate={{ 
                        left: ['5%', '95%'],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.3,
                        ease: 'linear'
                      }}
                    />
                  </div>
                ))}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-semibold px-2 py-1 bg-blue-100 rounded whitespace-nowrap">
                  ⚡ Không chặn
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mb-2">
                  Server
                </div>
                <p className="text-xs text-blue-600">gRPC Server</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-300 px-3 py-2 rounded text-xs text-blue-700">
              ⚡ Độ trễ thấp: ~10-50ms, throughput cao gấp 10x
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* --- 4 TYPES OF STREAMING --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-slate-900">
          4 Loại RPC trong gRPC
        </h2>
        <p className="text-slate-600 mb-10">
          gRPC hỗ trợ 4 pattern giao tiếp khác nhau, tùy theo nhu cầu ứng dụng
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              type: "Unary RPC",
              icon: "➜",
              desc: "1 request duy nhất ➜ 1 response duy nhất",
              detail: "Giống REST API truyền thống. Client gửi 1 request, server trả về 1 response.",
              example: "GetUser(userId) ➜ User object",
              useCase: "Lấy thông tin user, login, CRUD đơn giản",
              border: "border-slate-300",
              color: "slate"
            },
            {
              type: "Server Streaming RPC",
              icon: "⇉",
              desc: "1 request ➜ nhiều responses liên tục",
              detail: "Client gửi 1 request, server trả về stream của nhiều messages.",
              example: "ListFiles() ➜ file1, file2, file3...",
              useCase: "Download file lớn, live logs, notifications",
              border: "border-blue-300",
              color: "blue"
            },
            {
              type: "Client Streaming RPC",
              icon: "⇇",
              desc: "Nhiều requests liên tục ➜ 1 response cuối",
              detail: "Client gửi stream của nhiều messages, server trả về 1 response tổng hợp.",
              example: "UploadFile(chunk1, chunk2...) ➜ Success",
              useCase: "Tải file lớn, xem logs realtime, thông báo",
              border: "border-blue-300",
              color: "blue"
            },
            {
              type: "Client Streaming RPC",
              icon: "⇇",
              desc: "Nhiều requests liên tục ➜ 1 response cuối",
              detail: "Client gửi stream của nhiều messages, server trả về 1 response tổng hợp.",
              example: "UploadFile(chunk1, chunk2...) ➜ Success",
              useCase: "Upload file lớn, thu thập dữ liệu hàng loạt",
              border: "border-green-300",
              color: "green"
            },
            {
              type: "Bi-directional Streaming",
              icon: "⇄",
              desc: "Nhiều requests ⇄ nhiều responses (2 chiều)",
              detail: "Cả client và server đều có thể gửi stream messages độc lập, không cần đợi nhau.",
              example: "Chat() ➜ tin nhắn real-time",
              useCase: "Chat trực tuyến, game online, chỉnh sửa cộng tác",
              border: "border-purple-300",
              color: "purple"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className={`border ${item.border} p-6 rounded-lg hover:shadow-lg transition-all`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900">{item.type}</h3>
              </div>
              
              <p className="text-slate-700 text-sm mb-3 font-semibold">{item.desc}</p>
              <p className="text-slate-600 text-xs mb-4 leading-relaxed">{item.detail}</p>
              
              <div className="bg-slate-50 px-3 py-2 rounded border border-slate-200 mb-3">
                <p className="text-xs text-slate-500 mb-1">Ví dụ:</p>
                <code className="text-xs text-slate-700 font-mono">{item.example}</code>
              </div>
              
              <div className={`bg-slate-100 border border-slate-200 px-3 py-2 rounded`}>
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">Use case:</span> {item.useCase}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- BI-DIRECTIONAL STREAMING --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="border-2 border-slate-900 bg-slate-900 p-10 rounded-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3 text-white">Bi-directional Streaming Chi Tiết</h2>
            <p className="text-slate-300 leading-relaxed">
              Pattern mạnh nhất của gRPC: Client và Server đều có thể gửi stream messages độc lập, 
              không cần chờ đợi lẫn nhau. Hoạt động như WebSocket nhưng hiệu quả và type-safe hơn.
            </p>
          </div>

          {/* THE DIAGRAM */}
          <div className="bg-slate-800 p-8 rounded-lg mb-8">
            <p className="text-xs text-slate-400 mb-6 uppercase font-semibold tracking-wide">
              Luồng giao tiếp 2 chiều đầy đủ (Full-Duplex):
            </p>
            <div className="relative flex items-center justify-center mb-6" style={{ height: '220px' }}>
              {/* Client */}
              <div className="z-20 text-center absolute left-0">
                <div className="w-28 h-28 border-2 border-blue-500 rounded-full flex items-center justify-center font-semibold text-white bg-slate-900 mb-2">
                  Client
                </div>
                <div className="text-xs text-blue-300">
                  Trình duyệt
                </div>
              </div>

              {/* Connection Pipe */}
              <div className="absolute" style={{ left: '120px', right: '120px', top: '50%', transform: 'translateY(-50%)' }}>
                <div className="h-28 bg-slate-700 border-2 border-slate-600 rounded-lg flex flex-col justify-center overflow-hidden shadow-lg">
                  {/* Upload Stream */}
                  <div className="w-full h-12 relative border-b-2 border-slate-600 px-4 flex items-center">
                    {[...Array(6)].map((_, i) => (
                      <motion.div 
                        key={`up-${i}`}
                        className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ 
                          x: 500, 
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: i * 0.5,
                          ease: 'linear'
                        }}
                      />
                    ))}
                    <div className="text-xs text-blue-200 font-semibold">
                      Client Stream ➜
                    </div>
                  </div>
                  
                  {/* Download Stream */}
                  <div className="w-full h-12 relative px-4 flex items-center justify-end">
                    {[...Array(6)].map((_, i) => (
                      <motion.div 
                        key={`down-${i}`}
                        className="absolute w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"
                        initial={{ x: 500, opacity: 0 }}
                        animate={{ 
                          x: 10, 
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{ 
                          duration: 3.2, 
                          repeat: Infinity, 
                          delay: i * 0.5,
                          ease: 'linear'
                        }}
                      />
                    ))}
                    <div className="text-xs text-purple-200 font-semibold">
                      ⬅ Server Stream
                    </div>
                  </div>
                </div>
                
                {/* Bottom annotation */}
                <div className="mt-3 bg-slate-900 px-4 py-2 rounded border border-slate-600 text-center">
                  <p className="text-xs text-slate-300">
                    <span className="text-blue-400 font-semibold">Client:</span> Gửi liên tục 
                    <span className="mx-2">•</span>
                    <span className="text-purple-400 font-semibold">Server:</span> Push real-time
                  </p>
                </div>
              </div>

              {/* Server */}
              <div className="z-20 text-center absolute right-0">
                <div className="w-28 h-28 border-2 border-purple-500 rounded-full flex items-center justify-center font-semibold text-white bg-slate-900 mb-2">
                  Server
                </div>
                <div className="text-xs text-purple-300">
                  gRPC Backend
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: "🔄",
                title: "Full Duplex", 
                desc: "2 chiều độc lập hoàn toàn",
                detail: "Client và Server gửi nhận đồng thời, không blocking"
              },
              { 
                icon: "⚡2 Chiều Đầy Đủ", 
                desc: "Độc lập hoàn toàn",
                detail: "Client và Server gửi nhận đồng thời, không blocking"
              },
              { 
                icon: "⚡",
                title: "Độ Trễ Thấp", 
                desc: "Dưới 10ms",
                detail: "Kết nối persistent, không overhead của HTTP handshake"
              },
              { 
                icon: "∞",
                title: "Stream Vô Hạn", 
                desc: "Không giới hạn messages",
                detail: "Stream có thể chạy vô thời hạn cho đến khi đóng connection"
              }
            ].map((feature, i) => (
              <div key={i} className="border border-slate-700 p-5 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="font-bold mb-2 text-white">{feature.title}</h4>
                <p className="text-sm text-slate-300 mb-2">{feature.desc}</p>
                <p className="text-xs text-slate-400">{feature.detail}</p>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="border border-slate-700 p-6 rounded-lg bg-slate-800/50">
            <h3 className="font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-xl">🎯</span> Ứng Dụng Thực Tế
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "💬 Chat Trực Tuyến", desc: "Tin nhắn 2 chiều real-time, hiển thị đang gõ" },
                { name: "🎮 Game Online", desc: "Đồng bộ trạng thái game, hành động người chơi" },
                { name: "📊 Giao Dịch Chứng Khoán", desc: "Cập nhật giá live + đặt lệnh" },
                { name: "🤖 Cảm Biến IoT", desc: "Dữ liệu cảm biến stream + lệnh điều khiển từ xa" },
                { name: "📝 Chỉnh Sửa Cộng Tác", desc: "Chỉnh sửa real-time kiểu Google Docs" },
                { name: "🎥 Video Streaming", desc: "Adaptive bitrate + điều khiển người dùng" }
              ].map((useCase, i) => (
                <div key={i} className="bg-slate-700/50 px-4 py-3 rounded hover:bg-slate-700 transition-colors">
                  <p className="text-sm text-white font-semibold mb-1">{useCase.name}</p>
                  <p className="text-xs text-slate-400">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="text-center py-8 text-slate-400 text-sm border-t border-slate-200">
        <p>Xây dựng với Next.js, Tailwind CSS và Framer Motion</p>
      </div>
    </main>
  );
}