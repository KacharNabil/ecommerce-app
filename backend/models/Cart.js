const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        Products: [
            {
                productId: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Cart',CartSchema);