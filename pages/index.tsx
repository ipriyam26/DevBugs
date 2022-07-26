import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import coder from "../public/home.jpg";
import Link from "next/link";

const Home: NextPage = () => {
  const desc: string =
    "Dev Bugs is a blog about programming and software development. It covers programming languages, software development tools, tips and tricks, and other aspects of the software development process. The blog is written by a team of experienced software developers and is aimed at helping developers of all levels improve their skills and become more productive.";
  interface blogs {
    title: string;
    date: string;
    description: string;
    author: string;
  }
  const recent: blogs[] = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?",
      date: "2020-01-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio consequuntur, cumque asperiores recusandae, saepe, itaque corporis aliquid impedit sunt nisi obcaecati! Quam totam, minus voluptas alias, modi ducimus suscipit necessitatibus repudiandae odio ipsum doloribus labore maxime molestias! Eveniet voluptates dignissimos dolorum repellendus aliquam inventore nobis id error mollitia iste?",
     author: "Lorem, ipsum."
    },
        {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?",
      date: "2020-01-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio consequuntur, cumque asperiores recusandae, saepe, itaque corporis aliquid impedit sunt nisi obcaecati! Quam totam, minus voluptas alias, modi ducimus suscipit necessitatibus repudiandae odio ipsum doloribus labore maxime molestias! Eveniet voluptates dignissimos dolorum repellendus aliquam inventore nobis id error mollitia iste?",
     author: "Lorem, ipsum."
    },
        {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?",
      date: "2020-01-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio consequuntur, cumque asperiores recusandae, saepe, itaque corporis aliquid impedit sunt nisi obcaecati! Quam totam, minus voluptas alias, modi ducimus suscipit necessitatibus repudiandae odio ipsum doloribus labore maxime molestias! Eveniet voluptates dignissimos dolorum repellendus aliquam inventore nobis id error mollitia iste?",
     author: "Lorem, ipsum."
    },
        {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?",
      date: "2020-01-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio consequuntur, cumque asperiores recusandae, saepe, itaque corporis aliquid impedit sunt nisi obcaecati! Quam totam, minus voluptas alias, modi ducimus suscipit necessitatibus repudiandae odio ipsum doloribus labore maxime molestias! Eveniet voluptates dignissimos dolorum repellendus aliquam inventore nobis id error mollitia iste?",
     author: "Lorem, ipsum."
    },
        {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?",
      date: "2020-01-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio consequuntur, cumque asperiores recusandae, saepe, itaque corporis aliquid impedit sunt nisi obcaecati! Quam totam, minus voluptas alias, modi ducimus suscipit necessitatibus repudiandae odio ipsum doloribus labore maxime molestias! Eveniet voluptates dignissimos dolorum repellendus aliquam inventore nobis id error mollitia iste?",
     author: "Lorem, ipsum."
    },
        {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?",
      date: "2020-01-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio consequuntur, cumque asperiores recusandae, saepe, itaque corporis aliquid impedit sunt nisi obcaecati! Quam totam, minus voluptas alias, modi ducimus suscipit necessitatibus repudiandae odio ipsum doloribus labore maxime molestias! Eveniet voluptates dignissimos dolorum repellendus aliquam inventore nobis id error mollitia iste?",
     author: "Lorem, ipsum."
    },
        {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?",
      date: "2020-01-01",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio consequuntur, cumque asperiores recusandae, saepe, itaque corporis aliquid impedit sunt nisi obcaecati! Quam totam, minus voluptas alias, modi ducimus suscipit necessitatibus repudiandae odio ipsum doloribus labore maxime molestias! Eveniet voluptates dignissimos dolorum repellendus aliquam inventore nobis id error mollitia iste?",
     author: "Lorem, ipsum."
    },
    
  ];


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Debugging Bugs</h1>
        <Image
          src={coder}
          alt="Image of a coder"
          height={345}
          width={518}
        ></Image>
        <p>{desc}</p>
      </div>
      <div>
        <h2>
          Recent Blogs
          <ul>
            <li>
              <h4>Lorem ipsum dolor sit amet.</h4>
              <p>
                <strong>Author: </strong>Lorem, ipsum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad
                totam sed aliquid voluptates velit obcaecati tenetur reiciendis
                quibusdam dolorum nihil harum vel voluptate qui magnam voluptas
                repellat, pariatur repudiandae excepturi beatae placeat officia?
                Hic?
              </p>
            </li>

          </ul>
        </h2>
      </div>
    </>
  );
};

export default Home;
