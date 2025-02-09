export const HomePage = () => {
    return <div className="pt-12 px-20 mb-16 pb-12">
        <div className="mx-auto px-20 bg-red-300 border rounded-[100px] h-[900px] flex flex-col items-center">
          <div className="h-3/4 text-5xl flex items-center justify-center">EPIC BACKGROUND</div>
          <div className="h-1/4 w-full flex justify-center gap-32 items-center">
            <div className="flex items-center justify-center rounded-3xl w-1/3 h-[100px] bg-green-500 ">ПОДОБРАТЬ С НУЛЯ</div>
            <div className="flex items-center justify-center rounded-3xl w-1/3 h-[100px] bg-red-500 ">ПОХОЖИЕ ФИЛЬМЫ</div>
          </div>
        </div>
        <div className="mx-auto flex justify-between mt-12 gap-12">
          <div className="bg-green-500 border rounded-[40px] h-[400px] w-1/2"></div>
          <div className="bg-green-500 border rounded-[40px] h-[400px] w-1/2"></div>
        </div>
      </div>
}