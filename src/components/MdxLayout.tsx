export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
      <article className="max-w-2xl mx-auto px-6 py-12 prose prose-stone
        prose-headings:font-serif prose-headings:text-[#364D4A]
        prose-p:text-[#364D4A] prose-p:leading-relaxed
        prose-a:text-[#A96F3D] prose-a:no-underline hover:prose-a:underline
        prose-strong:text-[#364D4A]
        prose-blockquote:border-l-[#A96F3D] prose-blockquote:text-[#364D4A]">
        {children}
      </article>
    )
  }