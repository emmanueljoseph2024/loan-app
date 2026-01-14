import mongoose from 'mongoose'
const { Schema } = mongoose
const signupSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            default: ''
        }
        ,
        email: {
            type:String,
            required:true,
            default: ''
        }
        ,
        password: {
            type:String,
            required:true,
            default: ''
        }
    }
)

export default mongoose.model('Signup', signupSchema)