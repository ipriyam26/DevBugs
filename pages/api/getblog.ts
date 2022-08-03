import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { Blog } from "../../types";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog | { [key: string]: string }>
) {
  try {
    let data = await fs.promises.readFile(
      `data/${req.query.slug}.json`,
      "utf8"
    );

    let myBlog: Blog = JSON.parse(data);

    res.status(200).json(myBlog);
  } catch {
    res.status(500).json({ error: "Error" });
  }
}
