// eslint-disable
// this is an auto generated file. This will be overwritten

export const getNews = `query GetNews($id: ID!) {
  getNews(id: $id) {
    id
    publishedOn
    active
    title
    rawContent
    imgTitle {
      bucket
      region
      key
    }
    imgThumbnail {
      bucket
      region
      key
    }
    paragraphs {
      items {
        id
        content
        version
      }
      nextToken
    }
    images {
      items {
        id
        version
      }
      nextToken
    }
    tags
    version
  }
}
`;
export const listNewss = `query ListNewss(
  $filter: ModelNewsFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      publishedOn
      active
      title
      rawContent
      imgTitle {
        bucket
        region
        key
      }
      imgThumbnail {
        bucket
        region
        key
      }
      paragraphs {
        nextToken
      }
      images {
        nextToken
      }
      tags
      version
    }
    nextToken
  }
}
`;
export const getParagraph = `query GetParagraph($id: ID!) {
  getParagraph(id: $id) {
    id
    content
    news {
      id
      publishedOn
      active
      title
      rawContent
      imgTitle {
        bucket
        region
        key
      }
      imgThumbnail {
        bucket
        region
        key
      }
      paragraphs {
        nextToken
      }
      images {
        nextToken
      }
      tags
      version
    }
    version
  }
}
`;
export const listParagraphs = `query ListParagraphs(
  $filter: ModelParagraphFilterInput
  $limit: Int
  $nextToken: String
) {
  listParagraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      news {
        id
        publishedOn
        active
        title
        rawContent
        tags
        version
      }
      version
    }
    nextToken
  }
}
`;
export const getMedia = `query GetMedia($id: ID!) {
  getMedia(id: $id) {
    id
    file {
      bucket
      region
      key
    }
    news {
      id
      publishedOn
      active
      title
      rawContent
      imgTitle {
        bucket
        region
        key
      }
      imgThumbnail {
        bucket
        region
        key
      }
      paragraphs {
        nextToken
      }
      images {
        nextToken
      }
      tags
      version
    }
    version
  }
}
`;
export const listMedias = `query ListMedias(
  $filter: ModelMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      file {
        bucket
        region
        key
      }
      news {
        id
        publishedOn
        active
        title
        rawContent
        tags
        version
      }
      version
    }
    nextToken
  }
}
`;
