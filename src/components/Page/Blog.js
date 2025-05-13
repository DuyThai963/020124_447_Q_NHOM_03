import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Blog() {
  const [data, setData] = useState({ blog: [] });

  useEffect(() => {
    fetch("http://localhost:8000/api/list-blog")
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Kiểm tra dữ liệu
        // Kiểm tra định dạng dữ liệu
        if (Array.isArray(json.blog)) {
          setData({ blog: json.blog });
        } else {
          setData({ blog: [] });
        }
      })
      .catch((err) => console.error("Lỗi fetch:", err));
  }, []);

  const blogList = (
    <section className="content-wrapper">
      <div className="gdlr-content">
        <div className="with-sidebar-wrapper">
          <div className="with-sidebar-container container">
            <div className="with-sidebar-left eight columns">
              <div className="with-sidebar-content twelve columns">
                {data.blog.length === 0 ? (
                  <div>Không có bài viết nào để hiển thị.</div>
                ) : (
                  data.blog.map((blog) => (
                    <article className="gdlr-item gdlr-blog-full" key={blog.id}>
                      <div className="gdlr-ux gdlr-blog-full-ux">
                        <div className="gdlr-blog-thumbnail" style={{ width: '100%', overflow: 'hidden' }}>
                          <Link to={`/blog/${blog.id}`}>
                            <img src={blog.img} alt="" style={{
                             width: "100%", // Kéo dài ảnh theo chiều ngang của thẻ chứa
                             height: "auto", // Giữ tỷ lệ gốc của ảnh
                             maxWidth: "800px", // Giới hạn chiều rộng tối đa
                             display: "block", // Đảm bảo ảnh được hiển thị như block
                             margin: "0 auto"
                            }} />
                          </Link>
                        </div>
                        <header className="post-header">
                          <h3 className="gdlr-blog-title">
                            <a href="#">{blog.blog_name}</a>
                          </h3>
                          <div className="gdlr-blog-info gdlr-info">
                            <div className="blog-info blog-author">
                              <i className="fa fa-pencil"></i>
                              <a href="#" title="Posts by Duy Thái" rel="author">Duy Thái</a>
                            </div>
                            <div className="blog-info blog-category">
                              <i className="fa fa-folder-open-o"></i>
                              <a href="#" rel="tag">Blog</a>
                            </div>
                          </div>
                        </header>
                        <div class="clear"></div>
                        <div className="gdlr-blog-content">
                          {blog.short_describe}
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
            <div className="gdlr-sidebar gdlr-right-sidebar four columns">
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      <div className="gdlr-page-title-wrapper" style={{ marginTop: "0px", paddingTop: "0px" }}>
        <div
          className="gdlr-page-title-container"
          style={{
            width: '100%',
            backgroundColor: 'rgba(34, 34, 34, 0.7)',
            padding: '60px 20px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h1
            className="gdlr-page-title"
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              letterSpacing: '2px',
              margin: 0
            }}
          >
            BLOG
          </h1>
          <span
            className="gdlr-page-caption"
            style={{
              display: 'block',
              fontSize: '16px',
              fontStyle: 'italic',
              color: '#caa87d',
              marginTop: '10px'
            }}
          >
            Tất cả đều có tại đây
          </span>
        </div>
      </div>
      <div id="gdlr-header-substitute"></div>
      {blogList}
      <div class="clear"></div>
    </div>

  );
}

export default Blog;