import React from 'react';
import { userProfile } from '../database/data.json';

const data = userProfile.blogs;

const Posts = () => {
    return (
        <div className="mt-12">
            <div className="flex justify-center items-center">
                <div className="post-count p-3 flex justify-center items-center font-bold text-xl text-blue-500 w-48 h-12 border-t-2 border-r-2 border-gray-200">
                    <h3>{data.length} Posts</h3>
                </div>
                <div className="p-3 w-full h-12 border-b-2 border-gray-200"></div>
            </div>
            <div className="outer-container-posts flex flex-col">
                {data.map((blog) => (
                    <div key={blog.blogID} className="px-5 py-10 flex flex-col gap-10 border-b-2 border-gray-200">
                        <div className="blog-heading flex justify-between items-center font-extrabold text-2xl">
                            <h2>{blog.blogTitle}</h2>
                            <span className="text-2xl"><i className="fa-regular fa-thumbs-up flex justify-center items-center p-1 bg-yellow-600 text-white text-xs w-6 h-6 rounded-full"></i></span>
                        </div>
                        <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog.blogDescription.replace(/\n/g, '<br/>') }} />
                        <div className="blog-info flex justify-between">
                            <div className="blog-watermark" dangerouslySetInnerHTML={{ __html: blog.blogWatermark.replace(/\b(musing|thought)\b/g, '<span style="color: blue;">$1</span>') }} />
                            <div className="blog-date">{blog.blogDate}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
