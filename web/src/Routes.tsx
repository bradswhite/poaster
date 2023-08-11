// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import NavbarLayout from 'src/layouts/NavbarLayout/NavbarLayout'
import ContainerLayout from 'src/layouts/ContainerLayout/ContainerLayout'
import SidebarLayout from 'src/layouts/SidebarLayout/SidebarLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Private unauthenticated="login">
        <Set wrap={NavbarLayout}>
          <Set wrap={ContainerLayout}>
            <Route path="/new" page={NewPostPage} name="newPost" />
            <Set wrap={SidebarLayout}>
              <Route path="/{username:String}/profile" page={ProfilePage} name="profile" />
              <Route path="/post/{id:String}" page={PostDetailsPage} name="postDetails" />
              <Route path="/" page={HomePage} name="home" />
            </Set>
          </Set>
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
