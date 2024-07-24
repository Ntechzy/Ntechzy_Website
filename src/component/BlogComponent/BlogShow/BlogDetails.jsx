import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as XLSX from 'xlsx';

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchExcelFile = async () => {
      try {
        const response = await axios.get('/Blog(4).xlsx', {
          responseType: 'arraybuffer',
        });
        console.log(response)
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Convert the array of arrays to an array of objects
        const keys = json[0];
        const rows = json.slice(1);
        const blogs = rows.map((row, index) => {
          let blog = {};
          keys.forEach((key, i) => {
            blog[key] = row[i];
          });
          blog.Id = (index + 1).toString();  // Ensure id starts from 1 and is a string for comparison
          return blog;
        });

        setBlogs(blogs);
      } catch (error) {
        console.error('Error fetching or processing the Excel file', error);
      }
    };

    fetchExcelFile();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const foundBlog = blogs.find(blog => blog.Id === id);
      setBlog(foundBlog);
    }
  }, [blogs, id]);

  if (!blog) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-8 text-white">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg p-6 shadow-lg" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4" data-aos="flip-left">{blog.Title}</h1>
        {<img src={blog.ImageUrl} alt="image" className="flex items-center justify-center mb-4 max-w-full h-auto rounded border-1" />}
        <p className="mb-4"><span className="font-semibold">Author:</span> {blog.Author}</p>
        <p className="mb-4"><span className="font-semibold">Date:</span> {blog.Date}</p>
        <p>{blog.Content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
