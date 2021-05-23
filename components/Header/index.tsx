import styles from "./Header.module.scss";
import Image from "next/image";

export default function Layout() {
  return (
    <header className={styles.header}>
      <Image width={235} height={74} src="/images/boy_scouts_of_america_logo.png"></Image>
      <div className="bg-blue-700 w-0.5 h-11 mt-4 inline-block align-top"></div>
      <div className="text-left inline-block align-top mt-2 pl-1">
        <p className="text-2xl text-red-700">Southern District of</p>
        <p className="text-lg -mt-0.5 text-red-700">East Carolina Council</p>
      </div>
    </header>
  );
}
