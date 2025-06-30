import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const about = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.mySpan}>About Us</h1>
            <Image
                className={styles.myImg}
                src="/about.jpeg"
                height={300}
                width={400}
                alt="About Image"
            />
            <div className={styles.about}>
                <p>
                    Welcome to our digital den for developers — a blog-based
                    platform created to fuel your coding journey. From freshers
                    exploring their first `Hello World` to pros architecting
                    scalable systems, we’ve got content tailored for every skill
                    level. Our mission? To simplify complex tech, share
                    real-world insights, and help you stay ahead in the
                    ever-evolving world of software development.
                </p>
                <br></br>
                <p>
                    Here, you’ll find hands-on tutorials, deep dives into
                    frameworks, DSA breakdowns, AI/ML guides, project ideas, and
                    honest takes on life as a coder. We don’t just talk syntax —
                    we talk systems, strategy, and stories that help you grow.
                    Whether you’re building your first full-stack app or trying
                    to master system design interviews, this is your space to
                    learn and level up.
                </p>
                <br></br>
                <p>
                    Stay curious. Keep building. Let’s decode the future
                    together. Join our community of passionate developers, share
                    your experiences, and let’s embark on this coding adventure
                    together. Happy coding!
                </p>
                <br></br>
            </div>
        </div>
    );
};

export default about;
