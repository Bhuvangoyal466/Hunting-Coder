import React from "react";
import styles from "../styles/About.module.css";

const about = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>About Hunting Coder</h1>
            <h2 className={styles.h2}>Introduction</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                minima soluta repellendus tempora quia? Dolorem cumque molestias
                dolorum dicta non dolor culpa voluptate reiciendis nulla! Ut
                molestias cupiditate commodi voluptas mollitia similique ea
                labore, quae, quo nesciunt vitae. Distinctio, fugit, dolores
                iste rem odio est quis et eaque ea repellendus totam ratione
                recusandae explicabo quod dicta eos placeat praesentium vitae
                sint magnam corrupti dolorem sunt? Qui illo eveniet magni ea
                neque unde voluptatibus suscipit tempora quod?
            </p>
            <h2 className={styles.h2}>Services Offered</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                qui quis soluta, molestiae modi cupiditate quasi ad magnam
                eveniet iste! Laboriosam assumenda, neque cupiditate, error
                impedit eaque expedita dolor molestias architecto quia fuga
                tempore.
            </p>
            <p className={styles.p}>We offer the following Services</p>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
                <li>Service 6</li>
            </ul>
            <h2 className={styles.h2}>Contact Us</h2>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos qui est quae aut nulla nobis molestias quidem,
                recusandae, minima labore dolor quos natus omnis repellendus,
                aliquam necessitatibus? Tempore sit facere eaque iusto culpa
                laudantium earum eum possimus similique, error natus dolores,
                corporis excepturi quam at tempora alias expedita?
                Necessitatibus cupiditate deleniti eligendi vero unde aperiam
                labore.
            </p>
        </div>
    );
};

export default about;
