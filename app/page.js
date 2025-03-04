import BlogCarousel from "@/components/BlogCarousel"
import BlogGrid from "@/components/BlogGrid"

// In a real application, this data would come from a CMS or API
const blogPosts = [
  {
    slug: "menu-unification-product",
    title: "Presto Launches Industry-First Menu Unification Product",
    excerpt: "Enabling The Most Frictionless and Scalable Drive-Thru Voice AI solution in the market.",
    content:
      "Presto, the enterprise AI platform built for restaurants, today announced the industry-first Menu Unification Product, an advanced feature of Presto Voice™. This new technology enables restaurants to streamline their drive-thru operations by ensuring consistency across all customer touchpoints, reducing complexity, and improving order accuracy. The Menu Unification Product addresses the long-standing challenge of maintaining menu consistency across multiple platforms, including digital menus, mobile apps, and drive-thru displays.",
    category: "Press Releases",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-11-15",
  },
  {
    slug: "ai-revolutionizing-restaurant-industry",
    title: "How AI is Revolutionizing the Restaurant Industry",
    excerpt:
      "Explore the transformative impact of artificial intelligence on restaurant operations and customer experience.",
    content:
      "The restaurant industry is undergoing a profound transformation driven by artificial intelligence technologies. From automating order-taking to personalizing customer experiences, AI is helping restaurants overcome labor shortages, improve operational efficiency, and increase customer satisfaction. In this article, we explore real-world applications of AI in restaurants and discuss how these technologies are reshaping the industry landscape.",
    category: "Technology",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-11-10",
  },
  {
    slug: "voice-ai-drive-thru-case-study",
    title: "Voice AI Drive-Thru: A Success Story",
    excerpt: "Learn how a major QSR chain increased order accuracy and reduced wait times using Presto Voice AI.",
    content:
      "One of the largest quick-service restaurant chains in the United States has successfully implemented Presto Voice AI at over 100 locations, resulting in a 25% reduction in average wait times and a 35% improvement in order accuracy. This case study examines the implementation process, challenges overcome, and the measurable benefits realized by both the restaurant and its customers.",
    category: "Insights",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-10-28",
  },
  {
    slug: "restaurant-labor-shortage-solutions",
    title: "Addressing the Restaurant Labor Shortage with Technology",
    excerpt: "Innovative technological solutions helping restaurants thrive despite ongoing staffing challenges.",
    content:
      "The restaurant industry continues to face unprecedented labor shortages, with many establishments struggling to maintain service levels. This article explores how technology, particularly automation and AI, is helping restaurants adapt to this new reality. From voice ordering systems to self-service kiosks, learn how these technologies are enabling restaurants to operate efficiently with fewer staff members while maintaining or even improving customer satisfaction.",
    category: "Insights",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-10-15",
  },
  {
    slug: "restaurant-payment-innovation",
    title: "The Future of Restaurant Payment Systems",
    excerpt: "Emerging trends and technologies reshaping how customers pay for their dining experiences.",
    content:
      "Payment technologies in the restaurant industry are evolving rapidly, driven by changing consumer preferences and advances in financial technology. This article examines emerging trends such as contactless payments, mobile wallets, blockchain-based systems, and their impact on restaurant operations. We also discuss how these innovations are influencing customer behavior and what restaurant operators should consider when updating their payment infrastructure.",
    category: "Technology",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-09-22",
  },
  {
    slug: "restaurant-customer-data-insights",
    title: "Leveraging Customer Data for Restaurant Growth",
    excerpt: "How smart data analysis can enhance menu engineering, marketing efforts, and operational efficiency.",
    content:
      "Customer data has become a valuable asset for restaurants looking to optimize their operations and enhance guest experiences. This article explores how restaurants can collect, analyze, and leverage customer data to make informed decisions about menu offerings, marketing strategies, and service improvements. We also address privacy considerations and best practices for responsible data management in the restaurant industry.",
    category: "Product",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-09-05",
  },
]

export default function Home() {
  // Featured posts for the carousel (showing top 3)
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <div className="space-y-12 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog & news</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          Discover industry-leading content from our thought leaders, recent developments and meaningful insights.
        </p>
      </div>

      <BlogCarousel posts={featuredPosts} />

      <BlogGrid posts={blogPosts} />
    </div>
  )
}

