import { ContentWrapper } from "../ContentWrapper";
import { DateLine } from "../DateLine";
import { Headline } from "../Headline";
import { ProseableText } from "../ProseableText";

interface IBlogPostProps {
  headline: string,
  dateLine?: string,
  body: any[],
}



export const BlogPost = ({headline, dateLine, body}:IBlogPostProps) => (
  <ContentWrapper>
<div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
            
            <Headline order='h1-blog'>
            {dateLine ? (
              <DateLine content={dateLine} center />
            ) : null}
              {headline}
            </Headline>  
            <ProseableText value={body} />
            {/* author box */}
            {/* related articles */}
          
        </div>
      </div>
    </div>
  </ContentWrapper>
);






