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
export const onCreateNewsParagraph = `subscription OnCreateNewsParagraph {
  onCreateNewsParagraph {
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
export const onUpdateNewsParagraph = `subscription OnUpdateNewsParagraph {
  onUpdateNewsParagraph {
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
export const onDeleteNewsParagraph = `subscription OnDeleteNewsParagraph {
  onDeleteNewsParagraph {
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
export const onCreateNewsMedium = `subscription OnCreateNewsMedium {
  onCreateNewsMedium {
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
export const onUpdateNewsMedium = `subscription OnUpdateNewsMedium {
  onUpdateNewsMedium {
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
export const onDeleteNewsMedium = `subscription OnDeleteNewsMedium {
  onDeleteNewsMedium {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateEventParagraph = `subscription OnCreateEventParagraph {
  onCreateEventParagraph {
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
export const onUpdateEventParagraph = `subscription OnUpdateEventParagraph {
  onUpdateEventParagraph {
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
export const onDeleteEventParagraph = `subscription OnDeleteEventParagraph {
  onDeleteEventParagraph {
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
export const onCreateEventMedium = `subscription OnCreateEventMedium {
  onCreateEventMedium {
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
export const onUpdateEventMedium = `subscription OnUpdateEventMedium {
  onUpdateEventMedium {
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
export const onDeleteEventMedium = `subscription OnDeleteEventMedium {
  onDeleteEventMedium {
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
export const onCreateUserInfo = `subscription OnCreateUserInfo {
  onCreateUserInfo {
    id
    lastModifiedOn
    lastSigninOn
    active
    email
    phone_number
    email_verified
    phone_number_verified
    promoEmailPreference
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
}
`;
export const onUpdateUserInfo = `subscription OnUpdateUserInfo {
  onUpdateUserInfo {
    id
    lastModifiedOn
    lastSigninOn
    active
    email
    phone_number
    email_verified
    phone_number_verified
    promoEmailPreference
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
}
`;
export const onDeleteUserInfo = `subscription OnDeleteUserInfo {
  onDeleteUserInfo {
    id
    lastModifiedOn
    lastSigninOn
    active
    email
    phone_number
    email_verified
    phone_number_verified
    promoEmailPreference
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
}
`;
export const onCreateSmoothstarRegistration = `subscription OnCreateSmoothstarRegistration {
  onCreateSmoothstarRegistration {
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
export const onUpdateSmoothstarRegistration = `subscription OnUpdateSmoothstarRegistration {
  onUpdateSmoothstarRegistration {
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
export const onDeleteSmoothstarRegistration = `subscription OnDeleteSmoothstarRegistration {
  onDeleteSmoothstarRegistration {
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
export const onCreateRegistrationMedia = `subscription OnCreateRegistrationMedia {
  onCreateRegistrationMedia {
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
export const onUpdateRegistrationMedia = `subscription OnUpdateRegistrationMedia {
  onUpdateRegistrationMedia {
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
export const onDeleteRegistrationMedia = `subscription OnDeleteRegistrationMedia {
  onDeleteRegistrationMedia {
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
export const onCreateOrderInfo = `subscription OnCreateOrderInfo {
  onCreateOrderInfo {
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
export const onUpdateOrderInfo = `subscription OnUpdateOrderInfo {
  onUpdateOrderInfo {
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
export const onDeleteOrderInfo = `subscription OnDeleteOrderInfo {
  onDeleteOrderInfo {
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
export const onCreateOcrInfo = `subscription OnCreateOcrInfo {
  onCreateOCRInfo {
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
export const onUpdateOcrInfo = `subscription OnUpdateOcrInfo {
  onUpdateOCRInfo {
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
export const onDeleteOcrInfo = `subscription OnDeleteOcrInfo {
  onDeleteOCRInfo {
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
