const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:
            "https://unsplash.com/photos/tall-rock-formation-with-arch-on-a-black-sand-beach-nU7qh8me6og",
        set:(v)=> 
        v ===""
        ? "https://unsplash.com/photos/tall-rock-formation-with-arch-on-a-black-sand-beach-nU7qh8me6og"
        :v, 
        
    },
    price:Number,
    location:String,
    country:String,
})

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
