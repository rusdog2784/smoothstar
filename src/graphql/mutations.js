// eslint-disable
// this is an auto generated file. This will be overwritten

export const createNews = `mutation CreateNews($input: CreateNewsInput!) {
  createNews(input: $input) {
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
export const updateNews = `mutation UpdateNews($input: UpdateNewsInput!) {
  updateNews(input: $input) {
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
export const deleteNews = `mutation DeleteNews($input: DeleteNewsInput!) {
  deleteNews(input: $input) {
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
export const createParagraph = `mutation CreateParagraph($input: CreateParagraphInput!) {
  createParagraph(input: $input) {
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
export const updateParagraph = `mutation UpdateParagraph($input: UpdateParagraphInput!) {
  updateParagraph(input: $input) {
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
export const deleteParagraph = `mutation DeleteParagraph($input: DeleteParagraphInput!) {
  deleteParagraph(input: $input) {
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
export const createMedia = `mutation CreateMedia($input: CreateMediaInput!) {
  createMedia(input: $input) {
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
export const updateMedia = `mutation UpdateMedia($input: UpdateMediaInput!) {
  updateMedia(input: $input) {
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
export const deleteMedia = `mutation DeleteMedia($input: DeleteMediaInput!) {
  deleteMedia(input: $input) {
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
