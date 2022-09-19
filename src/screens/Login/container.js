import { connect } from 'react-redux'
import App from './component'

import {
    change_loading, change_username, change_password
} from './actions'


const mapStateToProps = (state) => ({
    ...state.login,
})

const mapDispatchToProps = {
    // ur actions,
    change_loading, change_username, change_password
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)