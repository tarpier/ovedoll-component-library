import { ContentWrapper } from "../ContentWrapper";

export const Footer = () => (
  <footer className="h-24 mt-10 w-full bg-gray-800">
    <ContentWrapper isWide>
      <div className='flex justify-end pt-3'>
        <ul>
          <li>
            <a className='text-white underline underline-offset-2 decoration-accent hover:no-underline hover:text-accent focus:text-accent' href='/impressum'>Impressum</a>
          </li>
          <li>
            <a className='text-white underline underline-offset-2 decoration-accent hover:no-underline hover:text-accent focus:text-accent' href='/datenschutz'>Datenschutz</a>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  </footer>
)