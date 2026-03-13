import { useState } from "react";

export default function App() {
  const messages = [
"Ұлыс оң болсын, ақ мол болсын!",
"Наурыз әр шаңыраққа береке әкелсін!",
"Жаңа жыл қуаныш пен молшылық әкелсін!",
"Үйіңізге бақыт, дастарханыңызға береке!",
"Көктеммен бірге жаңа үміт келсін!",
"Әр күніңіз шаттыққа толы болсын!",
"Бақ пен береке әрқашан серік болсын!",
"Ақ ниетіңіз қабыл болсын!",
"Жолдарыңыз әрқашан ашық болсын!",
"Дастарханыңыз мол, көңіліңіз тоқ болсын!",
"Әр үйде күлкі мен қуаныш болсын!",
"Жаңа жыл жаңа жетістіктер әкелсін!",
"Ырыс пен несібе есігіңізден кірсін!",
"Армандарыңыз орындала берсін!",
"Бақыт пен тыныштық сізбен бірге болсын!",
"Көктем сізге шабыт әкелсін!",
"Әр күніңіз жарық болсын!",
"Қуаныш пен молшылық тілейміз!",
"Жүрегіңіз әрдайым жылы болсын!",
"Әр күніңіз мерекедей өтсін!",
"Береке мен бірлік сізбен болсын!",
"Әр бастамаңыз сәтті болсын!",
"Үйіңізге құт-береке қонсын!",
"Наурыз сізге шаттық сыйласын!",
"Бақыт жолыңыздан табылсын!",
"Жаңа күн жаңа мүмкіндіктер әкелсін!",
"Көңіліңіз көктемдей жайнасын!",
"Әр күніңіз жақсылыққа толы болсын!",
"Тілектеріңіз орындала берсін!",
"Қуаныш есігіңізден кірсін!",
"Жолдарыңыз жарық болсын!",
"Жаңа жыл сізге сәттілік әкелсін!",
"Бақыт шаңырағыңыздан кетпесін!",
"Көктеммен бірге жаңа бастамалар келсін!",
"Денсаулық пен береке тілейміз!",
"Әр күні жақсылық әкелсін!",
"Жүрегіңіз үмітке толы болсын!",
"Бақытты сәттер көп болсын!",
"Наурыз сізге қуаныш сыйласын!",
"Береке мен шаттық тілейміз!",
"Үйіңіз әрқашан қуанышқа толы болсын!",
"Жаңа жыл жаңа табыс әкелсін!",
"Әр күніңіз нұрлы болсын!",
"Бақытыңыз арта берсін!",
"Көңіліңіз әрдайым көтеріңкі болсын!",
"Әр қадамыңыз сәтті болсын!",
"Жақсылық сізді әрдайым таба берсін!",
"Қуаныш пен береке бірге келсін!",
"Наурыз сізге молшылық әкелсін!",
"Ұлыс оң болсын!"
];

  const [message, setMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  const takeBata = () => {
    const index = Math.floor(Math.random() * messages.length);
    setMessage(messages[index]);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <div
  className="min-h-screen flex flex-col items-center justify-center p-6"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#6F8DB9", // Set text color
  }}
>
  <h1 className="text-4xl font-bold">Сізге арналған</h1>

  {/* Use Philosopher font for this word */}
  <h1
  className="mb-10"
  style={{
    fontFamily: "Philosopher, sans-serif",
    fontSize: "120px",
    background: "linear-gradient(to bottom, #FFC917, #CD9B11)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    lineHeight: "100px"
  }}
>
  БАТА
</h1>

  <div
    className={`w-full max-w-md p-6 mb-8 text-center bg-white/60 backdrop-blur-sm rounded-xl border border-yellow-300 shadow-lg transition-transform duration-500 ${
      animate ? "scale-105" : "scale-100"
    }`}
    style={{
      color: "#335A96",
      fontSize: "22px"
    }}
  >
    {message || "Батаны алу үшін төмендегі қолды басыңыз"}
  </div>

  <div
    onClick={takeBata}
    className="text-6xl cursor-pointer select-none hover:scale-125 transition-transform duration-300 animate-bounce"
    style={{
      fontSize: "100px"
    }}
  >
    🤲🏻
  </div>
</div>
  );
}