import dotenv from "dotenv";

dotenv.config();

type portType = {
    port : number
}

const port:portType = {
    port : Number(process.env.PORT) || 3000
};

export default port