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
    newsParagraphs {
      items {
        id
        content
        active
        sortOrder
        version
      }
      nextToken
    }
    newsImages {
      items {
        id
        active
        sortOrder
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
      newsParagraphs {
        items {
          id
          sortOrder
          content
        }
      }
      newsImages {
        items {
          id
          sortOrder
          file {
            bucket
            key
            region
          }
        }
      }
      tags
      version
    }
    nextToken
  }
}
`;
export const getNewsParagraph = `query GetNewsParagraph($id: ID!) {
  getNewsParagraph(id: $id) {
    id
    content
    active
    sortOrder
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
      newsParagraphs {
        nextToken
      }
      newsImages {
        nextToken
      }
      tags
      version
    }
    version
  }
}
`;
export const listNewsParagraphs = `query ListNewsParagraphs(
  $filter: ModelNewsParagraphFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewsParagraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      active
      sortOrder
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
export const getNewsMedium = `query GetNewsMedium($id: ID!) {
  getNewsMedium(id: $id) {
    id
    file {
      bucket
      region
      key
    }
    active
    sortOrder
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
      newsParagraphs {
        nextToken
      }
      newsImages {
        nextToken
      }
      tags
      version
    }
    version
  }
}
`;
export const listNewsMediums = `query ListNewsMediums(
  $filter: ModelNewsMediumFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewsMediums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      file {
        bucket
        region
        key
      }
      active
      sortOrder
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
    eventParagraphs {
      items {
        id
        content
        active
        sortOrder
        version
      }
      nextToken
    }
    eventImages {
      items {
        id
        active
        sortOrder
        version
      }
      nextToken
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
      eventParagraphs {
        items {
          id
          sortOrder
          content
        }
      }
      eventImages {
        items {
          id
          sortOrder
          file {
            bucket
            key
            region
          }
        }
      }
      tags
      version
    }
    nextToken
  }
}
`;
export const getEventParagraph = `query GetEventParagraph($id: ID!) {
  getEventParagraph(id: $id) {
    id
    content
    active
    sortOrder
    event {
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
      eventParagraphs {
        nextToken
      }
      eventImages {
        nextToken
      }
      tags
      version
    }
    version
  }
}
`;
export const listEventParagraphs = `query ListEventParagraphs(
  $filter: ModelEventParagraphFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventParagraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      active
      sortOrder
      event {
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
export const getEventMedium = `query GetEventMedium($id: ID!) {
  getEventMedium(id: $id) {
    id
    file {
      bucket
      region
      key
    }
    active
    sortOrder
    event {
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
      eventParagraphs {
        nextToken
      }
      eventImages {
        nextToken
      }
      tags
      version
    }
    version
  }
}
`;
export const listEventMediums = `query ListEventMediums(
  $filter: ModelEventMediumFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventMediums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      file {
        bucket
        region
        key
      }
      active
      sortOrder
      event {
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
    phone_number
    email_verified
    phone_number_verified
    promo_email_preference
    type
    given_name
    family_name
    gender
    locale
    birthdate
    city
    country
    tokens {
      items {
        id
        active
        pushToken
        deviceType
        version
      }
      nextToken
    }
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
      phone_number
      email_verified
      phone_number_verified
      promo_email_preference
      type
      given_name
      family_name
      gender
      locale
      birthdate
      city
      country
      tokens {
        nextToken
      }
      version
    }
    nextToken
  }
}
`;
export const getDevicePushToken = `query GetDevicePushToken($id: ID!) {
  getDevicePushToken(id: $id) {
    id
    active
    pushToken
    deviceType
    user {
      id
      lastModifiedOn
      lastSigninOn
      active
      email
      phone_number
      email_verified
      phone_number_verified
      promo_email_preference
      type
      given_name
      family_name
      gender
      locale
      birthdate
      city
      country
      tokens {
        nextToken
      }
      version
    }
    version
  }
}
`;
export const listDevicePushTokens = `query ListDevicePushTokens(
  $filter: ModelDevicePushTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevicePushTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      active
      pushToken
      deviceType
      user {
        id
        lastModifiedOn
        lastSigninOn
        active
        email
        phone_number
        email_verified
        phone_number_verified
        promo_email_preference
        type
        given_name
        family_name
        gender
        locale
        birthdate
        city
        country
        version
      }
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
