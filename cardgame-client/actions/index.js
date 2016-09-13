import { createAction } from 'redux-actions'

function createMetaAction(metadata) {
    return (name, func, metaCreator) => {
        var newMetaCreator = (...args) => {
            var meta = metaCreator != undefined ? metaCreator(...args) : {}
            return Object.assign(meta, metadata)
        }
        return createAction(name, func, newMetaCreator)
    }
}

const createRemoteAction = createMetaAction({remote: true})
const createRemoteOnlyAction = createMetaAction({remoteOnly: true})

export const setState = createAction('SET_STATE')