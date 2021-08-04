import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";

import "../blog.scss";

const Blog = () => {
    useEffect(() => {
        document.title = "Blog | Editorial TED";
    }, []);

    return (
        <div className="ted-blog">
            <HeaderBar title="Blog" link="blog" />
            <div>Blog</div>
            <Footer />
        </div>
    );
};

export default Blog;
