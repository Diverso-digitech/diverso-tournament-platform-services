import { Users } from "../models/index.js"
import { handleError, handleResponse } from "../utils/common.js"

async function registerUser (req,res) {
    try {
        const { mobile, token } = req.body
        if (!mobile) {
            handleError(res, 'Invalid Data', 'Invalid Data Packet Received', 400)
        } else {
			const alreadyExistingMobile = await Users.findOne({ mobile: mobile }).select({ mobile: 1 }).lean()
            if (alreadyExistingMobile) {
                console.log(`Dupicate entry, ${mobile} mobile number already exists`)
				console.log('Existing user details')
				return handleError(res, 'Duplicate Entry', 'Mobile Number Aleady Exists', 409)
            } else {
                const newUserObject = {
                    mobile,
                    joiningDate: new Date(),
                }
                const NewUserDocument = new Users(newUserObject)
                const newUser = await NewUserDocument.save()
				handleResponse(res, { exists: false }, "User created successfully", 200)
            }
        }       
    } catch (err) {
        console.log(err)
        return handleError(res, 'Server error', 'Server error while registering user', 500)
    }
}

export {
    registerUser   
}