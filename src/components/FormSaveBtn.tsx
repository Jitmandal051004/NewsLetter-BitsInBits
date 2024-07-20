"use client"
import { useFormStatus } from "react-dom"

const FormSaveBtn = () => {
   const {pending} = useFormStatus();

   return (
      <button
         type="submit"
         className="rounded-md active:bg-red-300 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
         {
            pending ? "Saving in Process..." : "Add"
         }
      </button>
   )
}

export default FormSaveBtn