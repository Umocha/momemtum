const quotes = [
  {
    quote: "시간은 아무도 기다려 주지 않는다.",
    author: "시간을 달리는 소녀",
  },
  {
    quote: "삶은 실수투성이야 우리는 늘 실수를 하곤 하지",
    author: "주토피아",
  },
  {
    quote:
      "사람은 무언가의 희생 없이 아무것도 얻을 수 없다. 무언가를 얻기 위해선 대등한 대가가 필요하다.",
    author: "강철의 연금술사",
  },
  {
    quote: "마음을 불태워라 , 한계를 뛰어넘어.",
    author: "렌고쿠 쿄쥬로",
  },
  {
    quote: "재능은 꽃 피우는 것, 센스는 갈고 딱는 것",
    author: "하이큐",
  },
  {
    quote: "힘에 굴복하면 남자로 태어난 의미가 없지.",
    author: "원피스",
  },
  {
    quote: "꿈은 도망가지 않아. 도망가는 것은 언제나 자신이야",
    author: "짱구는 못말려",
  },
  {
    quote: "내가 포기하기를 바라는 걸 포기해라",
    author: "나루토",
  },
  {
    quote: "나의 적은... 대체로 나입니다.",
    author: "우주 형제",
  },
  {
    quote: "자신을 믿지 않는 녀석 따위에게 노력할 가치는 없어!",
    author: "나루토",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
