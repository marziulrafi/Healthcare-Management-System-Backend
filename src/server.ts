import app from "./app";

const PORT = process.env.PORT || 5000;

const bootstrap = () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log('Failed to start server :', error);
    }
}

bootstrap()