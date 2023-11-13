import { Document, model, Schema } from "mongoose";
import GenreModel, { IGenreDocument } from "./genre.model";

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

    createdBy: string

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
    genre:
        {
        type: String,
        required: [true, 'Genre is required']

        },
        // [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Genre',
        //     required: [true, 'Genre is required']
        // }],
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
        required: [true, 'Rated is required']
    },
    comments: {
        type: String,
    },
    createdBy: {
        type: String,
        required: [true, 'User creator is required']
    }
},
    { timestamps: true, versionKey: false }
)

const MovieModel = model<IMovieDocument>('Movies', movieSchema)

export default MovieModel