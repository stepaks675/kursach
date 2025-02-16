import { Dialog } from "radix-ui";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export const HomePage = () => {
  const [page,setPage] = useState(1)
  return (
    <div className="pt-12 px-20 mb-16 pb-12">
      <div className="mx-auto px-20 bg-red-300 border rounded-[100px] h-[900px] flex flex-col items-center justify-center">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="flex items-center justify-center rounded-3xl w-1/3 h-[100px] bg-green-500 text-4xl font-bold">
              MAGIC BUTTON
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50">
              <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
                <Dialog.Title className="font-bold">ТУТ ВОПРОСЫ TBA</Dialog.Title>
                <div className="w-full flex justify-between mt-10 items-center">
                  <FaArrowLeft className="scale-200" onClick={()=>{setPage(p => Math.max(p-1,1))}} />
                  <div>{page}</div>
                  <FaArrowRight className="scale-200"  onClick={()=>{setPage(p => Math.min(p+1,9))}} />
                </div>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};
