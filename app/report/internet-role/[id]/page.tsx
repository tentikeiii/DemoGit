import InternetRoleDetailPageClient from "./InternetRoleDetailPageClient"

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { id: string } }) {
  const sections = {
    a: "Tài nguyên Internet và phân loại",
    b: "Điểm trao đổi lưu lượng (IXPs)",
    c: "Quản lý tài nguyên Internet",
  }

  const title = sections[params.id as keyof typeof sections]

  if (!title) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    }
  }

  return {
    title: `${title} | Report`,
    description: `Detailed information about ${title.toLowerCase()} in Vietnam's network infrastructure`,
  }
}

export default function InternetRoleDetailPage({ params }: { params: { id: string } }) {
  return <InternetRoleDetailPageClient params={params} />
}
