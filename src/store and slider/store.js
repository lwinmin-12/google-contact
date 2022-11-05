import {configureStore} from '@reduxjs/toolkit'
import ContactSlicer from './slider/ContactSlicer'
const store = configureStore({
    reducer: {
        Contact: ContactSlicer,
    }
})

export default store