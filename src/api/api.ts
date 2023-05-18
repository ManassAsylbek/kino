import axios from "axios";


const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        'X-API-KEY': process.env.TOKEN,
    },
    withCredentials: true,
});


export const getMovieApi = {
    async getTrack () {
        /*const response = instance.get<IMovie[]>(`v2/movie`)
        return response.then(res => res.data)*/
    },
}

/*

export const getUsersApi = {
    getRefresh() {
        return instance.get(`refresh/`)
            .then(response => {
                return response.data
            })
    },

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUnFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getFollow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getProfile (userId) {
        return getProfileApi.getProfile(userId)
    }

}

export const getProfileApi = {

    getProfile (userId) {
        return instance.get(`profile/${userId}`)
        /!*    .then(response => {
                return response.data
            })*!/
    },

    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
        /!*  .then(response => {
              return response.data
          })*!/
    },
    getUpdateStatus (status) {
        return instance.put(`profile/status`, {status: status} )
        /!* .then(response => {
             return response.data
         })*!/
    },
    getSavePhoto (photoFile) {
        const formData=new FormData()
        formData.append("image",photoFile)
        return instance.put(`profile/photo`, formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        } )

    },
    saveProfile(profile) {
        return instance.put(`profile`,profile)
    }

}

export const getAuthApi = {
    getAuth () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getLogin (email, password, rememberMe = false,captcha=null) {
        return instance.post(`auth/login`,{email, password, rememberMe,captcha})
    },
    getLogOut () {
        return instance.delete(`auth/login`)
    },
}

export const getSecurityApi = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    }
}*/
