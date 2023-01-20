import './src/styles/global.css'
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from "react"
import { Provider } from "react-redux"
import store from './src/store'

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)