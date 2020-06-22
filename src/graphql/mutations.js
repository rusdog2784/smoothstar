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
export const createNewsParagraph = `mutation CreateNewsParagraph($input: CreateNewsParagraphInput!) {
  createNewsParagraph(input: $input) {
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
export const updateNewsParagraph = `mutation UpdateNewsParagraph($input: UpdateNewsParagraphInput!) {
  updateNewsParagraph(input: $input) {
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
export const deleteNewsParagraph = `mutation DeleteNewsParagraph($input: DeleteNewsParagraphInput!) {
  deleteNewsParagraph(input: $input) {
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
export const createNewsMedium = `mutation CreateNewsMedium($input: CreateNewsMediumInput!) {
  createNewsMedium(input: $input) {
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
export const updateNewsMedium = `mutation UpdateNewsMedium($input: UpdateNewsMediumInput!) {
  updateNewsMedium(input: $input) {
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
export const deleteNewsMedium = `mutation DeleteNewsMedium($input: DeleteNewsMediumInput!) {
  deleteNewsMedium(input: $input) {
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
export const createEventParagraph = `mutation CreateEventParagraph($input: CreateEventParagraphInput!) {
  createEventParagraph(input: $input) {
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
export const updateEventParagraph = `mutation UpdateEventParagraph($input: UpdateEventParagraphInput!) {
  updateEventParagraph(input: $input) {
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
export const deleteEventParagraph = `mutation DeleteEventParagraph($input: DeleteEventParagraphInput!) {
  deleteEventParagraph(input: $input) {
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
export const createEventMedium = `mutation CreateEventMedium($input: CreateEventMediumInput!) {
  createEventMedium(input: $input) {
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
export const updateEventMedium = `mutation UpdateEventMedium($input: UpdateEventMediumInput!) {
  updateEventMedium(input: $input) {
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
export const deleteEventMedium = `mutation DeleteEventMedium($input: DeleteEventMediumInput!) {
  deleteEventMedium(input: $input) {
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
export const createUserInfo = `mutation CreateUserInfo($input: CreateUserInfoInput!) {
  createUserInfo(input: $input) {
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
export const updateUserInfo = `mutation UpdateUserInfo($input: UpdateUserInfoInput!) {
  updateUserInfo(input: $input) {
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
export const deleteUserInfo = `mutation DeleteUserInfo($input: DeleteUserInfoInput!) {
  deleteUserInfo(input: $input) {
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
export const createDevicePushToken = `mutation CreateDevicePushToken($input: CreateDevicePushTokenInput!) {
  createDevicePushToken(input: $input) {
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
export const updateDevicePushToken = `mutation UpdateDevicePushToken($input: UpdateDevicePushTokenInput!) {
  updateDevicePushToken(input: $input) {
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
export const deleteDevicePushToken = `mutation DeleteDevicePushToken($input: DeleteDevicePushTokenInput!) {
  deleteDevicePushToken(input: $input) {
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
      active
      siteWithOrderId
      siteId
      orderNumber
      customerName
      customerEmail
      productName
      shippingAddress
      orderDate
      totalAmount
      paymentMethod
      completed
      completedDate
      refunded
      refundedDate
      refundedAmount
      cancelled
      cancelledDate
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
      active
      siteWithOrderId
      siteId
      orderNumber
      customerName
      customerEmail
      productName
      shippingAddress
      orderDate
      totalAmount
      paymentMethod
      completed
      completedDate
      refunded
      refundedDate
      refundedAmount
      cancelled
      cancelledDate
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
      active
      siteWithOrderId
      siteId
      orderNumber
      customerName
      customerEmail
      productName
      shippingAddress
      orderDate
      totalAmount
      paymentMethod
      completed
      completedDate
      refunded
      refundedDate
      refundedAmount
      cancelled
      cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
    active
    siteWithOrderId
    siteId
    orderNumber
    customerName
    customerEmail
    productName
    shippingAddress
    orderDate
    totalAmount
    paymentMethod
    completed
    completedDate
    refunded
    refundedDate
    refundedAmount
    cancelled
    cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
    active
    siteWithOrderId
    siteId
    orderNumber
    customerName
    customerEmail
    productName
    shippingAddress
    orderDate
    totalAmount
    paymentMethod
    completed
    completedDate
    refunded
    refundedDate
    refundedAmount
    cancelled
    cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
    active
    siteWithOrderId
    siteId
    orderNumber
    customerName
    customerEmail
    productName
    shippingAddress
    orderDate
    totalAmount
    paymentMethod
    completed
    completedDate
    refunded
    refundedDate
    refundedAmount
    cancelled
    cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
        active
        siteWithOrderId
        siteId
        orderNumber
        customerName
        customerEmail
        productName
        shippingAddress
        orderDate
        totalAmount
        paymentMethod
        completed
        completedDate
        refunded
        refundedDate
        refundedAmount
        cancelled
        cancelledDate
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
