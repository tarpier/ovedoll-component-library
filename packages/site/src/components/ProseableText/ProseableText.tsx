import React, { useMemo } from 'react'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { Headline } from '../Headline'
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
Refractor.registerLanguage(js)


const baseComponents: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (<Headline order='h2'>{children}</Headline>),
    h3: ({ children }) => (<Headline order='h3'>{children}</Headline>),
    h4: ({ children }) => (<Headline order='h4'>{children}</Headline>),
    normal: ({ children }) => (<p className="text-xl text-copy capsize">{children}</p>),
    blockquote: ({ children }) => (<blockquote className="text-xl text-headline">{children}</blockquote>),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg pl-6">{children}</ol>,
  },
  listItem: {
    // TODO: color the disc
    bullet: ({ children }) => <li style={{ listStyleType: 'disc' }}><span className="text-xl text-copy">{children}</span></li>,
    number: ({ children }) => <li style={{ listStyleType: 'numeric' }}><span className="text-xl text-copy">{children}</span></li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },

}



/**
 * Use Tailwind CSS's `prose` classes with Portable Text markup (blocks)
 * Without inheriting styles for custom components (types)
 */
export function ProseableText({ value = [] }) {
  // Group together standard `_type === "block"`  blocks
  // eg <p>, <li>, etc – and separate out everyone else
  const valueGroups = useMemo(
    () =>
      value.reduce(
        (acc, item) => {
          const lastIdx = acc.length - 1

          if (
            // We don't have items in this group yet
            acc[lastIdx].length === 0 ||
            // The last group has the same `type`
            acc[lastIdx][0]._type === item._type
          ) {
            acc[lastIdx].push(item)
          } else {
            // Time to create a new group, because the `type` is different compared to last group
            acc.push([item])
          }

          return acc
        },
        [[]]
      ),
    [value]
  )

  if (!valueGroups?.length) return null

  return valueGroups.map((group) => {
    // if (group[0]._type === 'block') {
    //   <div key={group[0]._key} className="prose py-4">
    //     <PortableText value={group} components={baseComponents} />
    //   </div>
    // }

    switch (group[0]._type) {
      case 'block':
        return (
          <div key={group[0]._key} className="prose py-4">
            <PortableText value={group} components={baseComponents} />
          </div>
        )
      case 'code':
          return (
            <div key={group[0]._key}>
              {group[0].filename ? (<span className='italic text-right block text-headline'>{group[0].filename}</span>) : null}
              <Refractor language="js" value={group[0].code} />
            </div>
          )

      default:
        console.log(`encountered unknown block type ${group[0]._type}`)
        return null
    }
  })




      // TODO add custom render here
      // <PortableText key={group[0]._key} value={group} components={baseComponents} />
    
  
}


