import React, { useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// Step1 : collect all the files from the blogdata folder
// Step2 : iterate through each blog and display them

const Blog = (props) => {
    // console.log(props);
    const [blogs, setBlogs] = useState(props.allBlogs);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async () => {
        let d = await fetch(
            `http://localhost:3000/api/blogs?count=${blogs.length + 2}`
        );
        let data = await d.json();

        // If no new data is returned, we've reached the end
        if (data.length <= blogs.length) {
            setHasMore(false);
            return;
        }

        // Only add new blogs that we don't already have
        const newBlogs = data.slice(blogs.length);
        setBlogs([...blogs, ...newBlogs]);
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {blogs.map((blogitem) => {
                        return (
                            <div
                                key={blogitem.slug}
                                className={styles.blogItem}
                            >
                                <Link href={`/blogpost/${blogitem.slug}`}>
                                    <h3>{blogitem.title}</h3>
                                    <p>{blogitem.content.substr(0, 100)}...</p>
                                </Link>
                                <Link href={`/blogpost/${blogitem.slug}`}>
                                    <button className={styles.btn}>
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </InfiniteScroll>

                {/* {blogs.map((blogitem) => {
                    return (
                        <div key={blogitem.slug} className={styles.blogItem}>
                            <Link href={`/blogpost/${blogitem.slug}`}>
                                <h3>{blogitem.title}</h3>
                                <p>{blogitem.content.substr(0, 100)}...</p>
                            </Link>
                            <Link href={`/blogpost/${blogitem.slug}`}>
                                <button className={styles.btn}>
                                    Read More
                                </button>
                            </Link>
                        </div>
                    );
                })} */}
            </main>
        </div>
    );
};

export async function getServerSideProps(context) {
    // This function runs on the server side before rendering the page
    // It can be used to fetch data and pass it as props
    let data = await fetch("http://localhost:3000/api/blogs?count=2");
    let allBlogs = await data.json();
    return {
        props: { allBlogs }, // Pass the fetched blogs as props
    };
}

export default Blog;
