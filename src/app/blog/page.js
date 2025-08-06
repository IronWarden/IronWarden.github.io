import React from 'react';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import matter from 'gray-matter';

const Blog = async () => {
    const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = await Promise.all(filenames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(remarkParse)
            .use(remarkHtml)
            .process(content);
        const contentHtml = processedContent.toString();

        return {
            filename,
            contentHtml,
            title: data.title || filename.replace('.md', ''), // Use title from front matter, or filename as fallback
            date: data.date || null,
            author: data.author || null,
        };
    }));

    return (
        <div className="container mx-auto py-3">
            <div className="mt-8">
                {posts.map(({ filename, contentHtml, title, date, author }) => (
                    <div key={filename} className="mb-8 p-6 bg-base-200 rounded-lg shadow-xl">
                        <h2 className="text-3xl font-bold mb-2">{title}</h2>
                        {date && <p className="text-accent mb-1">Date: {new Date(date).toDateString()}</p>}
                        {author && <p className="text-accent mb-4">Author: {author}</p>}
                        <div className="prose lg:prose-xl max-w-full" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
