import { DarkModeProvider } from "./DarkMode";
import { FormProvider } from "./Form";
import { IndexByProvider } from "./IndexBy";


export default function Providers({children}) {

  return(
    <FormProvider>
      <DarkModeProvider>
        <IndexByProvider>
          {children}
        </IndexByProvider>
      </DarkModeProvider>
    </FormProvider>
  )

}