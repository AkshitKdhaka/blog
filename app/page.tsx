"use client"

import { useSearchParams } from "next/navigation"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/nav"
import { BlogCard } from "@/components/blog-card"

// Blog post data with category mapping
const blogPosts = [
  // Workshops Category (6 posts)
  {
    title: "Dosas and decades of deliciousness: The Shri Ganesh Bhavan story",
    excerpt:
      "With a strong belief in consistency and tradition, Shri Ganesh Bhavan has grown from a humble hotel in Chennai to 10 outlets across the city",
    slug: "shri-ganesh-bhavan-story",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Shivya Saha",
    date: "March 11, 2023",
    readTime: "4 min",
    category: "Restaurants",
    categorySlug: "workshops",
    backgroundColor: "bg-amber-100",
  },
  {
    title: "Culinary Workshop: Mastering the Art of South Indian Cuisine",
    excerpt:
      "Join Chef Ravi Kumar for a hands-on workshop exploring the authentic flavors and techniques of traditional South Indian cooking",
    slug: "south-indian-cuisine-workshop",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Priya Desai",
    date: "April 5, 2023",
    readTime: "3 min",
    category: "Culinary",
    categorySlug: "workshops",
    backgroundColor: "bg-orange-100",
  },
  {
    title: "Digital Photography Workshop for Beginners",
    excerpt:
      "Learn the fundamentals of composition, lighting, and camera settings in this comprehensive workshop for aspiring photographers",
    slug: "photography-workshop-beginners",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Rahul Sharma",
    date: "May 12, 2023",
    readTime: "5 min",
    category: "Photography",
    categorySlug: "workshops",
    backgroundColor: "bg-blue-100",
  },
  {
    title: "Pottery Workshop: Creating with Clay",
    excerpt:
      "Discover the therapeutic art of pottery making with expert potter Anita Reddy in this hands-on workshop for all skill levels",
    slug: "pottery-workshop-clay",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Vikram Patel",
    date: "June 8, 2023",
    readTime: "4 min",
    category: "Arts & Crafts",
    categorySlug: "workshops",
    backgroundColor: "bg-red-100",
  },
  {
    title: "Coding Workshop: Building Your First Web Application",
    excerpt:
      "A step-by-step workshop guiding beginners through the process of creating their first interactive web application using modern technologies",
    slug: "coding-workshop-web-app",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Neha Gupta",
    date: "July 15, 2023",
    readTime: "6 min",
    category: "Technology",
    categorySlug: "workshops",
    backgroundColor: "bg-green-100",
  },
  {
    title: "Mindfulness Workshop: Finding Balance in Daily Life",
    excerpt:
      "Learn practical meditation and mindfulness techniques to reduce stress and improve focus in this transformative workshop",
    slug: "mindfulness-workshop-balance",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Arjun Mehta",
    date: "August 3, 2023",
    readTime: "4 min",
    category: "Wellness",
    categorySlug: "workshops",
    backgroundColor: "bg-purple-100",
  },

  // Camps Category (6 posts)
  {
    title: "Idli, spice, and everything nice– Mysore Raman Idli's journey to success!",
    excerpt:
      "Inspired by a chance meeting in a small town, Mysore Raman Idli has built a strong following by serving delicious South Indian dishes rooted in tradition",
    slug: "mysore-raman-idli-story",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Shivya Saha",
    date: "February 4, 2023",
    readTime: "4 min",
    category: "Restaurants",
    categorySlug: "camps",
    backgroundColor: "bg-green-100",
  },
  {
    title: "Summer Science Camp: Exploring the Natural World",
    excerpt:
      "A week-long immersive experience where children conduct experiments, explore ecosystems, and develop a deeper understanding of scientific principles",
    slug: "summer-science-camp",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Dr. Anjali Sharma",
    date: "April 20, 2023",
    readTime: "5 min",
    category: "Education",
    categorySlug: "camps",
    backgroundColor: "bg-blue-100",
  },
  {
    title: "Adventure Camp: Wilderness Survival Skills",
    excerpt:
      "Learn essential outdoor survival techniques, navigation, and team-building in this thrilling three-day wilderness adventure camp",
    slug: "wilderness-survival-camp",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Raj Kapoor",
    date: "May 15, 2023",
    readTime: "4 min",
    category: "Adventure",
    categorySlug: "camps",
    backgroundColor: "bg-amber-100",
  },
  {
    title: "Robotics Camp for Young Innovators",
    excerpt:
      "A hands-on camp where children design, build, and program their own robots while learning core STEM concepts in a fun environment",
    slug: "robotics-camp-innovators",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Sanjay Mehta",
    date: "June 12, 2023",
    readTime: "5 min",
    category: "Technology",
    categorySlug: "camps",
    backgroundColor: "bg-red-100",
  },
  {
    title: "Creative Writing Camp: Finding Your Voice",
    excerpt:
      "Develop storytelling skills, explore different writing styles, and create original works in this inspiring camp for aspiring young authors",
    slug: "creative-writing-camp",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Meera Nair",
    date: "July 8, 2023",
    readTime: "4 min",
    category: "Arts",
    categorySlug: "camps",
    backgroundColor: "bg-purple-100",
  },
  {
    title: "Eco-Warriors Camp: Protecting Our Planet",
    excerpt:
      "An educational camp focused on environmental conservation, sustainable practices, and inspiring the next generation of environmental stewards",
    slug: "eco-warriors-camp",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Arun Verma",
    date: "August 5, 2023",
    readTime: "5 min",
    category: "Environment",
    categorySlug: "camps",
    backgroundColor: "bg-teal-100",
  },

  // Projects Category (6 posts)
  {
    title: "Building a STEM project: The journey of young innovators",
    excerpt:
      "How a group of students created an award-winning science project that solves real-world problems through innovative thinking",
    slug: "stem-project-journey",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Rahul Sharma",
    date: "January 15, 2023",
    readTime: "6 min",
    category: "Education",
    categorySlug: "projects",
    backgroundColor: "bg-blue-100",
  },
  {
    title: "Solar-Powered Water Purification System",
    excerpt:
      "A step-by-step guide to building an affordable solar-powered water purification system for educational or community use",
    slug: "solar-water-purification",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Dr. Vikram Singh",
    date: "March 10, 2023",
    readTime: "7 min",
    category: "Engineering",
    categorySlug: "projects",
    backgroundColor: "bg-yellow-100",
  },
  {
    title: "Building an AI-Powered Plant Health Monitor",
    excerpt:
      "Learn how to create a smart device that uses machine learning to monitor plant health and automate care routines",
    slug: "ai-plant-monitor",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Priya Patel",
    date: "April 22, 2023",
    readTime: "8 min",
    category: "Technology",
    categorySlug: "projects",
    backgroundColor: "bg-green-100",
  },
  {
    title: "Biodegradable Plastic Alternatives: A Research Project",
    excerpt:
      "Explore how students developed eco-friendly alternatives to conventional plastics using locally available organic materials",
    slug: "biodegradable-plastics-research",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Ananya Desai",
    date: "May 18, 2023",
    readTime: "6 min",
    category: "Science",
    categorySlug: "projects",
    backgroundColor: "bg-teal-100",
  },
  {
    title: "Interactive Digital Storytelling Platform",
    excerpt:
      "A collaborative project creating an accessible platform for children to develop and share interactive digital stories",
    slug: "digital-storytelling-platform",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Rohan Kapoor",
    date: "June 30, 2023",
    readTime: "5 min",
    category: "Education",
    categorySlug: "projects",
    backgroundColor: "bg-purple-100",
  },
  {
    title: "Urban Vertical Garden: Maximizing Food Production in Limited Space",
    excerpt:
      "How a team of students designed and implemented a vertical gardening system to address food security in urban environments",
    slug: "urban-vertical-garden",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Neha Sharma",
    date: "July 25, 2023",
    readTime: "6 min",
    category: "Agriculture",
    categorySlug: "projects",
    backgroundColor: "bg-amber-100",
  },

  // How To Category (6 posts)
  {
    title: "How to create your first science experiment at home",
    excerpt:
      "A step-by-step guide to setting up safe and educational science experiments using materials you already have in your kitchen",
    slug: "home-science-experiments",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Priya Patel",
    date: "December 20, 2022",
    readTime: "5 min",
    category: "DIY",
    categorySlug: "how-to",
    backgroundColor: "bg-purple-100",
  },
  {
    title: "How to Build a Simple Robot with Arduino",
    excerpt: "A beginner-friendly guide to creating your first programmable robot using affordable Arduino components",
    slug: "arduino-robot-guide",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Arjun Mehta",
    date: "February 15, 2023",
    readTime: "7 min",
    category: "Electronics",
    categorySlug: "how-to",
    backgroundColor: "bg-blue-100",
  },
  {
    title: "How to Start a School Garden Project",
    excerpt:
      "Practical steps for educators to establish and maintain a successful garden program that enhances curriculum and student engagement",
    slug: "school-garden-guide",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Sunita Reddy",
    date: "March 28, 2023",
    readTime: "6 min",
    category: "Education",
    categorySlug: "how-to",
    backgroundColor: "bg-green-100",
  },
  {
    title: "How to Create Educational Games for Young Learners",
    excerpt:
      "Design principles and practical tips for developing games that are both fun and effective for teaching core concepts to children",
    slug: "educational-games-creation",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Vikram Joshi",
    date: "April 14, 2023",
    readTime: "5 min",
    category: "Game Design",
    categorySlug: "how-to",
    backgroundColor: "bg-yellow-100",
  },
  {
    title: "How to Conduct a Citizen Science Project in Your Community",
    excerpt:
      "A comprehensive guide to organizing community-based research projects that contribute to scientific knowledge while engaging local participants",
    slug: "citizen-science-guide",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Dr. Anjali Kumar",
    date: "May 22, 2023",
    readTime: "8 min",
    category: "Community Science",
    categorySlug: "how-to",
    backgroundColor: "bg-red-100",
  },
  {
    title: "How to Create an Effective Learning Portfolio",
    excerpt:
      "Step-by-step instructions for students to document their learning journey and showcase their achievements in a compelling digital format",
    slug: "learning-portfolio-guide",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Meera Singh",
    date: "June 10, 2023",
    readTime: "5 min",
    category: "Education",
    categorySlug: "how-to",
    backgroundColor: "bg-teal-100",
  },

  // Challenges Category (6 posts)
  {
    title: "Weekly brain teasers to challenge your family",
    excerpt:
      "A collection of puzzles and brain teasers that will keep your family engaged and thinking critically during weekend gatherings",
    slug: "family-brain-teasers",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Amit Kumar",
    date: "November 5, 2022",
    readTime: "3 min",
    category: "Puzzles",
    categorySlug: "challenges",
    backgroundColor: "bg-yellow-100",
  },
  {
    title: "30-Day Coding Challenge for Beginners",
    excerpt:
      "A month-long series of progressive coding exercises designed to build programming skills from the ground up",
    slug: "30-day-coding-challenge",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Ravi Sharma",
    date: "February 8, 2023",
    readTime: "4 min",
    category: "Programming",
    categorySlug: "challenges",
    backgroundColor: "bg-blue-100",
  },
  {
    title: "Environmental Innovation Challenge for Students",
    excerpt:
      "A competition challenging young minds to develop creative solutions for pressing environmental issues in their communities",
    slug: "environmental-innovation-challenge",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Nisha Patel",
    date: "March 15, 2023",
    readTime: "5 min",
    category: "Environment",
    categorySlug: "challenges",
    backgroundColor: "bg-green-100",
  },
  {
    title: "Mathematical Olympiad Preparation Challenges",
    excerpt:
      "A series of advanced math problems designed to prepare students for competitive mathematics at the national and international level",
    slug: "math-olympiad-challenges",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Prof. Suresh Iyer",
    date: "April 20, 2023",
    readTime: "6 min",
    category: "Mathematics",
    categorySlug: "challenges",
    backgroundColor: "bg-purple-100",
  },
  {
    title: "Design Thinking Challenge: Reimagining Learning Spaces",
    excerpt:
      "A collaborative challenge for educators and students to redesign physical and virtual learning environments for enhanced engagement",
    slug: "learning-spaces-design-challenge",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Anita Desai",
    date: "May 12, 2023",
    readTime: "5 min",
    category: "Education",
    categorySlug: "challenges",
    backgroundColor: "bg-red-100",
  },
  {
    title: "21-Day Scientific Inquiry Challenge",
    excerpt:
      "A three-week program guiding students through the process of developing and conducting their own scientific investigations",
    slug: "scientific-inquiry-challenge",
    coverImage: "/placeholder.svg?height=400&width=600",
    author: "Dr. Rajesh Verma",
    date: "June 5, 2023",
    readTime: "4 min",
    category: "Science",
    categorySlug: "challenges",
    backgroundColor: "bg-amber-100",
  },
]

export default function Home() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  // Calculate filtered posts and category title directly during render
  // This avoids using state which can cause infinite update loops
  const filteredPosts = categoryParam ? blogPosts.filter((post) => post.categorySlug === categoryParam) : blogPosts

  const categoryTitle = categoryParam
    ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)
    : "All Categories"

  return (
    <main>
      <Hero />
      <Navigation />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{categoryTitle} Articles</h2>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No posts found in this category</h2>
            <p className="text-gray-600">Try selecting a different category or check back later for new content.</p>
          </div>
        )}
      </div>
    </main>
  )
}

