import prisma from '../../lib/prisma';

export const addRSVP = async (req: any, res: any) => {
    const { name, email, phone, rsvp, dietaryRestrictions, message } = req.body;
    console.log('do we actually his this?')
    if (!name || rsvp === undefined) {
        return res.status(400).json({ error: "Missing 'name' or 'rsvp'." });
    }

    try {
        const user = await prisma.guest.create({
            data: {
                name,
                rsvp,
                email,
                phone,
                dietaryRestrictions,
                message,
            },
        });

        res.status(201).json({ data: user });
    } catch (error: any) {
        console.error("Prisma Error:", error); // 👈 clearer error logging
        res.status(500).json({ error: error.message || "Error creating RSVP." });
    }
};