export function buildFeed(posts) {
  const sortedPosts = posts.sort(function (first, second) {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });
  const feedItems = [];

  feedItems.push(
    ...sortedPosts.map(function (post) {
      //   const $ = cheerio.load(post.content, { decodeEntities: false });
      //   $("a[href^='/],img[src^='/]").each(function (post){
      //       const $this = $(post);
      //       if ($this.attr("href")){
      //           $this.attr("href",`https://localhost:4000/${$this.attr("href")}`);
      //       }
      //       if ($this.attr("src")){
      //           $this.attr("src",`https://localhost:4000/${$this.attr("src")}`)
      //       }
      //   })

      //   const postContent = $("body").html()

      const feedItem = {
        item: [
          { title: post.title },
          {
            pubDate: new Date(post.date).toUTCString(),
          },
          {
            guid: [
              { _attr: { isPermaLink: true } },
              `https://localhost:4000/${post.slug}/`,
            ],
          },
          {
            description: {
              _cdata: post.content,
            },
          },
        ],
      };
      return feedItem;
    })
  );
  return feedItems;
}
