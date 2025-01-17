import Image from "next/image";
import styles from "../page.module.css";


export default function Hero(){
    return (
        <Image
        src="/Car.png"
        alt="Next.js logo"
        width={500}
        height={500}
        style={{ width: '100%', height: 'auto' }}
        priority
        />
    );
}