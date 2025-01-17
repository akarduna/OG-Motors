import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero";
import './globals.css';

export default function Home() {
  return (
      <div className='background-image'>
        <h2>
            Adding Background image
            Using External CSS
        </h2>
        <h3>
            Welcome to GeeksForGeeks
        </h3>
      </div>
  );
}
