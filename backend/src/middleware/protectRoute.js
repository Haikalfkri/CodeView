import { clerkClient, requireAuth, getAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try {
            const clerkId = req.auth.UserId;

            if (!clerkId)
            {
                return res.status(401).json({ message: "Unauthorized: Clerk ID not found." });
            }

            // check if the user exists in the database
            const user = await User.findOne({ clerkId });

            if (!user) {
                return res.status(404).json({ message: "User not found in the database." });
            }

            req.user = user; // Attach the user object to the request for further use

            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error("Error in protectRoute middleware:", error);
            return res.status(500).json({ message: "Internal server error." });
        }
    }
]