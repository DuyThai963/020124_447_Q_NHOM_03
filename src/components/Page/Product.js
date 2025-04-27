  import React, { useEffect, useState } from "react";

  function Product() {
    const [data, setData] = useState({ product: [] });

    useEffect(() => {
      fetch("http://localhost:8000/api/list-product")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          // Kiểm tra định dạng của dữ liệu
          if (Array.isArray(json[0])) {
            setData({ product: json[0] }); // Lưu trữ dữ liệu đúng cách
          } else {
            setData({ product: [] });
          }
        })
        .catch((err) => console.error("Lỗi fetch:", err));
    }, []);

    const productList = (
      <div className="grid-container hihi "> 
        
        {data.product.map((product) => (
            <div className="card" >
                <img src={product.image} alt="" width={700} height={400} />
                <h3 className="card-title">
                  <a href="#">{product.name}</a>
                </h3>
                  <div className="card-money">
                    <span className="gdlr-head">Giá từ</span>
                    <span className="gdlr-tail">
                      {parseInt(product.price).toLocaleString("vi-VN")} VNĐ / Món 
                    </span>
                  </div>
                  <div className="clear" />
                </div>
              
    ))
  }
    </div >
    )

  return (
    <div><div className="gdlr-page-title-wrapper"
      style={{
        backgroundImage: 'url(/frontend/anh/bgrTitle.png)',
        backgroundSize: '1518px 226px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(34, 34, 34, 0.5)', zIndex: 0, }} />
      <div className="gdlr-page-title-wrapper">
        <div className="gdlr-page-title-overlay" />
        <div className="gdlr-page-title-container container">
          <h1 className="gdlr-page-title">
            Vietnam's leading experienced restaurant
          </h1>
        </div>
      </div>
    </div>
    <div className="container center" style={{ marginTop: "0px", marginLeft: "0px" }}>
          <h2>Các món chính tại đây</h2>
          <p className="desc" style={{ fontSize: "14px" }} >
            Được nhập khẩu từ các nước hàng đầu và chế biến bởi đầu bếp có tay
            nghề cực đỉnh
          </p>
          </div>  
      <div id="gdlr-header-substitute"></div>
      <div className="content-wrapper">
        <div className="gdlr-content">
          <div className="with-sidebar-wrapper">

          </div>
          {/* Below Sidebar Section*/}
        </div>
        {/* gdlr-content */}
        <div className="clear" />
      </div>
      <div id="gdlr-header-substitute"></div>
      {productList}
    </div>
  );
  }

  export default Product;