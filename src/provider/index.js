import { DarkModeProvider } from "./DarkMode";
import { FormProvider } from "./Form";


export default function Providers({children}) {

  return(
    <FormProvider>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </FormProvider>
  )

}