import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";
import { useState, useEffect } from "react";
// Step1: find the corresponding file for the slug
// Step2: populate the data on the page

const slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                    {blog && blog.title}
                </h1>
                <div>{blog && blog.content}</div>
            </main>
        </div>
    );
};

export async function getServerSideProps(context) {
    // const router = useRouter();
    // const { slug } = router.query;
    const { slug } = context.query; // Get the slug from the context
    // console.log(slug);
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let myBlog = await data.json();
    return {
        props: { myBlog },
    };
}

export default slug;
