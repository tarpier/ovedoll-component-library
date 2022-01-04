import { ContactForm } from "../ContactForm"
import { IContactFormProps } from "../ContactForm/ContactForm"
import { Copy } from "../Copy"
import { ICopyProps } from "../Copy/Copy"
import { ProfileText } from "../ProfileText"
import { IProfileTextProps } from "../ProfileText/ProfileText"

export const DynamicContent = ({ components }) => {

  return components.map((component) => {
    switch (component.__component) {
      case "component.profile-text":
        return (<ProfileText {...component as IProfileTextProps} />)
      case "component.copy":
        return (<Copy {...component as ICopyProps} />)
      case "component.contact-form":
        return (<ContactForm {...component as IContactFormProps} />)
    }
  })

}