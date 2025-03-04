import { Dialog } from "radix-ui";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
export const HomePage = () => {
  return (
    <div>
      <div className="text-6xl text-center text-white">Running hot</div>
      <div className="flex justify-center items-center w-full pt-4">
        <Swiper
          className="w-full h-full "
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
        >
          <SwiperSlide>
            <SliderComponent
              poster="https://m.media-amazon.com/images/M/MV5BOGI4OWU4NjMtMjhkMy00ZWM4LWI1ZjQtYWZjZWMyYWQyZGFjXkEyXkFqcGc@._V1_.jpg"
              title="Во Все Тяжкие"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderComponent
              poster="https://avatars.mds.yandex.net/i?id=e0f194032afadd4d2f6f4614edaa49ba_l-5436735-images-thumbs&n=13"
              title="Игра Престолов"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderComponent
              poster="https://cdn.kanobu.ru/editor/images/21/b64252e2-208b-4b81-bdd5-7437729e2ef6.webp"
              title="Аркейн"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderComponent
              poster="https://yandex-images.clstorage.net/Pm5TB1216/4c215d_1-/9XGhbv5uV7rqXnliHdOKimjrWPKWNinTGdp8OWHBEVp3VSuqOQS-Ls-INDFmxoaO5W-yGB-sAvl5cZUKEpP1B7hw5G-fZ1e2-nowRm2ahspc3lTCz38RwiSSVDlp6LDvopmyM8HVU_5mbTQkDtqLroxr47GD_Z8wDNFZhia27N6tAfFaui7WYo5adOYRxzai9JZIxt5bxWphxsEQsOhkA-ZVpgOhRa-qTl0UvALGMx8sD9N98kkfEATZ3Y7KsnCOZY217k4KKp4SQvzOzccqXsBK_A5qQyluSUYJUCi8UJ-utfInKVlfokrJyCi62sd3cIunARrN54A0zUka3qrchtVthYp2QlqOxmZsQjV3NioYojj-2tNNLjnqOUSM8CxHOoX6V8X9L_rGkcxkJmIX64S3l1lSXRd4GJW9dqZqzMY9oYWmknrexuJCpH5dh_ZORJqsBrpfQX4lImkEmIhkU4ZN4vvZvW96Ar1I6A6WC1cQA3tBajnnsBQJRRZiYvD2wfmJllKKBsaegpQ-ndNu3sgi5K6iU9X6TSp5ROiYxNc6qf5XOXnf6ioxzHS-0q_f7MP3FfZZi4wkPQXefqZExiEFeZZiFnJWlq6Ibt2Xfo4gogRSHsfxsuHiXRh4oHAHor2mU2UpMyKKaTS0Ugb37-DHd3Gm4SdsYHG9KmICpH5lBT0yHhIS4taKfEZx7yKO1AZcgt53ddp55unkdAAEQ74VrvfVzTMiWlkwyBLWg28M-7_R0rVXJOwhNa4G-syaGUFBgsaGQooS4myG8UfiHty2vE5KqxmmAcrxnLzg9KMWPS7z2ZF7fnJxNMDuXo_DCLf35cI5ByzY2YXSWmKYdrHNGS6eNlam0h6Uwq23Urp4HjSOYg8xkulm2VR4zGCHGiEai-2x62ZyUYSYptonb-Azs4VWNW8YdBl5Cs6anAb1aW2ypoaeukomFJL18xIuMMosLipLJUZh9g0Q4Ayk"
              title="Теория Большого Взрыва"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderComponent
              poster="https://sun6-23.userapi.com/impf/_Y3ymWI9UNbYn5pVbCiIjfIROmSnOjzGqQLG6g/MmdEa9qkThQ.jpg?size=807x454&quality=96&sign=4f346e2278009a503d1541a955de3176&c_uniq_tag=s7XSeITW6IABXAYHj-7R2EilDt8j_D25_e0cZhKWp28&type=album"
              title="Доктор Хаус"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="pt-12 px-20 mb-16 pb-12 flex justify-center items-center">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="flex items-center justify-center rounded-3xl w-1/3 h-[100px] bg-slate-700 border-1 border-black text-4xl cursor-pointer text-white font-bold transition-all duration-300 hover:scale-105 hover:border-slate-300 hover:bg-slate-800">
              ПОДОБРАТЬ ФИЛЬМ
            </button>
          </Dialog.Trigger>
          <FormComponent />
        </Dialog.Root>
      </div>
    </div>
  );
};

const FormComponent = () => {
  const [formState, setFormState] = useState({
    Mood: "",
    Company: "",
    Time: "",
    New: "",
    Thrill: "",
    Ending: "",
    Pref: "",
  });
  const handleRadioChange = (e) => {
    setFormState((p) => {
      return {
        ...p,
        [e.target.name]: e.target.value,
      };
    });
  };
  const pages = {
    1: (
      <div className="flex flex-col text-xl">
        <h2>Какое у вас настроение сегодня?</h2>
        <label>
          <input
            name="Mood"
            type="radio"
            value="Happy"
            checked={formState.Mood === "Happy"}
            onChange={handleRadioChange}
          />
          Весёлое
        </label>

        <label>
          <input
            name="Mood"
            type="radio"
            value="Sad"
            checked={formState.Mood === "Sad"}
            onChange={handleRadioChange}
          />
          Грустное
        </label>

        <label>
          <input
            name="Mood"
            type="radio"
            value="Thrilled"
            checked={formState.Mood === "Thrilled"}
            onChange={handleRadioChange}
          />
          Напряженное
        </label>

        <label>
          <input
            name="Mood"
            type="radio"
            value="Romantic"
            checked={formState.Mood === "Romantic"}
            onChange={handleRadioChange}
          />
          Романтическое
        </label>

        <label>
          <input
            name="Mood"
            type="radio"
            value="Neutral"
            checked={formState.Mood === "Neutral"}
            onChange={handleRadioChange}
          />
          Нейтральное
        </label>
      </div>
    ),
  };
  const [page, setPage] = useState(1);
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50">
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="font-bold">ТУТ ВОПРОСЫ TBA</Dialog.Title>
          {pages[page]}
          <div className="w-full flex justify-between mt-10 items-center">
            <FaArrowLeft
              className="scale-200"
              onClick={() => {
                setPage((p) => Math.max(p - 1, 1));
              }}
            />
            <div>{page}</div>
            <FaArrowRight
              className="scale-200"
              onClick={() => {
                setPage((p) => Math.min(p + 1, 9));
              }}
            />
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};

const SliderComponent = ({ title, poster }) => {
  return (
    <div
      style={{ backgroundImage: `url(${poster})` }}
      className={`w-2/3 h-[600px] bg-white flex items-center justify-center mx-auto bg-cover bg-no-repeat bg-center`}
    >
      <span className="text-white text-7xl"> {title} </span>
    </div>
  );
};
