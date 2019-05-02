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
      id
      content
      active
      sortOrder
      version
    }
    images {
      id
      file {
        bucket
        region
        key
      }
      active
      sortOrder
      version
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
        id
        content
        active
        sortOrder
        version
      }
      images {
        id
        active
        sortOrder
        version
      }
      tags
      version
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
      id
      content
      active
      sortOrder
      version
    }
    images {
      id
      file {
        bucket
        region
        key
      }
      active
      sortOrder
      version
    }
    tags
    version
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        id
        content
        active
        sortOrder
        version
      }
      images {
        id
        active
        sortOrder
        version
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
    active
    sortOrder
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
      active
      sortOrder
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
    active
    sortOrder
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
      active
      sortOrder
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
export const getSmoothstarRegistration = `query GetSmoothstarRegistration($id: ID!) {
  getSmoothstarRegistration(id: $id) {
    id
    active
    type
    registrationSubmitDate
    registrationApprovedDate
    userId
    videoInfoReviewed
    registrationAttempts
    registrationStatus
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
      registration {
        id
        active
        type
        registrationSubmitDate
        registrationApprovedDate
        userId
        videoInfoReviewed
        registrationAttempts
        registrationStatus
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
      registration {
        id
        active
        type
        registrationSubmitDate
        registrationApprovedDate
        userId
        videoInfoReviewed
        registrationAttempts
        registrationStatus
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
        registrationId
        version
      }
      nextToken
    }
    version
  }
}
`;
export const listSmoothstarRegistrations = `query ListSmoothstarRegistrations(
  $filter: ModelSmoothstarRegistrationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSmoothstarRegistrations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      active
      type
      registrationSubmitDate
      registrationApprovedDate
      userId
      videoInfoReviewed
      registrationAttempts
      registrationStatus
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
export const getRegistrationMedia = `query GetRegistrationMedia($id: ID!) {
  getRegistrationMedia(id: $id) {
    id
    file {
      bucket
      region
      key
    }
    registration {
      id
      active
      type
      registrationSubmitDate
      registrationApprovedDate
      userId
      videoInfoReviewed
      registrationAttempts
      registrationStatus
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
    registrationId
    version
  }
}
`;
export const listRegistrationMedias = `query ListRegistrationMedias(
  $filter: ModelRegistrationMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegistrationMedias(
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
      registration {
        id
        active
        type
        registrationSubmitDate
        registrationApprovedDate
        userId
        videoInfoReviewed
        registrationAttempts
        registrationStatus
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
      registrationId
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
    registration {
      id
      active
      type
      registrationSubmitDate
      registrationApprovedDate
      userId
      videoInfoReviewed
      registrationAttempts
      registrationStatus
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
      registration {
        id
        active
        type
        registrationSubmitDate
        registrationApprovedDate
        userId
        videoInfoReviewed
        registrationAttempts
        registrationStatus
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
    registration {
      id
      active
      type
      registrationSubmitDate
      registrationApprovedDate
      userId
      videoInfoReviewed
      registrationAttempts
      registrationStatus
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
      registration {
        id
        active
        type
        registrationSubmitDate
        registrationApprovedDate
        userId
        videoInfoReviewed
        registrationAttempts
        registrationStatus
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
