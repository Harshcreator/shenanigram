import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import './globals.css'; 
import { Routes, Route } from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public route */}
        <Route element={<AuthLayout />}>
            <Route path="/sign-in" element = {<SigninForm />}/>
            <Route path="/sign-up" element = {<SignupForm />}/>
        </Route>

        {/* private route */}
        <Route element={<RootLayout />}>
            <Route index element = {<Home />} />
            </Route>
        </Routes>
        <Toaster></Toaster>
    </main>
  )
}

export default App