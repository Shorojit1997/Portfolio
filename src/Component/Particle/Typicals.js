import React from 'react'
import Typical from 'react-typical'

class Example extends React.Component {
  render () {
    return (
      <Typical
        steps={[ 'Software Engineer', 1000,'I\'m Full Stack Developer', 1000, 'I\'m Creative Thinkers', 1000, 'I\'m React Lover', 1000, 'Expert at Front end and Backend', 1000]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}
export default Example