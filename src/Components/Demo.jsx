
import propTypes from 'prop-types'

const Demo = ({name}) => {
    console.log();
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

Demo.propTypes = {
    name: propTypes.string.isRequired
}

export default Demo
