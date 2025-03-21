import type { BlogPost } from "@/types"

export const blogPosts: BlogPost[] = [
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
    content: {
      introduction:
        "Nestled in the heart of Chennai, Shri Ganesh Bhavan has been serving authentic South Indian cuisine for over three decades. What started as a small, family-run establishment has now evolved into a beloved culinary institution with 10 outlets across the city. This is the story of tradition, consistency, and the unwavering commitment to quality that has made Shri Ganesh Bhavan a household name in Chennai.",
      sections: [
        {
          title: "Humble Beginnings",
          content:
            "In 1989, Mr. Venkatesh Iyer, a passionate food enthusiast with a background in hotel management, opened the first Shri Ganesh Bhavan in T. Nagar, Chennai. With just eight tables and a small kitchen, the restaurant specialized in serving traditional South Indian breakfast items like dosas, idlis, and vadas. Despite its modest size, the restaurant quickly gained popularity for its perfectly crisp dosas and flavorful chutneys, prepared using recipes passed down through generations.",
          image: {
            src: "/placeholder.svg?height=400&width=800&text=Original+Restaurant",
            alt: "The original Shri Ganesh Bhavan restaurant in T. Nagar, Chennai",
            caption: "The original Shri Ganesh Bhavan restaurant in T. Nagar, Chennai (1989)",
          },
        },
        {
          title: "The Secret to Success",
          content:
            "What sets Shri Ganesh Bhavan apart from other South Indian restaurants is their unwavering commitment to quality and authenticity. The restaurant sources ingredients directly from local farmers, ensuring freshness and supporting the local economy. The dosa batter is still prepared using the traditional method of soaking rice and lentils overnight and grinding them to perfection. Nothing is pre-made or stored for long periods, maintaining the restaurant's high standards for every dish served. This dedication to quality has earned Shri Ganesh Bhavan a loyal customer base that spans generations.",
        },
        {
          title: "Growth and Expansion",
          content:
            "By the early 2000s, Shri Ganesh Bhavan had established itself as one of Chennai's most beloved South Indian restaurants. Encouraged by this success, Mr. Iyer opened the second outlet in Anna Nagar in 2003, followed by a third in Adyar in 2005. Today, Shri Ganesh Bhavan has 10 outlets across Chennai, each maintaining the same standards of quality and service that made the original restaurant so successful. Despite the expansion, each outlet continues to operate with the same family-run ethos, with Mr. Iyer's sons and daughters now actively involved in managing the business.",
        },
      ],
      quote: {
        text: "Our focus has always been on quality and consistency. We believe that's what keeps customers coming back year after year. We may have grown in size, but our commitment to serving authentic, homestyle South Indian food remains unchanged.",
        author: "Venkatesh Iyer, Founder, Shri Ganesh Bhavan",
      },
      conclusion:
        "As Shri Ganesh Bhavan celebrates over three decades of serving delicious South Indian cuisine, the restaurant continues to honor its legacy while embracing the future. With plans to open outlets in other major Indian cities, the restaurant is poised for further growth without compromising on the quality and authenticity that has been its hallmark. For now, the aroma of freshly made dosas and the sound of satisfied customers continue to fill the air at Shri Ganesh Bhavan, a testament to the enduring appeal of tradition in an ever-changing culinary landscape.",
    },
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
    content: {
      introduction:
        "In the bustling food landscape of Bangalore, Mysore Raman Idli stands out as a beacon of authentic South Indian cuisine. Founded by Mr. Raman Iyer after a chance encounter with a master chef in Mysore, this restaurant has grown from a tiny street-side stall to a chain of five successful outlets across the city. This is the story of passion, perseverance, and the perfect idli.",
      sections: [
        {
          title: "A Serendipitous Beginning",
          content:
            "The story of Mysore Raman Idli begins not in a kitchen, but on a train journey. In 1995, Raman Iyer, then a young bank employee, was traveling to Mysore for work when he struck up a conversation with an elderly gentleman seated across from him. This man turned out to be Krishnamurthy, a retired chef who had spent decades perfecting the art of making soft, fluffy idlis. Fascinated by Krishnamurthy's stories and passion for food, Raman ended up spending his entire stay in Mysore learning the intricacies of South Indian cooking from the master chef.",
          image: {
            src: "/placeholder.svg?height=400&width=800&text=Mysore+Train+Station",
            alt: "Mysore train station where Raman met Chef Krishnamurthy",
            caption: "Mysore train station where the fateful meeting occurred (1995)",
          },
        },
        {
          title: "From Hobby to Profession",
          content:
            "Upon returning to Bangalore, Raman continued his day job at the bank but spent his evenings practicing what he had learned. He began inviting friends and family over for dinner, serving them his increasingly perfected idlis and dosas. The positive feedback was overwhelming, with many suggesting he should consider turning his passion into a profession. In 1997, taking a leap of faith, Raman quit his secure banking job and invested his savings in a small food stall near Jayanagar. Named 'Mysore Raman Idli' in honor of where his culinary journey began, the stall specialized in soft, melt-in-your-mouth idlis served with a variety of traditional chutneys.",
        },
        {
          title: "Building a Loyal Following",
          content:
            "The initial months were challenging, with Raman working 16-hour days and barely breaking even. However, the exceptional quality of his food began to attract notice. Word spread about the incredibly soft idlis and the authentic, flavorful chutneys at this small stall. Gradually, a loyal customer base developed, with people willing to queue for up to 30 minutes just to taste Raman's creations. By 1999, the tiny stall had become too small to accommodate the growing number of customers, leading Raman to open his first proper restaurant in the same neighborhood.",
        },
      ],
      quote: {
        text: "I never set out to build a restaurant chain. I just wanted to share the joy of truly authentic South Indian food with as many people as possible. Everything else followed naturally from that simple desire.",
        author: "Raman Iyer, Founder, Mysore Raman Idli",
      },
      conclusion:
        "Today, Mysore Raman Idli operates five successful outlets across Bangalore, each maintaining the same commitment to quality and authenticity that defined that first small stall. Raman still personally oversees the preparation of the idli batter at the central kitchen each morning, ensuring that every idli served meets his exacting standards. As the business continues to grow, with plans for expansion to other cities in southern India, the core philosophy remains unchanged: serve honest, delicious food that respects tradition while delighting the palate. From a chance meeting on a train to a beloved culinary institution, the journey of Mysore Raman Idli reminds us that when passion meets opportunity, truly remarkable things can happen.",
    },
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
] as BlogPost[]

export function getRelatedPosts(currentSlug: string, categorySlug: string, limit = 4): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug && post.categorySlug === categorySlug).slice(0, limit)
}

