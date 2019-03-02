// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateNews = `subscription OnCreateNews {
  onCreateNews {
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
export const onUpdateNews = `subscription OnUpdateNews {
  onUpdateNews {
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
export const onDeleteNews = `subscription OnDeleteNews {
  onDeleteNews {
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
export const onCreateParagraph = `subscription OnCreateParagraph {
  onCreateParagraph {
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
export const onUpdateParagraph = `subscription OnUpdateParagraph {
  onUpdateParagraph {
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
export const onDeleteParagraph = `subscription OnDeleteParagraph {
  onDeleteParagraph {
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
export const onCreateMedia = `subscription OnCreateMedia {
  onCreateMedia {
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
export const onUpdateMedia = `subscription OnUpdateMedia {
  onUpdateMedia {
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
export const onDeleteMedia = `subscription OnDeleteMedia {
  onDeleteMedia {
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
