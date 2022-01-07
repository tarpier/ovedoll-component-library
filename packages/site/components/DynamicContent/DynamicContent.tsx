import { ContactForm } from "../ContactForm"
import { IContactFormProps } from "../ContactForm/ContactForm"
import { Copy } from "../Copy"
import { ICopyProps } from "../Copy/Copy"
import { ProfileText } from "../ProfileText"
import { IProfileTextProps } from "../ProfileText/ProfileText"

export const DynamicContent = ({ components }) => {

  return components.map((component, index) => {
    switch (component.__component) {
      case "component.profile-text":
        return (<ProfileText key={`${component.__component}-${index}`} {...component as IProfileTextProps} />)
      case "component.copy":
        return (<Copy key={`${component.__component}-${index}`} {...component as ICopyProps} />)
      case "component.contact-form":
        return (<ContactForm key={`${component.__component}-${index}`} {...component as IContactFormProps} />)
    }
  })

}