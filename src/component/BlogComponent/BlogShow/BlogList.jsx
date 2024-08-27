import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import axios from "axios";
import Footer from "../../HomeComponent/Footer";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchExcelFile = async () => {
      try {
        const response = await axios.get("/Blog.xlsx", {
          responseType: "arraybuffer",
        });
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: "array" });
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
          blog.Id = (index + 1).toString(); // Ensure id starts from 1 and is a string for comparison
          return blog;
        });

        console.log(blogs);

        setBlogs(blogs);
      } catch (error) {
        console.error("Error fetching or processing the Excel file", error);
      }
    };

    fetchExcelFile();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className="min-h-screen p-8">
        <div className="flex flex-col items-center p-3 gap-11 text-white">
          <div className="font-bold text-4xl ">All Blogs</div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col"
                data-aos="flip-right"
              >
                <h2
                  className="text-2xl font-bold text-white mb-4"
                  data-aos="fade-up"
                >
                  {truncate(blog.Title, 25)}
                </h2>
                <div className="flex flex-row justify-between">
                  <p className="text-white mb-4" data-aos="fade-up">
                    {blog.Date}
                  </p>
                  <p className="text-white mb-4" data-aos="fade-up">
                    {blog.Author}
                  </p>
                </div>
                {
                  <img
                    src={blog.ImageUrl}
                    alt={blog.Title}
                    className="mb-4 w-full h-auto rounded"
                  />
                }

                <p className="text-white mb-4 ">{truncate(blog.Content, 40)}</p>
                <Link
                  to={`/blog/${blog.Id}`}
                  className="text-blue-500 hover:underline mt-auto"
                >
                  Read More..
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
