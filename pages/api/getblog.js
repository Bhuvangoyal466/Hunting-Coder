// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=learnjs
import * as fs from "fs";

export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
        // console.log(req.query.slug);
        if (err) {
            res.status(404).json({ error: "Blog not found" });
            return;
        }
        // Send the parsed JSON data directly, not nested in a data property
        res.status(200).json(JSON.parse(data));
    });
}
