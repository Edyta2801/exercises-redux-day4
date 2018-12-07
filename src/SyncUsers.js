import React from 'react'
import { database } from './firebaseConfig'



class SyncUsers extends React.Component {
    state = {
        users = []
    }
    componentWillMount() {

        database.ref('/jfddl6/randomusers').on(
            'value',
            snapshot => {
                this.setState({ users: snapshot.val() })
                console.log(snapshot.val())
            }
        )
    }


    render() {
        return (
            <div>
                {users.email}
            </div>
        )
    }

}
export default SyncUsers










