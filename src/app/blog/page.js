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
        <div className="blog-page">
            <div>
                {posts.map(({ filename, contentHtml, title, date, author }) => (
                    <article key={filename} className="py-10 border-b border-base-300 last:border-b-0">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
                        <p className="opacity-75 mb-6 text-base">
                            {[date && new Date(date).toDateString(), author].filter(Boolean).join(' · ')}
                        </p>
                        <div className="prose prose-base md:prose-lg max-w-full" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
