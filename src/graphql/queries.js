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
export const getUserInfo = `query GetUserInfo($id: ID!) {
  getUserInfo(id: $id) {
    id
    lastModifiedOn
    lastSigninOn
    active
    email
    phone
    emailVerified
    phoneVerified
    promoEmailPreference
    type
    givenName
    familyName
    locale
    dateOfBirth
    city
    country
    version
  }
}
`;
export const listUserInfos = `query ListUserInfos(
  $filter: ModelUserInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lastModifiedOn
      lastSigninOn
      active
      email
      phone
      emailVerified
      phoneVerified
      promoEmailPreference
      type
      givenName
      familyName
      locale
      dateOfBirth
      city
      country
      version
    }
    nextToken
  }
}
`;
export const getSmoothstarRegisteration = `query GetSmoothstarRegisteration($id: ID!) {
  getSmoothstarRegisteration(id: $id) {
    id
    active
    type
    registerationSubmitDate
    registerationApprovedDate
    userId
    videoInfoReviewed
    registerationAttempts
    registerationStatus
    orderNum
    orderInfo {
      id
      active
      type
      orderNum
      customerId
      customerEmail
      customerPhone
      dateOfPurchase
      cityDelivered
      countryDelivered
      registeration {
        id
        active
        type
        registerationSubmitDate
        registerationApprovedDate
        userId
        videoInfoReviewed
        registerationAttempts
        registerationStatus
        orderNum
        address
        postCode
        region
        dateOfBirth
        smoothstarModel
        purchaseDate
        shopName
        privacyPolicyReviewed
        extendedPolicyReviewed
        termsOfUseReviewed
        version
      }
      version
    }
    address
    postCode
    region
    dateOfBirth
    smoothstarModel
    purchaseDate
    shopName
    ocrInfo {
      id
      active
      type
      file {
        bucket
        region
        key
      }
      ocrStatus
      customerId
      customerEmail
      customerPhone
      orderNum
      address
      postCode
      region
      smoothstarModel
      purchaseDate
      shopName
      cityDelivered
      countryDelivered
      registeration {
        id
        active
        type
        registerationSubmitDate
        registerationApprovedDate
        userId
        videoInfoReviewed
        registerationAttempts
        registerationStatus
        orderNum
        address
        postCode
        region
        dateOfBirth
        smoothstarModel
        purchaseDate
        shopName
        privacyPolicyReviewed
        extendedPolicyReviewed
        termsOfUseReviewed
        version
      }
      version
    }
    privacyPolicyReviewed
    extendedPolicyReviewed
    termsOfUseReviewed
    files {
      items {
        id
        registerationId
        version
      }
      nextToken
    }
    version
  }
}
`;
export const listSmoothstarRegisterations = `query ListSmoothstarRegisterations(
  $filter: ModelSmoothstarRegisterationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSmoothstarRegisterations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      active
      type
      registerationSubmitDate
      registerationApprovedDate
      userId
      videoInfoReviewed
      registerationAttempts
      registerationStatus
      orderNum
      orderInfo {
        id
        active
        type
        orderNum
        customerId
        customerEmail
        customerPhone
        dateOfPurchase
        cityDelivered
        countryDelivered
        version
      }
      address
      postCode
      region
      dateOfBirth
      smoothstarModel
      purchaseDate
      shopName
      ocrInfo {
        id
        active
        type
        ocrStatus
        customerId
        customerEmail
        customerPhone
        orderNum
        address
        postCode
        region
        smoothstarModel
        purchaseDate
        shopName
        cityDelivered
        countryDelivered
        version
      }
      privacyPolicyReviewed
      extendedPolicyReviewed
      termsOfUseReviewed
      files {
        nextToken
      }
      version
    }
    nextToken
  }
}
`;
export const getRegisterationMedia = `query GetRegisterationMedia($id: ID!) {
  getRegisterationMedia(id: $id) {
    id
    file {
      bucket
      region
      key
    }
    registeration {
      id
      active
      type
      registerationSubmitDate
      registerationApprovedDate
      userId
      videoInfoReviewed
      registerationAttempts
      registerationStatus
      orderNum
      orderInfo {
        id
        active
        type
        orderNum
        customerId
        customerEmail
        customerPhone
        dateOfPurchase
        cityDelivered
        countryDelivered
        version
      }
      address
      postCode
      region
      dateOfBirth
      smoothstarModel
      purchaseDate
      shopName
      ocrInfo {
        id
        active
        type
        ocrStatus
        customerId
        customerEmail
        customerPhone
        orderNum
        address
        postCode
        region
        smoothstarModel
        purchaseDate
        shopName
        cityDelivered
        countryDelivered
        version
      }
      privacyPolicyReviewed
      extendedPolicyReviewed
      termsOfUseReviewed
      files {
        nextToken
      }
      version
    }
    registerationId
    version
  }
}
`;
export const listRegisterationMedias = `query ListRegisterationMedias(
  $filter: ModelRegisterationMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegisterationMedias(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      file {
        bucket
        region
        key
      }
      registeration {
        id
        active
        type
        registerationSubmitDate
        registerationApprovedDate
        userId
        videoInfoReviewed
        registerationAttempts
        registerationStatus
        orderNum
        address
        postCode
        region
        dateOfBirth
        smoothstarModel
        purchaseDate
        shopName
        privacyPolicyReviewed
        extendedPolicyReviewed
        termsOfUseReviewed
        version
      }
      registerationId
      version
    }
    nextToken
  }
}
`;
export const getOrderInfo = `query GetOrderInfo($id: ID!) {
  getOrderInfo(id: $id) {
    id
    active
    type
    orderNum
    customerId
    customerEmail
    customerPhone
    dateOfPurchase
    cityDelivered
    countryDelivered
    registeration {
      id
      active
      type
      registerationSubmitDate
      registerationApprovedDate
      userId
      videoInfoReviewed
      registerationAttempts
      registerationStatus
      orderNum
      orderInfo {
        id
        active
        type
        orderNum
        customerId
        customerEmail
        customerPhone
        dateOfPurchase
        cityDelivered
        countryDelivered
        version
      }
      address
      postCode
      region
      dateOfBirth
      smoothstarModel
      purchaseDate
      shopName
      ocrInfo {
        id
        active
        type
        ocrStatus
        customerId
        customerEmail
        customerPhone
        orderNum
        address
        postCode
        region
        smoothstarModel
        purchaseDate
        shopName
        cityDelivered
        countryDelivered
        version
      }
      privacyPolicyReviewed
      extendedPolicyReviewed
      termsOfUseReviewed
      files {
        nextToken
      }
      version
    }
    version
  }
}
`;
export const listOrderInfos = `query ListOrderInfos(
  $filter: ModelOrderInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      active
      type
      orderNum
      customerId
      customerEmail
      customerPhone
      dateOfPurchase
      cityDelivered
      countryDelivered
      registeration {
        id
        active
        type
        registerationSubmitDate
        registerationApprovedDate
        userId
        videoInfoReviewed
        registerationAttempts
        registerationStatus
        orderNum
        address
        postCode
        region
        dateOfBirth
        smoothstarModel
        purchaseDate
        shopName
        privacyPolicyReviewed
        extendedPolicyReviewed
        termsOfUseReviewed
        version
      }
      version
    }
    nextToken
  }
}
`;
export const getOcrInfo = `query GetOcrInfo($id: ID!) {
  getOCRInfo(id: $id) {
    id
    active
    type
    file {
      bucket
      region
      key
    }
    ocrStatus
    customerId
    customerEmail
    customerPhone
    orderNum
    address
    postCode
    region
    smoothstarModel
    purchaseDate
    shopName
    cityDelivered
    countryDelivered
    registeration {
      id
      active
      type
      registerationSubmitDate
      registerationApprovedDate
      userId
      videoInfoReviewed
      registerationAttempts
      registerationStatus
      orderNum
      orderInfo {
        id
        active
        type
        orderNum
        customerId
        customerEmail
        customerPhone
        dateOfPurchase
        cityDelivered
        countryDelivered
        version
      }
      address
      postCode
      region
      dateOfBirth
      smoothstarModel
      purchaseDate
      shopName
      ocrInfo {
        id
        active
        type
        ocrStatus
        customerId
        customerEmail
        customerPhone
        orderNum
        address
        postCode
        region
        smoothstarModel
        purchaseDate
        shopName
        cityDelivered
        countryDelivered
        version
      }
      privacyPolicyReviewed
      extendedPolicyReviewed
      termsOfUseReviewed
      files {
        nextToken
      }
      version
    }
    version
  }
}
`;
export const listOcrInfos = `query ListOcrInfos(
  $filter: ModelOCRInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listOCRInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      active
      type
      file {
        bucket
        region
        key
      }
      ocrStatus
      customerId
      customerEmail
      customerPhone
      orderNum
      address
      postCode
      region
      smoothstarModel
      purchaseDate
      shopName
      cityDelivered
      countryDelivered
      registeration {
        id
        active
        type
        registerationSubmitDate
        registerationApprovedDate
        userId
        videoInfoReviewed
        registerationAttempts
        registerationStatus
        orderNum
        address
        postCode
        region
        dateOfBirth
        smoothstarModel
        purchaseDate
        shopName
        privacyPolicyReviewed
        extendedPolicyReviewed
        termsOfUseReviewed
        version
      }
      version
    }
    nextToken
  }
}
`;
