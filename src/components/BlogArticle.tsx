import './BlogArticle.css';
import { blogArticles } from '../data/blogArticles';
import type { BlogArticleData, BlogArticleContent } from '../data/blogArticles';

interface BlogArticleProps {
  articleId?: string;
}

const BlogArticle = ({ articleId = 'sea-turtle' }: BlogArticleProps) => {
  const article = blogArticles[articleId] as BlogArticleData | undefined;

  if (!article) {
    return <div className="article-not-found">Article not found</div>;
  }

  return (
    <section className="blog-article-section">
      <div className="article-container">
        {/* Hero Image */}
        <div className="article-hero">
          <img src={article.image} alt={article.title} className="article-hero-image" />
          <div className="article-hero-overlay">
            <div className="article-hero-content">
              <span className="article-category-badge">{article.category}</span>
              <h1 className="article-title">{article.title}</h1>
              <div className="article-meta-info">
                <span className="article-author">By {article.author}</span>
                <span className="article-separator">•</span>
                <span className="article-date">{article.date}</span>
                <span className="article-separator">•</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="article-content">
          {article.content.map((block: BlogArticleContent, index: number) => {
            if (block.type === 'intro') {
              return (
                <p key={index} className="article-intro">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'section') {
              return (
                <div key={index} className="article-section">
                  <h2 className="article-section-title">{block.title}</h2>
                  <p className="article-section-content">
                    {block.content?.split('\n').map((line: string, i: number) => (
                      <span key={i}>
                        {line}
                        {i < block.content!.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              );
            }

            if (block.type === 'list') {
              return (
                <div key={index} className="article-list-block">
                  <ul className="article-list">
                    {(block.items as string[]).map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {block.endText && <p className="article-list-end-text">{block.endText}</p>}
                </div>
              );
            }

            if (block.type === 'highlight-list') {
              return (
                <div key={index} className="article-highlight-block">
                  <div className="highlight-items">
                    {(block.items as Array<{ title: string; desc: string }>).map((item: any, i: number) => (
                      <div key={i} className="highlight-item">
                        <h3 className="highlight-title">{item.title}</h3>
                        <p className="highlight-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  {block.endText && <p className="article-highlight-end-text">{block.endText}</p>}
                </div>
              );
            }

            if (block.type === 'video' && block.src) {
              return (
                <div key={index} className="article-video-block">
                  <video controls className="article-video" poster={article.image}>
                    <source src={block.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            }

            if (block.type === 'cta') {
              return (
                <div key={index} className="article-cta-block">
                  <div className="cta-card">
                    <h3>Ready for Your Adventure?</h3>
                    <p>Rent a scooter and explore the wonders of the south coast with South Road Trips</p>
                    <a
                      href="https://wa.me/94764549169?text=Hi%20South%20Road%20Trips!%20I'd%20like%20to%20rent%20a%20scooter%20for%20exploring%20the%20south%20coast.%20Can%20you%20help%20me%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-cta-button"
                    >
                      Book Your Scooter on WhatsApp
                      <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>

                  <div className="article-social-block">
                    <p>Stay connected with South Road Trips for more travel tips and hidden gems across Sri Lanka</p>
                    <div className="social-links">
                      <a href="https://wa.me/94764549169" target="_blank" rel="noopener noreferrer" className="social-link">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </article>

        {/* Back Button */}
        <div className="article-footer">
          <a href="#blog" className="back-to-blog-btn">
            <svg className="back-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
