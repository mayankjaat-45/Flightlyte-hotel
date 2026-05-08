import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[var(--bg-main)] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-[var(--gold-main)] mb-4">
            Blog Not Found
          </h1>

          <Link
            to="/blogs"
            className="font-body text-[var(--gold-soft)] hover:text-[var(--color-start)]"
          >
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,222,130,0.12),transparent_35%)]" />

        <div className="relative max-w-5xl mx-auto px-4">
          <Link
            to="/blogs"
            className="font-body text-[var(--gold-soft)] hover:text-[var(--color-start)]"
          >
            ← Back to Blogs
          </Link>

          <div className="mt-8">
            <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase text-[var(--gold-soft)] mb-4">
              {blog.date} • {blog.author} • {blog.category}
            </p>

            <h1 className="font-heading text-4xl md:text-7xl text-[var(--gold-main)] leading-tight">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl font-body text-xl leading-8 text-[var(--text-muted)]">
              {blog.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden border border-[var(--border-soft)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[280px] md:h-[520px] object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <article className="bg-[var(--bg-card)] border border-[var(--border-soft)] rounded-3xl p-6 md:p-10">
          <div className="font-body text-lg md:text-xl leading-9 text-[var(--text-main)] whitespace-pre-line">
            {blog.description}
          </div>
        </article>
      </section>
    </main>
  );
};

export default BlogDetails;
