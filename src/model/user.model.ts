import { Document, model, Schema } from "mongoose";

export interface IUserDocument extends Document {
    name: string,
    email: string,
    password: string,
    movies?: string[],
    createdAt?: Date,
    updatedAt?: Date
}

const userSchema = new Schema<IUserDocument>({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: true,
        // validate: {
        //     validator: function (value: string) {
        //         return /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);
        //     },
        //     message: 'Invalid password address format',
        // },
    },
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movies'
    }]

},
    { timestamps: true, versionKey: false }
)

const UserModel = model<IUserDocument>('User', userSchema)

export default UserModel

