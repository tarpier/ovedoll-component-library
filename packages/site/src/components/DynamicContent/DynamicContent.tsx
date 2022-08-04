import { ContactForm } from "../ContactForm"
import { IContactFormProps } from "../ContactForm/ContactForm"
import { Copy } from "../Copy"
import { ICopyProps } from "../Copy/Copy"
import { ProfileText } from "../ProfileText"
import type { IProfileTextProps } from "../ProfileText/ProfileText"

export const DynamicContent = ({ components }) => {

  return components.map((component, index) => {
    switch (component._type) {
      case "textWithImage":
        return (<ProfileText key={`${component._type}-${index}`} {...component as IProfileTextProps} />)
      case "simpleCopy":
        return (<Copy key={`${component._type}-${index}`} {...component as ICopyProps} />)
      case "contactForm":
        return (<ContactForm key={`${component._type}-${index}`} {...component as IContactFormProps} />)
    }
  })

}