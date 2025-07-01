// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogdata");

    // Get count parameter or default to all files
    const count = req.query.count ? parseInt(req.query.count) : data.length;

    // Slice to get only the requested number of files
    data = data.slice(0, count);

    let myfile;
    let allblogs = [];
    for (let idx = 0; idx < data.length; idx++) {
        const item = data[idx];
        // console.log(item);
        myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
        // console.log(myfile);
        const blogData = JSON.parse(myfile);
        // Add slug from filename (remove .json extension)
        blogData.slug = item.replace(".json", "");
        allblogs.push(blogData);
    }
    res.status(200).json(allblogs);
}
