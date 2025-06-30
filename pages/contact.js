import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { useSearchParams } from "next/navigation";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone, desc);
        const data = { phone, email, name, desc };
        fetch("http://localhost:3000/api/postcontact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Thank you for contacting us!");
                setName("");
                setEmail("");
                setPhone("");
                setDesc("");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert(
                    "There was an error submitting your form. Please try again later."
                );
            });
    };
    const handleChange = (e) => {
        if (e.target.name == "phone") {
            setPhone(e.target.value);
        } else if (e.target.name == "email") {
            setEmail(e.target.value);
        } else if (e.target.name == "name") {
            setName(e.target.value);
        } else if (e.target.name == "desc") {
            setDesc(e.target.value);
        }
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label htmlFor="name" className={styles.formlabel}>
                        Enter Your Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="email" className={styles.formlabel}>
                        Email address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                        name="email"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.formlabel}>
                        Phone
                    </label>
                    <input
                        type="phone"
                        value={phone}
                        onChange={handleChange}
                        className="form-control"
                        id="phone"
                        name="phone"
                    />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="desc" className={styles.formlabel}>
                        Elaborate your concern
                    </label>
                    <textarea
                        className="form-control"
                        placeholder="Enter your concern here"
                        id="desc"
                        name="desc"
                        value={desc}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
