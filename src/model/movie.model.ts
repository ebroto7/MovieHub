import { Document, model, Schema } from "mongoose";

export interface IMovieDocument extends Document {
    title: string,
    description: string,

    genre: string,
    director?: string,
    stars?: string[]
    year: number,
    // poster?: string,
    duration: number,

    rated?: number,

    comments?: string[]

    createdAt?: Date,
    updatedAt?: Date
}

const movieSchema = new Schema<IMovieDocument>({
    title: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        unique: true
    },
    genre: {
        type: String,
        required: [true, 'Genre is required']
    },
    director: {
        type: String,
    },
    stars: {
        type: String,
    },
    year: {
        type: Number,
        required: [true, 'Year is required']
    },
    // poster: {
    //     type: String,
    //     unique: true
    // },
    duration: {
        type: Number,
        required: [true, 'Duration is required']
    },
    rated: {
        type: Number,
        required: [true, 'Raated is required']
    },
    comments: {
        type: String,
    }
},
    { timestamps: true, versionKey: false }
)

const MovieModel = model<IMovieDocument>('Movies', movieSchema)

export default MovieModel