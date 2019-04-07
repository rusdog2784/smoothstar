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
export const createUserInfo = `mutation CreateUserInfo($input: CreateUserInfoInput!) {
  createUserInfo(input: $input) {
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
export const updateUserInfo = `mutation UpdateUserInfo($input: UpdateUserInfoInput!) {
  updateUserInfo(input: $input) {
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
export const deleteUserInfo = `mutation DeleteUserInfo($input: DeleteUserInfoInput!) {
  deleteUserInfo(input: $input) {
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
export const createSmoothstarRegisteration = `mutation CreateSmoothstarRegisteration(
  $input: CreateSmoothstarRegisterationInput!
) {
  createSmoothstarRegisteration(input: $input) {
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
export const updateSmoothstarRegisteration = `mutation UpdateSmoothstarRegisteration(
  $input: UpdateSmoothstarRegisterationInput!
) {
  updateSmoothstarRegisteration(input: $input) {
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
export const deleteSmoothstarRegisteration = `mutation DeleteSmoothstarRegisteration(
  $input: DeleteSmoothstarRegisterationInput!
) {
  deleteSmoothstarRegisteration(input: $input) {
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
export const createRegisterationMedia = `mutation CreateRegisterationMedia($input: CreateRegisterationMediaInput!) {
  createRegisterationMedia(input: $input) {
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
export const updateRegisterationMedia = `mutation UpdateRegisterationMedia($input: UpdateRegisterationMediaInput!) {
  updateRegisterationMedia(input: $input) {
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
export const deleteRegisterationMedia = `mutation DeleteRegisterationMedia($input: DeleteRegisterationMediaInput!) {
  deleteRegisterationMedia(input: $input) {
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
export const createOrderInfo = `mutation CreateOrderInfo($input: CreateOrderInfoInput!) {
  createOrderInfo(input: $input) {
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
export const updateOrderInfo = `mutation UpdateOrderInfo($input: UpdateOrderInfoInput!) {
  updateOrderInfo(input: $input) {
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
export const deleteOrderInfo = `mutation DeleteOrderInfo($input: DeleteOrderInfoInput!) {
  deleteOrderInfo(input: $input) {
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
export const createOcrInfo = `mutation CreateOcrInfo($input: CreateOCRInfoInput!) {
  createOCRInfo(input: $input) {
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
export const updateOcrInfo = `mutation UpdateOcrInfo($input: UpdateOCRInfoInput!) {
  updateOCRInfo(input: $input) {
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
export const deleteOcrInfo = `mutation DeleteOcrInfo($input: DeleteOCRInfoInput!) {
  deleteOCRInfo(input: $input) {
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
