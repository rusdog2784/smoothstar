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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createParagraph = `mutation CreateParagraph($input: CreateParagraphInput!) {
  createParagraph(input: $input) {
    id
    content
    active
    sortOrder
    version
  }
}
`;
export const updateParagraph = `mutation UpdateParagraph($input: UpdateParagraphInput!) {
  updateParagraph(input: $input) {
    id
    content
    active
    sortOrder
    version
  }
}
`;
export const deleteParagraph = `mutation DeleteParagraph($input: DeleteParagraphInput!) {
  deleteParagraph(input: $input) {
    id
    content
    active
    sortOrder
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
    active
    sortOrder
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
    active
    sortOrder
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
    active
    sortOrder
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
export const createSmoothstarRegistration = `mutation CreateSmoothstarRegistration(
  $input: CreateSmoothstarRegistrationInput!
) {
  createSmoothstarRegistration(input: $input) {
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
export const updateSmoothstarRegistration = `mutation UpdateSmoothstarRegistration(
  $input: UpdateSmoothstarRegistrationInput!
) {
  updateSmoothstarRegistration(input: $input) {
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
export const deleteSmoothstarRegistration = `mutation DeleteSmoothstarRegistration(
  $input: DeleteSmoothstarRegistrationInput!
) {
  deleteSmoothstarRegistration(input: $input) {
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
export const createRegistrationMedia = `mutation CreateRegistrationMedia($input: CreateRegistrationMediaInput!) {
  createRegistrationMedia(input: $input) {
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
export const updateRegistrationMedia = `mutation UpdateRegistrationMedia($input: UpdateRegistrationMediaInput!) {
  updateRegistrationMedia(input: $input) {
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
export const deleteRegistrationMedia = `mutation DeleteRegistrationMedia($input: DeleteRegistrationMediaInput!) {
  deleteRegistrationMedia(input: $input) {
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
