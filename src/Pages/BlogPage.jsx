import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from '../component/BlogComponent/BlogShow/BlogList';
import BlogDetails from '../component/BlogComponent/BlogShow/BlogDetails';
import axios from 'axios';
import * as XLSX from 'xlsx';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchExcelFile = async () => {
      try {
        const response = await axios.get('/src/component/BlogComponent/Blog.xlsx', {
          responseType: 'arraybuffer',
        });
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Convert the array of arrays to an array of objects
        const keys = json[0];
        const rows = json.slice(1);
        const blogs = rows.map((row, index) => {
          let blog = { id: index.toString() };  // Ensure id is a string for comparison
          keys.forEach((key, i) => {
            blog[key] = row[i];
          });
          return blog;
        });

        setBlogs(blogs);
      } catch (error) {
        console.error('Error fetching or processing the Excel file', error);
      }
    };

    fetchExcelFile();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:id" element={<BlogDetails />} />
    </Routes>
  );
};

export default BlogPage;
