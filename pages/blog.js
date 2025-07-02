import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step1 : collect all the files from the blogdata folder
// Step2 : iterate through each blog and display them

const Blog = (props) => {
    // console.log(props);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {props.allBlogs.map((blogitem) => {
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
                })}
            </main>
        </div>
    );
};

export async function getServerSideProps(context) {
    // This function runs on the server side before rendering the page
    // It can be used to fetch data and pass it as props
    let data = await fetch("http://localhost:3000/api/blogs");
    let allBlogs = await data.json();
    return {
        props: { allBlogs }, // Pass the fetched blogs as props
    };
}

export default Blog;
