import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'https://zoofeed-api-gamma.vercel.app/api/users'
// const URL = 'http://localhost:5000/api/users'

const initialState = {
    isLogin: false,
    user: {},
    token: '',
    loading: {
        login: false,
        fetch: false,
        create: false
    },
    error: {
        status: false,
        message: ''
    }
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${URL}/login`,
            data
        })

        const access_token = response.data.access_token
        localStorage.setItem('access_token', access_token)
        thunkAPI.dispatch(fetchUser(access_token))
        return access_token
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})

export const fetchUser = createAsyncThunk('auth/fetchUser', async (token, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${URL}/account`,
            headers: {
                access_token: token
            }
        })
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})

export const createUser = createAsyncThunk('auth/createUser', async (data, thunkAPI) => {
    try {
        await axios({
            method: 'POST',
            url: URL,
            data
        })
        thunkAPI.dispatch(login({
            email: data.email,
            password: data.password
        }))
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.clear()
            state.token = ''
            state.isLogin = false
            state.user = {}
        },
        closealert: (state) => {
            state.error.status = false
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state) => {
            state.loading.login = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading.login = false
            state.token = action.payload
            state.isLogin = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading.login = false
            state.error.status = true
            state.error.message = action.payload
        })
        // fetch
        builder.addCase(fetchUser.pending, (state) => {
            state.loading.fetch = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading.fetch = false
            state.user = action.payload
            state.isLogin = true
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading.fetch = false
            state.error.message = action.payload
        })
        // create
        builder.addCase(createUser.pending, (state) => {
            state.loading.create = true
        })
        builder.addCase(createUser.fulfilled, (state) => {
            state.loading.create = false
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading.create = false
            state.error.status = true
            state.error.message = action.payload
        })
    }
})

export default authSlice.reducer
export const { logout, closealert } = authSlice.actions