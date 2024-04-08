export type Photo = {
    // Photo ID (unique). It will also become the URL slug.
    id: number | string
    // Photo title
    title: string
    // Photo URL (can be absolute or relative to the public folder)
    url: string
    // Photo description
    description: string
  }
  