import React from 'react';

export interface ISimpleThreeColumnProps {
  headline: string;
  features: {
    name: string;
    description: string;
    icon: typeof React.Component
  }[]
}



export const SimpleThreeColumn = ({ headline, features }: ISimpleThreeColumnProps) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">{headline}</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-headline">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-copy">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
};


