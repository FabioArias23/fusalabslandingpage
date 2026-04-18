/**
 * Slug utilities for handling URL-encoded slugs, particularly those with spaces.
 * Products like "fusa-omni canal" need to be URL-encoded as "fusa-omni%20canal" in routes.
 */

/**
 * Decodes a slug from URL params, handling both encoded and raw slugs.
 * Use this in [slug]/page.tsx files to properly decode slugs like "fusa-omni%20canal".
 */
export function decodeSlug(slug: string): string {
  return decodeURIComponent(slug);
}

/**
 * Encodes a slug for use in URLs, handling spaces and special characters.
 */
export function encodeSlug(slug: string): string {
  return encodeURIComponent(slug);
}

/**
 * Finds a key in a record by matching the decoded slug.
 * Useful for looking up products/members when the slug might have spaces.
 */
export function findBySlug<T extends { slug: string }>(
  items: Record<string, T>,
  slug: string
): T | undefined {
  const decodedSlug = decodeSlug(slug);
  return Object.values(items).find((item) => item.slug === decodedSlug);
}

/**
 * Finds a team member by slug from an array of members.
 */
export function findMemberBySlug<T extends { slug: string }>(
  members: T[],
  slug: string
): T | undefined {
  const decodedSlug = decodeSlug(slug);
  return members.find((member) => member.slug === decodedSlug);
}
