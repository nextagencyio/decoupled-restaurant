// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_MENU_ITEMS = gql`
  query GetMenuItems($first: Int = 20) {
    nodeMenuItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        body { processed summary }
        price
        menuCategory
        dietaryInfo
        image { url alt width height }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query GetEvents($first: Int = 10) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        body { processed summary }
        eventDate { timestamp time }
        location
        image { url alt width height }
      }
    }
  }
`

export const GET_REVIEWS = gql`
  query GetReviews($first: Int = 10) {
    nodeReviews(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        body { processed }
        reviewerName
        rating
        visitDate { timestamp time }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        featuresItems {
          ... on ParagraphFeatureItem {
            id
            title
            description { processed }
            icon
          }
        }
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body { processed }
          }
          ... on NodeMenuItem {
            id
            title
            body { processed }
            price
            menuCategory
            dietaryInfo
            image { url alt width height }
          }
          ... on NodeEvent {
            id
            title
            body { processed }
            eventDate { timestamp time }
            location
            image { url alt width height }
          }
          ... on NodeReview {
            id
            title
            body { processed }
            reviewerName
            rating
            visitDate { timestamp time }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description { processed }
                icon
              }
            }
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`
