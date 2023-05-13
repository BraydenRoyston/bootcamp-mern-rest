// catherine
import mongoose from "mongoose";

/**
 * create the mongoose model corresponding to the Restaurant collection in MongoDB
 * mongoose allows specifying a schema and field validators
 * while data were validated in the controller, it is good practice to verify assumptions at every level to maintain integrity
 */
const RestaurantGroup = mongoose.model("RestaurantGroup", new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        restaurantIds: {
            id: {
                type: String
            }
        }
    }
));

export default RestaurantGroup;
