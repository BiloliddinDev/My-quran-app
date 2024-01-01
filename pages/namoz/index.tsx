import { useEffect, useState } from "react";
import s from "./stayle.module.scss";

export async function getServerSideProps() {
  const res = await fetch(
    `https://islomapi.uz/api/present/day?region=Toshkent`
  );
  const data = await res.json();

  return { props: { data } };
}

const Nomoz = ({ data }: any) => {
  console.log(data, "log");

  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime: string = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return (
    <div>
      <h1 className="text-center text-[35px] font-mono font-bold text-white mt-[20px]">
        Namoz Vaqtalri
      </h1>
      <div className={`${s.wrapper} container`}>
        <h1 className="text-center text-[35px] font-mono font-bold text-white mt-[20px]">
          Hozirgi vaqt {formattedTime}
        </h1>
      </div>
    </div>
  );
};

export default Nomoz;
