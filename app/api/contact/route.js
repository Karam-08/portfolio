import transporter from "@/lib/mail"

export async function POST(req){
    try{
        const body = await req.json()

        const {name, email, subject, message} = body

        if(!name || !email || !subject || !message){
            return Response.json({success: false, error: "All fields are required"}, {status: 400})
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact From ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
            `
        })
        return Response.json({success: true}, {status: 200})
    }catch(err){
        console.log(err)
        return Response.json({success: false}, {status: 500})
    }
}