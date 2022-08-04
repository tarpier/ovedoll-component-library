import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import page from './page'
import hero from './objects/hero.section'
import textWithImage from './objects/textWithImage.section'
import simpleCopy from './objects/simpleCopy.section'
import contactForm from './objects/contactForm.section'

export const schemaTypes =
  [
    //sections
    hero,
    textWithImage,
    simpleCopy,
    contactForm,
    // documents
    page,
    post,
    author,
    category,
    blockContent]
