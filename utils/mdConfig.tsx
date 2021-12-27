const h2 = (node) => (
  <h2 className="font-sans text-3xl mb-4 font-bold tracking-tight text-headline sm:text-4xl leading-relaxed">
    {node.children}
  </h2>)

const p = (node, ...props) => (
  <p className="mb-5 text-xl text-copy" {...props}>
    {node.children}
  </p>
)

const li = (node, ...props) => (
  <li className="font-sans text-copy" {...props}>
    {node.children}
  </li>
)

const ul = (node, ...props) => (
  <ul className="pl-20">
    {node.children}
  </ul>
)

const ol = (node, ...props) => (
  <ol className="list-decimal">
    {node.children}
  </ol>
)

export const mdConfig = {
  h1: h2,
  h2,
  p,
  ol,
  ul,
  li
};