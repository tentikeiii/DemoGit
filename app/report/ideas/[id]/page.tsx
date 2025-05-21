import IdeaDetailPageClient from "./IdeaDetailPageClient"

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { id: string } }) {
  const ideas = {
    "1": "Mở rộng VNIX",
    "2": "Chuyển đổi IPv6",
    "3": "Bảo mật tài nguyên",
    "4": "Mô hình quản trị",
  }

  const title = ideas[params.id as keyof typeof ideas]

  if (!title) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    }
  }

  return {
    title: `${title} | Report`,
    description: `Detailed proposal for ${title.toLowerCase()} to optimize internet resources in Vietnam`,
  }
}

export default function IdeaDetailPage({ params }: { params: { id: string } }) {
  return <IdeaDetailPageClient params={params} />
}
