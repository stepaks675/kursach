import { Dialog } from "radix-ui";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
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
              ПОДОБРАТЬ СЕРИАЛ
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
  
  const handleTextChange = (e) => {
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
    2: (
      <div className="flex flex-col text-xl">
        <h2>В какой компании вы будете смотреть фильм?</h2>
        <label>
          <input
            name="Company"
            type="radio"
            value="Alone"
            checked={formState.Company === "Alone"}
            onChange={handleRadioChange}
          />
          Один
        </label>
        <label>
          <input
            name="Company"
            type="radio"
            value="Friends"
            checked={formState.Company === "Friends"}
            onChange={handleRadioChange}
          />
          С друзьями
        </label>
        <label>
          <input
            name="Company"
            type="radio"
            value="Family"
            checked={formState.Company === "Family"}
            onChange={handleRadioChange}
          />
          С семьей
        </label>
        <label>
          <input
            name="Company"
            type="radio"
            value="Partner"
            checked={formState.Company === "Partner"}
            onChange={handleRadioChange}
          />
          С партнером (девушка/парень)
        </label>
      </div>
    ),
    3: (
      <div className="flex flex-col text-xl">
        <h2>Сколько времени у вас есть на просмотр?</h2>
        <label>
          <input
            name="Time"
            type="radio"
            value="LessThanHour"
            checked={formState.Time === "LessThanHour"}
            onChange={handleRadioChange}
          />
          Меньше часа
        </label>
        <label>
          <input
            name="Time"
            type="radio"
            value="OneToTwo"
            checked={formState.Time === "OneToTwo"}
            onChange={handleRadioChange}
          />
          1-2 часа
        </label>
        <label>
          <input
            name="Time"
            type="radio"
            value="MoreThanTwo"
            checked={formState.Time === "MoreThanTwo"}
            onChange={handleRadioChange}
          />
          Более 2 часов
        </label>
      </div>
    ),
    4: (
      <div className="flex flex-col text-xl">
        <h2>Хотите ли вы что-то новое или предпочитаете проверенные фильмы?</h2>
        <label>
          <input
            name="New"
            type="radio"
            value="New"
            checked={formState.New === "New"}
            onChange={handleRadioChange}
          />
          Новое (что-то необычное)
        </label>
        <label>
          <input
            name="New"
            type="radio"
            value="Proven"
            checked={formState.New === "Proven"}
            onChange={handleRadioChange}
          />
          Проверенное (классика или популярное)
        </label>
      </div>
    ),
    5: (
      <div className="flex flex-col text-xl">
        <h2>Какой уровень напряженности вы предпочитаете?</h2>
        <label>
          <input
            name="Thrill"
            type="radio"
            value="Light"
            checked={formState.Thrill === "Light"}
            onChange={handleRadioChange}
          />
          Легкий и расслабляющий
        </label>
        <label>
          <input
            name="Thrill"
            type="radio"
            value="Moderate"
            checked={formState.Thrill === "Moderate"}
            onChange={handleRadioChange}
          />
          Умеренный
        </label>
        <label>
          <input
            name="Thrill"
            type="radio"
            value="Intense"
            checked={formState.Thrill === "Intense"}
            onChange={handleRadioChange}
          />
          Интенсивный и напряженный
        </label>
      </div>
    ),
    6: (
      <div className="flex flex-col text-xl">
        <h2>Хотите ли вы фильм с неожиданной развязкой?</h2>
        <label>
          <input
            name="Ending"
            type="radio"
            value="Yes"
            checked={formState.Ending === "Yes"}
            onChange={handleRadioChange}
          />
          Да
        </label>
        <label>
          <input
            name="Ending"
            type="radio"
            value="No"
            checked={formState.Ending === "No"}
            onChange={handleRadioChange}
          />
          Нет
        </label>
        <label>
          <input
            name="Ending"
            type="radio"
            value="DontCare"
            checked={formState.Ending === "DontCare"}
            onChange={handleRadioChange}
          />
          Не важно
        </label>
      </div>
    ),
    7: (
      <div className="flex flex-col text-xl">
        <h2>Предпочитаете ли вы фильмы с определенным актером или режиссером?</h2>
        <p className="text-sm text-gray-600 mb-2">(Введите имя, если есть конкретные предпочтения)</p>
        <input
          type="text"
          name="Pref"
          value={formState.Pref}
          onChange={handleTextChange}
          className="border border-gray-300 rounded px-3 py-2 mt-1"
          placeholder="Например: Том Хэнкс, Кристофер Нолан..."
        />
      </div>
    ),
  };
  
  const [page, setPage] = useState(1);
  
  const handleSubmit = () => {
    console.log("Отправка данных:", formState);
  };
  
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[999]">
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg z-[1000]">
          <Dialog.Close className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
            ✕
          </Dialog.Close>
          <Dialog.Title className="font-bold">
            {page === 1 ? "Подбор фильма" : `Вопрос ${page} из ${Object.keys(pages).length}`}
          </Dialog.Title>
          {pages[page]}
          <div className="w-full flex justify-between mt-10 items-center">
            <FaArrowLeft
              className={`scale-200 ${page === 1 ? 'invisible' : 'cursor-pointer'}`}
              onClick={() => {
                setPage((p) => Math.max(p - 1, 1));
              }}
            />
            <div>{page} из {Object.keys(pages).length}</div>
            {page === Object.keys(pages).length ? (
              <button 
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Подобрать
              </button>
            ) : (
              <FaArrowRight
                className="scale-200 cursor-pointer"
                onClick={() => {
                  setPage((p) => Math.min(p + 1, Object.keys(pages).length));
                }}
              />
            )}
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
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      <div className="relative px-6 py-2 text-7xl text-white z-100">{title}</div>
    </div>
  );
};
