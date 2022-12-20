import { AuthProvider } from "./auth"
import { AppRouter } from "./routers/AppRouter"



export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
