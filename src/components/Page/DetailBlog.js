import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailBlog() {
    const { id } = useParams();
    const [listRoom, setListRoom] = useState({});
    const fetchDataRoomNew = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/blog/${id}`,
                {
                    headers: {
                        Accept: "application/json"
                    }
                }
            );
            console.log(response.data[0]);
            setListRoom(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchDataRoomNew();
    }, []);
    return (
        <div>

            <div className="gdlr-page-title-wrapper"
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
                <div className="gdlr-page-title-overlay" />
                <div className="gdlr-page-title-container container" style={{ width: '100%', margin: '0 auto', padding: '0 20px', height: '150px' }}>
                    <h1 className="gdlr-page-title" >
                        Kỳ nghỉ dưỡng giữa thiên nhiên tươi đẹp của Đà Nẵng
                    </h1>
                    <span className="gdlr-page-caption">
                        Đắm mình trong bể bơi thư giãn, thưởng thức một vài ly cocktail nhẹ
                        nhàng với khung cảnh biển xanh bất tận mở ra trước mắt.
                    </span>
                    <span className="gdlr-page-caption">
                        Khởi đầu ngày mới tràn đầy sức sống tại phòng tập gym và tái tạo
                        năng lượng tại khu spa, xông hơi.
                    </span>
                </div>
            </div>
            {/* is search */}	<div className="content-wrapper">
                    <div className="gdlr-content">
            <div className="with-sidebar-wrapper">
                    <div className="with-sidebar-container container">
                        <div className="with-sidebar-left eight columns" style={{ width: '65%' }}>
                            <div className="with-sidebar-content twelve columns" style={{ width: '100%' }}>
                                <div className="gdlr-item gdlr-blog-full gdlr-item-start-content">
                                    <article id="post-859" className="post-859 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-fit-row">
                                        <div className="gdlr-standard-style">
                                            <div className="gdlr-blog-thumbnail" style={{ border: 'none', background: 'none', outline: 'none', boxShadow: 'none' }} >
                                                <a href="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/uploads/2015/03/photodune-1576481-relaxing-m.jpg" data-rel="fancybox">
                                                    <img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/uploads/2015/03/photodune-1576481-relaxing-m-750x330.jpg" alt="" width={160} height={70} />
                                                </a>
                                            </div>
                                            <div className="blog-date-wrapper gdlr-title-font">
                                                <span className="blog-date-day">3</span>
                                                <span className="blog-date-month">Dec</span>
                                            </div>
                                            <div className="blog-content-wrapper">
                                                <header className="post-header">
                                                    <div className="gdlr-blog-info gdlr-info"><div className="blog-info blog-author"><i className="fa fa-pencil" /><a href="https://demo.goodlayers.com/hotelmaster/dark/author/gdadmin/" title="Posts by John Doe" rel="author">John Doe</a></div><div className="blog-info blog-comment"><i className="fa fa-comment-o" /><a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/#respond">0</a></div><div className="blog-info blog-category"><i className="fa fa-folder-open-o" /><a href="https://demo.goodlayers.com/hotelmaster/dark/category/blog/" rel="tag">Blog</a><span className="sep">,</span> <a href="https://demo.goodlayers.com/hotelmaster/dark/category/fit-row/" rel="tag">Fit Row</a></div><div className="clear" /></div>
                                                    <h1 className="gdlr-blog-title">Sedial eiusmod tempor</h1>
                                                    <div className="clear" />
                                                </header>{/* entry-header */}
                                                <div className="gdlr-blog-content"><p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa qui officia. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                                                    <p>Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Non equidem invideo, miror magis posuere velit aliquet. Qui ipsorum lingua Celtae, nostra Galli appellantur. Prima luce, cum quibus mons aliud consensu ab eo. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
                                                    <div className="clear" />
                                                    <div className="gdlr-space" style={{ marginTop: '30px' }} />
                                                    <blockquote className="gdlr-align-center">Cum sociis natoque penatus etaed pnis dis parturient montes, scettr aieo ridus mus. Etiam portaem mleyo.</blockquote>
                                                    <div className="clear" />
                                                    <div className="gdlr-space" style={{ marginTop: '30px' }} />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa qui officia. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                                                    <p>Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Non equidem invideo, miror magis posuere velit aliquet. Qui ipsorum lingua Celtae, nostra Galli appellantur. Prima luce, cum quibus mons aliud consensu ab eo. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
                                                    <div className="clear" />
                                                    <div className="gdlr-space" style={{ marginTop: '40px' }} />
                                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
                                                        <tbody>
                                                            <tr>
                                                                <th>Pharetra</th>
                                                                <th>Malesuada</th>
                                                                <th>Cursus</th>
                                                                <th>Euismod</th>
                                                            </tr>
                                                            <tr>
                                                                <td>Ipsum</td>
                                                                <td>Portalion</td>
                                                                <td>Elitesimo</td>
                                                                <td>Aenean</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ipsum</td>
                                                                <td>Portalion</td>
                                                                <td>Elitesimo</td>
                                                                <td>Aenean</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ipsum</td>
                                                                <td>Portalion</td>
                                                                <td>Elitesimo</td>
                                                                <td>Aenean</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ipsum</td>
                                                                <td>Portalion</td>
                                                                <td>Elitesimo</td>
                                                                <td>Aenean</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ipsum</td>
                                                                <td>Portalion</td>
                                                                <td>Elitesimo</td>
                                                                <td>Aenean</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="clear" />
                                                    <div className="gdlr-space" style={{ marginTop: '40px' }} />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa qui officia. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                                                    <p>Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Non equidem invideo, miror magis posuere velit aliquet. Qui ipsorum lingua Celtae, nostra Galli appellantur. Prima luce, cum quibus mons aliud consensu ab eo. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
                                                </div>
                                                <div className="gdlr-single-blog-tag">
                                                </div>
                                            </div> {/* blog content wrapper */}
                                        </div>
                                    </article>{/* #post */}
                                    <div className="gdlr-social-share gdlr-type-enable">
                                        <span className="social-share-title">Share Post:</span>
                                        <a href="http://digg.com/submit?url=https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/&title=Sedial%20eiusmod%20tempor" target="_blank">
                                            <img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/themes/hotelmaster/images/light/social-icon/digg.png" alt="digg-share" width={32} height={32} />
                                        </a>
                                        <a href="https://www.facebook.com/share.php?u=https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/" target="_blank">
                                            <img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/themes/hotelmaster/images/light/social-icon/facebook.png" alt="facebook-share" width={32} height={32} />
                                        </a>
                                        <a href="https://plus.google.com/share?url=https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=500');return false;">
                                            <img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/themes/hotelmaster/images/light/social-icon/google-plus.png" alt="google-share" width={32} height={32} />
                                        </a>
                                        <a href="http://www.linkedin.com/shareArticle?mini=true&url=https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/&title=https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/" target="_blank">
                                            <img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/themes/hotelmaster/images/light/social-icon/linkedin.png" alt="linked-share" width={32} height={32} />
                                        </a>
                                        <a href="https://pinterest.com/pin/create/button/?url=https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/&media=https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2015/03/photodune-1576481-relaxing-m.jpg" className="pin-it-button" count-layout="horizontal" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;">
                                            <img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/themes/hotelmaster/images/light/social-icon/pinterest.png" alt="pinterest-share" width={32} height={32} />
                                        </a>
                                        <a href="http://www.stumbleupon.com/submit?url=https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/&title=Sedial%20eiusmod%20tempor" target="_blank">
                                            <img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/themes/hotelmaster/images/light/social-icon/stumble-upon.png" alt="stumble-upon-share" width={32} height={32} />
                                        </a>
                                        <div className="clear" />
                                    </div>
                                    <nav className="gdlr-single-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
                                        <div className="previous-nav" style={{ flex: 1, textAlign: 'left' }}>
                                            <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/eiusmod-tempor-incidunt/" rel="prev" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                <i className="icon-angle-left" style={{ marginRight: '5px' }} />
                                                <span style={{ fontSize: '0.8em' }}>Eiusmod tempor incidunt</span>
                                            </a>
                                        </div>
                                        <div className="next-nav" style={{ flex: 1, textAlign: 'right' }}>
                                            <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/magna-pars-studiorum/" rel="next" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.8em', marginRight: '5px' }}>Magna pars studiorum</span>
                                                <i className="icon-angle-right" />
                                            </a>
                                        </div>
                                    </nav>{/* .nav-single */}
                                    {/* abou author section */}
                                    <div className="gdlr-post-author">
                                        <h3 className="post-author-title">About Post Author</h3>
                                        <div className="post-author-avartar"><img alt="" src="https://secure.gravatar.com/avatar/666cee72aa11f8f0b5c21c690cdc7dd9?s=90&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/666cee72aa11f8f0b5c21c690cdc7dd9?s=180&d=mm&r=g 2x" className="avatar avatar-90 photo" height={90} width={90} decoding="async" /></div>
                                        <div className="post-author-content">
                                            <h4 className="post-author"><a href="https://demo.goodlayers.com/hotelmaster/dark/author/gdadmin/" title="Posts by John Doe" rel="author">John Doe</a></h4>
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.	</div>
                                        <div className="clear" />
                                    </div>
                                    <div id="comments" className="gdlr-comments-area">
                                        <div id="respond" className="comment-respond">
                                            <h3 id="reply-title" className="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/#respond" style={{ display: 'none' }}>Cancel Reply</a></small></h3><form action="https://demo.goodlayers.com/hotelmaster/dark/wp-comments-post.php" method="post" id="commentform" className="comment-form"><div className="comment-form-comment"><textarea id="comment" name="comment" cols={45} rows={8} aria-required="true" defaultValue={""} /></div><div className="comment-form-head"><input id="author" name="author" type="text" defaultValue data-default="Name*" size={30} aria-required="true" />
                                                <input id="email" name="email" type="text" defaultValue data-default="Email*" size={30} aria-required="true" />
                                                <input id="url" name="url" type="text" defaultValue data-default="Website" size={30} /><div className="clear" /></div>
                                                <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" /><label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
                                                <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" /> <input type="hidden" name="comment_post_ID" defaultValue={859} id="comment_post_ID" />
                                                    <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                                </p>{/* Anti-spam plugin wordpress.org/plugins/anti-spam/ */}<div className="wantispam-required-fields"><input type="hidden" name="wantispam_t" className="wantispam-control wantispam-control-t" defaultValue={1745485467} /><div className="wantispam-group wantispam-group-q" style={{ clear: 'both' }}>
                                                    <label>Current ye@r <span className="required">*</span></label>
                                                    <input type="hidden" name="wantispam_a" className="wantispam-control wantispam-control-a" defaultValue={2025} />
                                                    <input type="text" name="wantispam_q" className="wantispam-control wantispam-control-q" defaultValue="7.3.8" autoComplete="off" />
                                                </div>
                                                    <div className="wantispam-group wantispam-group-e" style={{ display: 'none' }}>
                                                        <label>Leave this field empty</label>
                                                        <input type="text" name="wantispam_e_email_url_website" className="wantispam-control wantispam-control-e" defaultValue autoComplete="off" />
                                                    </div>
                                                </div>{/*\End Anti-spam plugin */}</form>	</div>{/* #respond */}
                                    </div>{/* gdlr-comment-area */}						</div>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="gdlr-sidebar gdlr-right-sidebar four columns" style={{ border: 'none', background: 'none', outline: 'none', boxShadow: 'none' }}>
                            <div className="gdlr-item-start-content sidebar-right-item">
                                <div id="search-3" className="widget widget_search gdlr-item gdlr-widget">
                                    <div className="gdl-search-form">
                                        <form method="get" id="searchform" action="https://demo.goodlayers.com/hotelmaster/dark/">
                                            <div className="search-text" id="search-text">
                                                <input type="text" name="s" id="s" autoComplete="off" placeholder="Type keywords..." />
                                                <button type="submit" id="searchsubmit" class="search-icon"><i class="fa fa-search"></i></button>
                                            </div>
                                            <div className="clear" />
                                        </form>
                                    </div>
                                </div>

                                <div id="text-2" className="widget widget_text gdlr-item gdlr-widget">
                                    <h3 className="gdlr-widget-title">Text Widget</h3>
                                    <div className="clear" />
                                    <div className="textwidget">Morbi leo risus, porta ac consectetur ac, vest ibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. </div>
                                </div>
                                <div id="gdlr-recent-portfolio-widget-2" className="widget widget_gdlr-recent-portfolio-widget gdlr-item gdlr-widget"><h3 className="gdlr-widget-title">Recent Works</h3><div className="clear" /><div className="gdlr-recent-port-widget"><div className="recent-post-widget"><div className="recent-post-widget-thumbnail"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio/thumbnail-open-lightbox/"><img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/uploads/2013/12/140H-150x150.jpg" alt="" width={150} height={150} /></a></div><div className="recent-post-widget-content"><div className="recent-post-widget-title"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio/thumbnail-open-lightbox/">Thumbnail open lightbox</a></div><div className="recent-post-widget-info"><div className="blog-info blog-date"><i className="fa fa-clock-o" /><a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/04/">04 Dec 2013</a></div><div className="clear" /></div></div><div className="clear" /></div><div className="recent-post-widget"><div className="recent-post-widget-thumbnail"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio/thumbnail-open-lightbox-2/"><img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/uploads/2013/12/156H-150x150.jpg" alt="" width={150} height={150} /></a></div><div className="recent-post-widget-content"><div className="recent-post-widget-title"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio/thumbnail-open-lightbox-2/">Thumbnail link to post</a></div><div className="recent-post-widget-info"><div className="blog-info blog-date"><i className="fa fa-clock-o" /><a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/04/">04 Dec 2013</a></div><div className="clear" /></div></div><div className="clear" /></div><div className="recent-post-widget"><div className="recent-post-widget-thumbnail"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio/thumbnail-open-video-lightbox/"><img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/uploads/2013/12/157H-150x150.jpg" alt="" width={150} height={150} /></a></div><div className="recent-post-widget-content"><div className="recent-post-widget-title"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio/thumbnail-open-video-lightbox/">Open video lightbox</a></div><div className="recent-post-widget-info"><div className="blog-info blog-date"><i className="fa fa-clock-o" /><a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/04/">04 Dec 2013</a></div><div className="clear" /></div></div><div className="clear" /></div><div className="clear" /></div></div><div id="recent-comments-3" className="widget widget_recent_comments gdlr-item gdlr-widget"><h3 className="gdlr-widget-title">Recent Comments</h3><div className="clear" /><ul id="recentcomments"><li className="recentcomments"><span className="comment-author-link">John Doe</span> on <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/magna-pars-studiorum/#comment-14">Magna pars studiorum</a></li><li className="recentcomments"><span className="comment-author-link">John Doe</span> on <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/eiusmod-tempor-incidunt/#comment-12">Eiusmod tempor incidunt</a></li><li className="recentcomments"><span className="comment-author-link">John Doe</span> on <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/eiusmod-tempor-incidunt/#comment-11">Eiusmod tempor incidunt</a></li><li className="recentcomments"><span className="comment-author-link">John Doe</span> on <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/donec-luctus-imperdiet/#comment-9">Donec luctus imperdiet</a></li><li className="recentcomments"><span className="comment-author-link">John Doe</span> on <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/11/12/nihilne-te-nocturnum/#comment-15">Nihilne te nocturnum</a></li></ul></div><div id="tag_cloud-2" className="widget widget_tag_cloud gdlr-item gdlr-widget"><h3 className="gdlr-widget-title">Tag Cloud</h3><div className="clear" /><div className="tagcloud"><a href="https://demo.goodlayers.com/hotelmaster/dark/tag/animal/" className="tag-cloud-link tag-link-11 tag-link-position-1" style={{ fontSize: '8pt' }} aria-label="Animal (1 item)">Animal</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/aside/" className="tag-cloud-link tag-link-12 tag-link-position-2" style={{ fontSize: '8pt' }} aria-label="Aside (1 item)">Aside</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/audio/" className="tag-cloud-link tag-link-13 tag-link-position-3" style={{ fontSize: '11.230769230769pt' }} aria-label="Audio (2 items)">Audio</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/blog/" className="tag-cloud-link tag-link-14 tag-link-position-4" style={{ fontSize: '19.666666666667pt' }} aria-label="Blog (8 items)">Blog</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/business/" className="tag-cloud-link tag-link-15 tag-link-position-5" style={{ fontSize: '15.179487179487pt' }} aria-label="Business (4 items)">Business</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/gallery-thumbnail/" className="tag-cloud-link tag-link-16 tag-link-position-6" style={{ fontSize: '8pt' }} aria-label="Gallery Thumbnail (1 item)">Gallery Thumbnail</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/identity-2/" className="tag-cloud-link tag-link-17 tag-link-position-7" style={{ fontSize: '13.384615384615pt' }} aria-label="identity (3 items)">identity</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/life-style/" className="tag-cloud-link tag-link-18 tag-link-position-8" style={{ fontSize: '22pt' }} aria-label="Life Style (11 items)">Life Style</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/link/" className="tag-cloud-link tag-link-19 tag-link-position-9" style={{ fontSize: '11.230769230769pt' }} aria-label="Link (2 items)">Link</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/news/" className="tag-cloud-link tag-link-20 tag-link-position-10" style={{ fontSize: '16.615384615385pt' }} aria-label="News (5 items)">News</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/post-format/" className="tag-cloud-link tag-link-21 tag-link-position-11" style={{ fontSize: '15.179487179487pt' }} aria-label="Post format (4 items)">Post format</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/quote/" className="tag-cloud-link tag-link-22 tag-link-position-12" style={{ fontSize: '8pt' }} aria-label="Quote (1 item)">Quote</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/safari/" className="tag-cloud-link tag-link-23 tag-link-position-13" style={{ fontSize: '8pt' }} aria-label="Safari (1 item)">Safari</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/travel/" className="tag-cloud-link tag-link-24 tag-link-position-14" style={{ fontSize: '8pt' }} aria-label="Travel (1 item)">Travel</a>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/tag/video/" className="tag-cloud-link tag-link-25 tag-link-position-15" style={{ fontSize: '8pt' }} aria-label="Video (1 item)">Video</a></div>
                                </div>	</div>
                        </div>
                        <div className="clear" />
                    </div>
                </div>
            </div>{/* gdlr-content */}
                <div className="clear" />
            </div>{/* content wrapper */}
            <footer className="footer-wrapper">
                <div className="footer-container container">
                    <div className="footer-column three columns" id="footer-widget-1">
                        <div id="text-5" className="widget widget_text gdlr-item gdlr-widget"><h3 className="gdlr-widget-title">Book Now!</h3><div className="clear" />			<div className="textwidget"><p><i className="gdlr-icon fa fa-phone" style={{ color: '#fff', fontSize: '16px' }} /> +1800-222-3333</p>
                            <div className="clear" />
                            <div className="gdlr-space" style={{ marginTop: '-15px' }} />
                            <p><i className="gdlr-icon fa fa-envelope-o" style={{ color: '#fff', fontSize: '16px' }} /> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="daa9bbb6bfa99ab2b5aebfb6b7bba9aebfa8aef4b9b5b7">[email&nbsp;protected]</a></p>
                            <div className="clear" />
                            <div className="gdlr-space" style={{ marginTop: '25px' }} />
                            <p><a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-facebook-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-twitter-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-linkedin-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-google-plus-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-pinterest-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-flickr" style={{ color: '#fff', fontSize: '24px' }} /></a></p>
                        </div>
                        </div>				</div>
                    <div className="footer-column three columns" id="footer-widget-2">
                        <div id="recent-posts-5" className="widget widget_recent_entries gdlr-item gdlr-widget">
                            <h3 className="gdlr-widget-title">Recent News</h3><div className="clear" />
                            <ul>
                                <li>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/2014/03/21/sem-porta-mollis-parturient/">Sem Porta Mollis Parturient</a>
                                </li>
                                <li>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/2014/03/21/nullam-lorem-mattis-purus/">Nullam Lorem Mattis Purus</a>
                                </li>
                                <li>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/2014/03/21/nibh-sem-sit-ullamcorper/">Nibh Sem Sit Ullamcorper</a>
                                </li>
                                <li>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/donec-luctus-imperdiet/">Donec luctus imperdiet</a>
                                </li>
                                <li>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/magna-pars-studiorum/">Magna pars studiorum</a>
                                </li>
                                <li>
                                    <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/" aria-current="page">Sedial eiusmod tempor</a>
                                </li>
                            </ul>
                        </div>				</div>
                    <div className="footer-column six columns" id="footer-widget-3">
                        <div id="text-10" className="widget widget_text gdlr-item gdlr-widget"><h3 className="gdlr-widget-title">Our Awards</h3><div className="clear" />			<div className="textwidget"><img src="https://goodlayers.b-cdn.net/hotelmaster/dark/wp-content/uploads/2017/12/awards-logo-dark.jpg" alt="" />
                            <div className="clear" /><div className="gdlr-space" style={{ marginTop: '20px' }} />
                            Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum.</div>
                        </div>				</div>
                    <div className="clear" />
                </div>
                <div className="copyright-wrapper">
                    <div className="copyright-container container">
                        <div className="copyright-left">
                            <a href="https://demo.goodlayers.com/hotelmaster/dark" style={{ marginRight: '10px' }}>Home</a>|<a href="https://demo.goodlayers.com/hotelmaster/dark/?booking" style={{ marginRight: '10px', marginLeft: '10px' }}>Booking</a> | <a href="https://demo.goodlayers.com/hotelmaster/dark/about-us/" style={{ marginRight: '10px', marginLeft: '10px' }}>About</a> | <a href="https://demo.goodlayers.com/hotelmaster/dark/contact-page/" style={{ marginRight: '10px', marginLeft: '10px' }}>Contact</a>				</div>
                        <div className="copyright-right">
                            Copyright 2015 All Right Reserved				</div>
                        <div className="clear" />
                    </div>
                </div>
            </footer>
            {/* body-wrapper */}
        </div>
    );
}
export default DetailBlog;