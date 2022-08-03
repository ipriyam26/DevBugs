// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { Blog } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[] | { [key: string]: string }>
) {
  try {
    let data = await fs.promises.readdir("data");
    let allBlogs: Blog[] = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      let myFile = await fs.promises.readFile(`data/${element}`, "utf8");
      let myBlog: Blog = JSON.parse(myFile);
      allBlogs.push(myBlog);
    }

    res.status(200).json(allBlogs);
  } catch {
    res.status(500).json({ error: "Error" });
  }
}
