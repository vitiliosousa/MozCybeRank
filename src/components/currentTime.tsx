import { useEffect, useState } from "react";

const CurrentTime = () => {
    const [formattedDate, setFormattedDate] = useState("");

    const formatDate = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { 
            weekday: 'short', 
            month: 'short',   
            day: '2-digit',   
            year: 'numeric',   
            hour: '2-digit',   
            minute: '2-digit', 
            hour12: false       
        };

        return now.toLocaleString('pt-BR', options);
    };

    useEffect(() => {
        setFormattedDate(formatDate());

        const intervalId = setInterval(() => {
            setFormattedDate(formatDate());
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return <div>{formattedDate}</div>;
};

export default CurrentTime;
