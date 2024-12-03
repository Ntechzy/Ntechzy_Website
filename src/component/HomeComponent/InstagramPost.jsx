import React from "react";

// Sample JSON data (Replace with your actual JSON data)
const posts = [
  {
    id: 1,
    imageUrl: '/assets/podban1.avif',
    caption: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    likes: 240,
    instagramUrl: "https://www.instagram.com/ntechzy/?hl=en"
  },
  {
    id: 2,
    imageUrl: '/assets/podban2.avif',
    caption: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    likes: 350,
    instagramUrl: "https://www.instagram.com/ntechzy/?hl=en" 
  },
  {
    id: 3,
    imageUrl: '/assets/podban3.avif',
    caption: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    likes: 150,
    instagramUrl: "https://www.instagram.com/ntechzy/?hl=en"
  }
];

const InstagramPosts = () => {
  return (
    <div className="space-y-8" data-aos="fade-up">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-white mt-10 mb-6">
        Social Media Glimpse
      </h2>
      
      {/* Posts */}
      <div className="flex flex-wrap justify-center gap-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.instagramUrl} 
            target="_blank"           
            rel="noopener noreferrer" 
            className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={post.imageUrl}
              alt="Instagram Post"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-medium text-gray-800">{post.caption}</p>
              <div className="mt-2 flex items-center">
                <span className="text-gray-600">{post.likes} Likes</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
