"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Circle, Music } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      
      {/* --- AUDIO PLAYER --- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-8"
      >
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
          <Music className="w-8 h-8 text-slate-600 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 mb-2">
              Tối ưu hiệu năng Microservices với gRPC
            </p>
            <audio
              src="/audio/introduction_to_gRPC.m4a"
              className="w-full h-9"
              controls
              preload="metadata"
            />
          </div>
        </div>
      </motion.div>

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
            <p className="text-xs text-slate-600 mb-2 font-semibold uppercase tracking-wide">
              Kết nối HTTP/1.1 (request-response tuần tự)
            </p>

            <div className="flex items-center justify-between mb-6">
              {/* Client */}
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-slate-700 rounded-full flex items-center justify-center text-slate-700 font-medium text-xs mb-2 bg-white shadow-sm">
                  Client
                </div>
                <p className="text-xs text-slate-500">Trình duyệt</p>
              </div>

              {/* Connection timeline */}
              <div className="flex-1 mx-4">
                {/* Request lane */}
                <div className="relative h-10 mb-4">
                  <div className="absolute inset-y-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-slate-200 rounded" />
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-2 bg-red-500 rounded-full shadow-sm"
                    animate={{ left: ['0%', '80%'] }}
                    transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[11px] text-slate-500 font-semibold whitespace-nowrap">
                    Request: <span className="text-red-600">GET /api/data</span>
                  </div>
                </div>

                {/* Response lane */}
                <div className="relative h-10 mt-4">
                  <div className="absolute inset-y-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-slate-200 rounded" />
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-2 bg-emerald-500 rounded-full shadow-sm"
                    animate={{ left: ['80%', '0%'] }}
                    transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[11px] text-slate-500 font-semibold whitespace-nowrap">
                    Response: <span className="text-emerald-600">JSON payload</span>
                  </div>
                </div>

                {/* Timeline labels */}
                <div className="mt-6 flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>Bắt đầu request</span>
                  <span>Đợi server xử lý</span>
                  <span>Nhận response</span>
                </div>
              </div>

              {/* Server */}
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-slate-700 rounded-full flex items-center justify-center text-slate-700 font-medium text-xs mb-2 bg-white shadow-sm">
                  Server
                </div>
                <p className="text-xs text-slate-500">API Backend</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] mt-2">
              <div className="bg-white border border-slate-200 rounded px-3 py-2">
                <p className="font-semibold text-slate-700 mb-1">1 request/lần</p>
                <p className="text-slate-500">Không gửi request mới khi vẫn đang chờ response.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded px-3 py-2">
                <p className="font-semibold text-slate-700 mb-1">Head-of-line blocking</p>
                <p className="text-slate-500">1 request chậm có thể kéo chậm cả luồng.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded px-3 py-2">
                <p className="font-semibold text-red-700 mb-1">Độ trễ cao</p>
                <p className="text-red-600">~200-500ms cho mỗi vòng request/response.</p>
              </div>
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
            <p className="text-xs text-blue-700 mb-2 font-semibold uppercase tracking-wide">
              Kết nối HTTP/2 đa luồng (multiplexing)
            </p>

            <div className="flex items-center justify-between mb-6">
              {/* Client */}
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mb-2 bg-blue-50 shadow-sm">
                  Client
                </div>
                <p className="text-xs text-blue-600">gRPC Client</p>
              </div>

              {/* Multi-stream connection */}
              <div className="flex-1 mx-4">
                {/* Legend */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Client ➜ Server</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Server ➜ Client</span>
                  </div>
                </div>

                <div className="relative h-28 space-y-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="relative h-8">
                      {/* Stream line */}
                      <div className="absolute inset-y-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-blue-50 rounded" />

                      {/* Client ➜ Server message */}
                      <motion.div
                        className="absolute -translate-y-1/2 -translate-x-1/2 w-6 h-3 rounded-full bg-blue-500 shadow-md"
                        style={{ top: '50%' }}
                        animate={{ left: ['5%', '95%'], opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          delay: i * 0.25,
                          ease: 'linear',
                        }}
                      />

                      {/* Server ➜ Client message */}
                      <motion.div
                        className="absolute -translate-y-1/2 -translate-x-1/2 w-6 h-3 rounded-full bg-emerald-500 shadow-md"
                        style={{ top: '50%' }}
                        animate={{ left: ['95%', '5%'], opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          delay: i * 0.25 + 0.4,
                          ease: 'linear',
                        }}
                      />

                      {/* Stream label */}
                      <div className="absolute -top-4 left-0 text-[10px] text-blue-600 font-semibold">
                        Stream #{i + 1}
                      </div>
                    </div>
                  ))}

                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-blue-700 font-semibold px-2 py-1 bg-blue-100 rounded-full whitespace-nowrap">
                    ⚡ Nhiều stream song song trên 1 kết nối TCP
                  </div>
                </div>
              </div>

              {/* Server */}
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mb-2 bg-blue-50 shadow-sm">
                  Server
                </div>
                <p className="text-xs text-blue-600">gRPC Server</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] mt-2">
              <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2">
                <p className="font-semibold text-blue-800 mb-1">Đa luồng thật sự</p>
                <p className="text-blue-700">Messages của nhiều stream đi đan xen, không chặn nhau.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2">
                <p className="font-semibold text-blue-800 mb-1">Tối ưu 1 kết nối</p>
                <p className="text-blue-700">Chỉ cần 1 TCP connection cho hàng chục/hàng trăm stream.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded px-3 py-2">
                <p className="font-semibold text-emerald-800 mb-1">Độ trễ thấp</p>
                <p className="text-emerald-700">~10-50ms, throughput cao gấp 10x so với HTTP/1.1.</p>
              </div>
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

            {/* Main diagram: Client ⇄ Connection ⇄ Server */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-3 items-center gap-8">
                {/* Client */}
                <div className="flex items-center justify-center">
                  <div className="inline-flex flex-col items-center text-center">
                    <div className="w-28 h-28 border-2 border-blue-500 rounded-full flex items-center justify-center font-semibold text-white bg-slate-900 mb-2 shadow-lg shadow-blue-500/30">
                      Client
                    </div>
                    <div className="text-xs text-blue-300 mb-2">Trình duyệt / Mobile app</div>
                    <ul className="text-[11px] text-slate-300 space-y-1 text-left max-w-[180px]">
                      <li>• Gửi nhiều events: click, input, lệnh...</li>
                      <li>• Không cần chờ server xong mới gửi tiếp</li>
                    </ul>
                  </div>
                </div>

                {/* Connection (HTTP/2 full-duplex) – 2 chiều nằm ngang */}
                <div className="flex flex-col items-center gap-3">
                  <div className="text-[11px] text-slate-300 mb-1 uppercase tracking-wide">
                    1 kết nối HTTP/2, nhiều messages đi qua lại
                  </div>
                  <div className="relative w-full max-w-md">
                    {/* Client ➜ Server (trên) */}
                    <div className="h-10 relative mb-6">
                      <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-slate-600 rounded" />
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={`h-up-${i}`}
                          className="absolute -translate-y-1/2 -translate-x-1/2 flex items-center justify-center text-[10px] font-semibold text-slate-900 bg-blue-400 rounded-full w-6 h-6 shadow-lg shadow-blue-500/40"
                          style={{ top: '50%' }}
                          animate={{ left: ['5%', '95%'] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * (3 / 5),
                            ease: 'easeInOut',
                          }}
                        >
                          ➜
                        </motion.div>
                      ))}
                      <div className="absolute -top-5 left-0 text-[11px] text-blue-200 font-semibold">
                        Client ➜ Server (nhiều request nhỏ, liên tục)
                      </div>
                    </div>

                    {/* Server ➜ Client (dưới) */}
                    <div className="h-10 relative">
                      <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-slate-600 rounded" />
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={`h-down-${i}`}
                          className="absolute -translate-y-1/2 -translate-x-1/2 flex items-center justify-center text-[10px] font-semibold text-slate-900 bg-purple-400 rounded-full w-6 h-6 shadow-lg shadow-purple-500/40 rotate-180"
                          style={{ top: '50%' }}
                          animate={{ left: ['95%', '5%'] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * (3 / 5) + 0.3,
                            ease: 'easeInOut',
                          }}
                        >
                          ➜
                        </motion.div>
                      ))}
                      <div className="absolute -bottom-5 right-0 text-[11px] text-purple-200 font-semibold">
                        Server ➜ Client (stream kết quả trả về liên tục)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Server */}
                <div className="flex items-center justify-center">
                  <div className="inline-flex flex-col items-center text-center">
                    <div className="w-28 h-28 border-2 border-purple-500 rounded-full flex items-center justify-center font-semibold text-white bg-slate-900 mb-2 shadow-lg shadow-purple-500/30">
                      Server
                    </div>
                    <div className="text-xs text-purple-300 mb-2">gRPC Backend</div>
                    <ul className="text-[11px] text-slate-300 space-y-1 text-left max-w-[190px]">
                      <li>• Nhận stream request, xử lý song song</li>
                      <li>• Push kết quả ngay khi sẵn sàng</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom annotation: dòng thời gian giao tiếp */}
              <div className="mt-2 bg-slate-900 px-4 py-3 rounded border border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-semibold">Bước 1:</span>
                    <span>Client mở kết nối và bắt đầu gửi nhiều messages (stream lên).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-semibold">Bước 2:</span>
                    <span>Server trả về stream responses liên tục, không cần đợi client dừng.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-semibold">Bước 3:</span>
                    <span>Hai bên có thể đóng stream độc lập khi hoàn tất.</span>
                  </div>
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
                icon: "⚡", 
                title: "2 Chiều Đầy Đủ",
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
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-2xl mb-3">
                  <span className="text-white">{feature.icon}</span>
                </div>
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