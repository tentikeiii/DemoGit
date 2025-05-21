"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import ReportNavigation from "@/components/report-navigation"

export default function CitationsClientPage() {
  const citations = [
    {
      id: 1,
      text: "Theo báo cáo của VNNIC (2023), tỷ lệ sử dụng IPv6 tại Việt Nam đã đạt khoảng 45% vào cuối năm 2022, cao hơn mức trung bình toàn cầu.",
      source: "Trung tâm Internet Việt Nam (VNNIC)",
      reference: 1,
      page: 15,
    },
    {
      id: 2,
      text: "Nguyễn & Trần (2022) chỉ ra rằng việc triển khai VNIX đã giúp giảm chi phí băng thông quốc tế cho các ISP Việt Nam khoảng 30-40%.",
      source: "Nguyễn, V. A., & Trần, T. B.",
      reference: 2,
      page: 48,
    },
    {
      id: 3,
      text: "Phạm (2021) đề xuất một lộ trình 5 năm để hoàn thành việc chuyển đổi sang IPv6 tại Việt Nam, với các mốc cụ thể cho từng giai đoạn.",
      source: "Phạm, H. C.",
      reference: 3,
      page: 87,
    },
    {
      id: 4,
      text: "Theo Internet Society (2022), các IXP đóng vai trò quan trọng trong việc cải thiện khả năng phục hồi của mạng Internet và giảm độ trễ cho người dùng cuối.",
      source: "Internet Society",
      reference: 4,
      page: "N/A",
    },
    {
      id: 5,
      text: "APNIC (2023) báo cáo rằng khu vực Châu Á - Thái Bình Dương đang đối mặt với thách thức lớn trong việc quản lý tài nguyên Internet do sự phát triển nhanh chóng của các thiết bị kết nối.",
      source: "APNIC",
      reference: 5,
      page: "N/A",
    },
    {
      id: 6,
      text: "Lê & Hoàng (2020) phân tích các mối đe dọa bảo mật đối với tài nguyên Internet tại Việt Nam và đề xuất một khung bảo mật toàn diện.",
      source: "Lê, T. D., & Hoàng, M. H.",
      reference: 6,
      page: 118,
    },
    {
      id: 7,
      text: "Báo cáo của World Bank (2021) chỉ ra rằng cơ sở hạ tầng Internet là một trong những yếu tố quan trọng nhất ảnh hưởng đến sự phát triển của nền kinh tế số tại Việt Nam.",
      source: "World Bank",
      reference: 7,
      page: 42,
    },
    {
      id: 8,
      text: "Đỗ (2022) đề xuất áp dụng mô hình quản trị đa bên cho Internet tại Việt Nam, dựa trên kinh nghiệm thành công từ các quốc gia phát triển.",
      source: "Đỗ, Q. T.",
      reference: 8,
      page: 156,
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <ReportNavigation currentPage="citations" />

      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0a3d62]">Trích dẫn</h1>

          <p className="text-lg font-merriweather mb-8 text-gray-800">
            Dưới đây là các trích dẫn được sử dụng trong báo cáo, với thông tin về nguồn và trang tham khảo.
          </p>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <ul className="space-y-8">
                {citations.map((citation) => (
                  <motion.li
                    key={citation.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-l-[#38ada9] pl-4 py-2"
                  >
                    <p className="font-merriweather text-gray-800 mb-2">"{citation.text}"</p>
                    <div className="text-sm text-gray-600">
                      <p>Nguồn: {citation.source}</p>
                      <p>
                        Tham khảo: [{citation.reference}], Trang: {citation.page}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <a
              href="/report/references"
              className="inline-flex items-center text-[#38ada9] hover:text-[#38ada9]/80 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Quay lại: Tài liệu tham khảo
            </a>

            <a href="/contact" className="inline-flex items-center text-[#38ada9] hover:text-[#38ada9]/80 font-medium">
              Tiếp theo: Liên hệ
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
