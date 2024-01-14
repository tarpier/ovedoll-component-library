import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import page from './page'
import {job} from './job.document'
import hero from './objects/hero.section'
import textWithImage from './objects/textWithImage.section'
import simpleCopy from './objects/simpleCopy.section'
import contactForm from './objects/contactForm.section'
import {workExperience} from './objects/workExperience.object'
import {education} from './objects/education.object'
import {trainerExperience} from './objects/trainerExperience.object'
import {cv} from './cv'
import {tag} from './tag.document'


export const schemaTypes =
  [
    // sections
    hero,
    textWithImage,
    simpleCopy,
    contactForm,
    // objects
    tag,
    workExperience,
    trainerExperience,
    education,
    // documents
    page,
    post,
    author,
    category,
    blockContent,
    cv,
    job
  ]
