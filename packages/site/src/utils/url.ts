/**
 * cleans the slug coming getServerSideProps or getStaticProps 
 * to a valid format using [[...slug]] (optional conditional routing)
 * 
 * @param slugParam 
 * 
 * @returns 
 */
export function slugParamToPath(slugParam: string | undefined): string {
  // Possible slug value types:
  const slug = Array.isArray(slugParam)
    ? // - ["multiple", "paths"]
    slugParam.join('/')
    : // - "single-path"
    slugParam ||
    // - undefined -> default to "/"
    '/'
  return slug
}