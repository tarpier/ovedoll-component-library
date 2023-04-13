interface ITemplateNameProps {
  headline: string
}

export const TemplateName = ({headline}:ITemplateNameProps) => (
  <div className={'bg-red-600'} data-testid="TemplateName">
    <h1>{headline} TemplateName</h1>
  </div>
);