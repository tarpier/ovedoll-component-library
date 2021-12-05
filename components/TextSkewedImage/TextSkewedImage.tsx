export const TextSkewedImage = () => {
  return (
    <div className="container mx-auto px-4 pb-32 pt-48">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto">
          <div className="md:pr-12">
            <h3 className="text-3xl font-semibold">Complex Documentation</h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go.</p>
          </div>
        </div>
        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
          <img alt="..." className="max-w-full rounded-lg shadow-xl transform scale-100 rotate-2 skew-x-2 skew-y-12" src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/documentation.png" />
        </div>
      </div>
    </div>

  )
}


// style="transform:scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"