import { ContentWrapper } from "../ContentWrapper"

interface ICustomerTagCloud {
  dateLine: string
  customerNames: string[]
}

export const CustomerTagCloud = ({ dateLine, customerNames }: ICustomerTagCloud) => {
  return (<div className="bg-secondary">
    <ContentWrapper className="text-white">
      <p className="pb-8 pt-16 mb-2 text-md sm:text-lg text-center font-regular tracking-wide uppercase text-accent">
        {dateLine}
      </p>
      <ul className="flex flex-wrap items-center justify-center mx-auto text-xl sm:text-2xl pb-16">
        {
          customerNames.map(customer => <li className="px-4 py-4">{customer}</li>)
        }
      </ul>
    </ContentWrapper>
  </div>)
}