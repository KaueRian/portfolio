"use client";

import Image from "next/image";

interface BlogProps {
  isActive: boolean;
}

const blogs = [
  { id: 1, title: "Design conferences in 2022", text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.", date: "Feb 23, 2022", category: "Design", img: "/images/blog-1.jpg" },
  { id: 2, title: "Best fonts every designer", text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.", date: "Feb 23, 2022", category: "Design", img: "/images/blog-2.jpg" },
  { id: 3, title: "Design digest #80", text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.", date: "Feb 23, 2022", category: "Design", img: "/images/blog-3.jpg" },
  { id: 4, title: "UI interactions of the week", text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.", date: "Feb 23, 2022", category: "Design", img: "/images/blog-4.jpg" },
  { id: 5, title: "The forgotten art of spacing", text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "Feb 23, 2022", category: "Design", img: "/images/blog-5.jpg" },
  { id: 6, title: "Design digest #79", text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.", date: "Feb 23, 2022", category: "Design", img: "/images/blog-6.jpg" },
];

export function Blog({ isActive }: BlogProps) {
  return (
    <article className={`blog ${isActive ? "active" : ""}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogs.map(blog => (
            <li className="blog-post-item" key={blog.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <Image src={blog.img} alt={blog.title} width={400} height={250} style={{ width: '100%', height: 'auto' }} />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{blog.category}</p>
                    <span className="dot"></span>
                    <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{blog.title}</h3>
                  <p className="blog-text">{blog.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
