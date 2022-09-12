import { buildFeed } from './buildFeed.js';
import {posts} from "../model/posts.js";


export const xmlFeedObject = {
    rss: [
      {
        _attr: {
          version: "2.0",
          "xmlns:atom": "http://www.w3.org/2005/Atom",
        },
      },
      {
        channel: [
          {
            "atom:link": {
              _attr: {
                href: "http://localhost:4000/feed.rss",
                rel: "self",
                type: "application/rss+xml",
              },
            },
          },
          {
            title: "PodCast",
          },
          {
            link: "http://localhost:4000/",
          },
          { description: "To listen PodCast on my website" },
          { language: "en-US" },
          ...buildFeed(posts),
        ],
      },
    ],
  };