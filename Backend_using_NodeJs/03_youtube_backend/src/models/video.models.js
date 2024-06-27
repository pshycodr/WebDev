import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile : {
        type : String,
        required : [true, "Video is required"],
    },

    thumbnail : {
        
    }
}, {timestamps : true})

export const Video = mongoose.model("Video", videoSchema)