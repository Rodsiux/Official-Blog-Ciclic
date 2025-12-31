import React from "react";
import { useRoute, Link } from "wouter";
import { Clock, MessageSquare, ArrowRight, Plane, Headset, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Article() {
  const [, params] = useRoute("/article/:id");
  const id = params?.id;

  // Mock content for demonstration based on Figma design
  const articleContent = {
    title: "OMS reclassifica gravidade e altera o grupo de variantes do SARS-CoV-2",
    category: "Universo Viagem",
    date: "24 de maio de 2022",
    updatedDate: "08 de julho de 2022",
    author: "Marina Basteiro",
    readingTime: "10 minutos",
    sections: [
      {
        title: "O que mudou na classificação das variantes pela OMS?",
        content: "Nas últimas semanas, a Organização Mundial da Saúde (OMS) redefiniu a gravidade de algumas variantes do vírus SARS-CoV-2. A entidade diminuiu consideravelmente a quantidade de cepas enquadradas como VOI (variantes de interesse, na sigla em inglês), mantendo na categoria apenas a lambda e a mu, que têm grande circulação na América Latina, e criou o grupo Variantes Sob Monitoramento ou VUM (em inglês, variants under monitoring). Com essa mudança, as variantes eta, iota e kappa foram reclassificadas como “ex-VOIs” e agora se enquadram como VUM."
      },
      {
        title: "Fim da pandemia?",
        content: "A nova categoria compreende cepas que podem alterar geneticamente o vírus e representar um risco futuramente, mas que ainda exigem novas avaliações antes de se tornar uma VOI ou VOC (variante de preocupação na sigla em inglês, em referência às cepas mais transmissíveis e que provocam infecções mais graves de Covid-19). Apesar das mudanças nas VOI e da criação das VUM, as VOC seguem as mesmas: alfa, beta, gama e delta."
      },
      {
        title: "Os diferentes tipos de infecções e lugares com maior indice de contato com virus.",
        content: "A decisão de alterar a classificação das variantes aconteceu depois de uma criteriosa avaliação de especialistas e do Grupo de Trabalho de Evolução do Vírus SARS-CoV-2, ligado à OMS. A mudança foi baseada na incidência e prevalência das variantes entre as amostras sequenciadas al longo do tempo, entre as mais diferentes localizações geográficas, e na detecção da presença ou ausência de fatores de risco."
      }
    ],
    subjects: [
      "O que mudou na classificação das variantes pela OMS?",
      "Fim da pandemia?",
      "Efeitos pós pandemia",
      "Os diferentes tipos de infecções e lugares com maior indice de contato com virus.",
      "A importancia da atividade física"
    ]
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Header - Matching Home design exactly with Logo SVG */}
      <header className="w-full border-b border-[#D5D5D7] px-6 py-4 flex justify-center items-center bg-white sticky top-0 z-50 h-[84px]">
        <div className="max-w-[1280px] w-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg width="216" height="27" viewBox="0 0 216 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2551_11583)">
                  <path d="M68.854 0.465088C67.4289 0.465088 66.2759 1.61306 66.2759 3.03199V23.5672C66.2759 24.9861 67.4289 26.1341 68.854 26.1341C70.2791 26.1341 71.4321 24.9861 71.4321 23.5672V3.03199C71.4321 1.61306 70.2827 0.465088 68.854 0.465088Z" fill="#00D6C3"/>
                  <path d="M33.0825 13.9413V21.0003C33.0825 22.4192 31.9295 23.5672 30.5044 23.5672C29.0793 23.5672 27.9263 22.4192 27.9263 21.0003V13.9413C27.9263 12.5224 29.0793 11.3744 30.5044 11.3744C31.9331 11.3744 33.0825 12.5224 33.0825 13.9413ZM30.5044 3.03198C28.9038 3.03198 27.604 4.32613 27.604 5.91974C27.604 7.51336 28.9038 8.8075 30.5044 8.8075C32.105 8.8075 33.4048 7.51336 33.4048 5.91974C33.4048 4.32613 32.105 3.03198 30.5044 3.03198Z" fill="#00D6C3"/>
                  <path d="M82.0669 13.9413V21.0003C82.0669 22.4192 80.9139 23.5672 79.4888 23.5672C78.0636 23.5672 76.9106 22.4192 76.9106 21.0003V13.9413C76.9106 12.5224 78.0636 11.3744 79.4888 11.3744C80.9175 11.3744 82.0669 12.5224 82.0669 13.9413ZM79.4888 3.03198C77.8882 3.03198 76.5884 4.32613 76.5884 5.91974C76.5884 7.51336 77.8882 8.8075 79.4888 8.8075C81.0894 8.8075 82.3892 7.51336 82.3892 5.91974C82.3892 4.32613 81.0894 3.03198 79.4888 3.03198Z" fill="#00D6C3"/>
                  <path d="M3.01139 20.5618C3.01139 19.8737 3.27995 19.2284 3.77051 18.74C4.25749 18.2551 4.90918 17.9842 5.60026 17.9842C6.23047 17.9842 6.82845 18.2088 7.29753 18.6188C5.97266 17.2355 5.15625 15.3638 5.15625 13.2996C5.15625 9.04637 8.61881 5.59889 12.8906 5.59889C16.4355 5.59889 18.3584 7.85562 18.3584 7.85562C19.3646 8.85742 20.9974 8.85742 22.0036 7.85562C23.0098 6.85381 23.0098 5.22811 22.0036 4.22631C22.0072 4.22274 18.652 0.465088 12.8906 0.465088C5.77213 0.465088 0 6.21209 0 13.2996C0 20.3871 5.77213 26.1341 12.8906 26.1341C13.6963 26.1341 14.4876 26.0129 15.236 25.7812C15.8376 25.5958 16.4105 25.3355 16.9476 25.0075C17.8607 24.4514 18.3477 23.8881 18.3512 23.8809C18.8418 24.3693 19.4899 24.6367 20.181 24.6367C20.8721 24.6367 21.5238 24.3658 22.0107 23.8809C22.5012 23.3925 22.7698 22.7437 22.7698 22.052C22.7698 21.4566 22.5693 20.8898 22.1969 20.4335C23.579 21.7098 25.4267 22.4941 27.4601 22.4941C28.1548 22.4941 28.8065 22.2267 29.2971 21.7383C29.7876 21.2498 30.0562 20.601 30.0562 19.9093C30.0562 19.3139 29.8557 18.7471 29.4833 18.2907C30.8654 19.5671 32.7131 20.3514 34.7465 20.3514C35.4412 20.3514 36.0928 20.084 36.5834 19.5956C37.0739 19.1072 37.3426 18.4583 37.3426 17.7667C37.3426 17.1713 37.1421 16.6045 36.7697 16.1481C38.1518 17.4244 39.9995 18.2088 42.0329 18.2088C42.7275 18.2088 43.3792 17.9414 43.8698 17.4529C44.3603 16.9645 44.629 16.3157 44.629 15.624C44.629 15.0286 44.4285 14.4618 44.056 14.0054C45.4381 15.2818 47.2858 16.0661 49.3192 16.0661C51.2721 16.0661 53.0373 15.3411 54.3813 14.1554C54.8432 14.5191 55.4018 14.7116 55.9639 14.7116C56.6586 14.7116 57.3102 14.4442 57.8008 13.9558C58.2913 13.4674 58.56 12.8185 58.56 12.1269C58.56 11.5315 58.3595 10.9646 57.9871 10.5083C59.3691 11.7846 61.2168 12.5689 63.2502 12.5689C64.6045 12.5689 65.8502 12.0439 66.7846 11.1832C67.2465 11.5469 67.8051 11.7394 68.3672 11.7394C69.0618 11.7394 69.7135 11.472 70.2041 10.9836C70.6946 10.4952 70.9632 9.84632 70.9632 9.15468C70.9632 8.55929 70.7627 7.99245 70.3903 7.53611C71.7723 8.81242 73.6201 9.59675 75.6534 9.59675C76.3481 9.59675 76.9997 9.32937 77.4903 8.84094C77.9809 8.35252 78.2495 7.70367 78.2495 7.01203C78.2495 6.41665 78.049 5.8498 76.6766 5.39346C78.0587 6.66977 79.9064 7.4541 81.9398 7.4541C83.2942 7.4541 84.5398 6.92911 85.4742 6.06841C85.9361 6.43206 86.4947 6.62457 87.0568 6.62457C87.7514 6.62457 88.4031 6.35719 88.8936 5.86877C89.3842 5.38034 89.6528 4.73149 89.6528 4.03986C89.6528 3.44447 89.4523 2.87763 89.0799 2.42129C90.4619 3.6976 92.3096 4.48193 94.3431 4.48193C95.0377 4.48193 95.6893 4.21455 96.1799 3.72613C96.6704 3.2377 96.9391 2.58885 96.9391 1.89722C96.9391 1.30183 96.7386 0.734983 96.3662 0.278643C97.7483 1.55495 99.596 2.33929 101.629 2.33929C102.324 2.33929 102.976 2.0719 103.466 1.58348C103.957 1.09505 104.226 0.446205 104.226 -0.245434C104.226 -0.345431 104.222 -0.441857 104.211 -0.538283L101.629 1.48135H3.01139C3.01139 1.48135 3.01139 1.48135 3.01139 20.5618Z" fill="#00D6C3"/>
                  <path d="M22.0107 18.7399C21.5238 18.2551 20.8721 17.9841 20.181 17.9841C19.4899 17.9841 18.8418 18.2515 18.3512 18.7399C18.3477 18.7471 17.8607 19.3104 16.9476 19.8665C16.4105 20.1945 15.8376 20.4548 15.236 20.6402C14.4876 20.8719 13.6963 20.9931 12.8906 20.9931C12.0993 20.9931 11.3187 20.8755 10.5703 20.6402C9.97233 20.4548 9.39583 20.1945 8.85514 19.8665C7.9349 19.3104 7.43001 18.7471 7.42643 18.7399C6.93587 18.2515 6.28776 17.9841 5.59668 17.9841C4.9056 17.9841 4.25749 18.2515 3.76693 18.7399C3.27637 19.2284 3.00781 19.8773 3.00781 20.569C3.00781 21.1643 3.20829 21.7312 3.58071 22.1875C2.19863 20.9112 0.350868 20.1269 -1.6825 20.1269C-2.37715 20.1269 -3.02882 20.3943 -3.51938 20.8827C-4.00994 21.3711 -4.27855 22.02 -4.27855 22.7116C-4.27855 23.307 -4.07807 23.8738 -3.70565 24.3302C-5.08773 23.0539 -6.93549 22.2695 -8.96886 22.2695C-9.66351 22.2695 -10.3152 22.5369 -10.8057 23.0253C-11.2963 23.5137 -11.5649 24.1626 -11.5649 24.8542C-11.5649 25.4496 -11.3644 26.0165 -10.992 26.4728C-12.3741 25.1965 -14.2219 24.4121 -16.2552 24.4121C-16.9499 24.4121 -17.6015 24.6795 -18.0921 25.168C-18.5827 25.6564 -18.8513 26.3052 -18.8513 26.9969C-18.8513 27.5922 -18.6508 28.1591 -18.2784 28.6154C-19.6605 27.3391 -21.5083 26.5548 -23.5416 26.5548C-25.4946 26.5548 -27.2597 27.2798 -28.6037 28.4655C-29.0656 28.1018 -29.6242 27.9093 -30.1863 27.9093C-30.881 27.9093 -31.5327 28.1767 -32.0232 28.6651C-32.5138 29.1535 -32.7824 29.8024 -32.7824 30.494C-32.7824 31.0894 -32.5819 31.6562 -32.2095 32.1126C-33.5916 30.8363 -35.4393 30.0519 -37.4727 30.0519C-38.827 30.0519 -40.0727 30.5769 -41.0071 31.4376C-41.469 31.0739 -42.0276 30.8814 -42.5896 30.8814C-43.2843 30.8814 -43.9359 31.1488 -44.4265 31.6372C-44.9171 32.1257 -45.1857 32.7745 -45.1857 33.4661C-45.1857 34.0615 -44.9852 34.6284 -44.6128 35.0847C-45.9949 33.8084 -47.8426 33.0241 -49.876 33.0241C-50.5706 33.0241 -51.2223 33.2915 -51.7128 33.7799C-52.2034 34.2683 -52.472 34.9172 -52.472 35.6088C-52.472 36.2042 -52.2715 36.771 -50.8991 37.2274C-52.2812 35.9511 -54.129 35.1667 -56.1623 35.1667C-57.5167 35.1667 -58.7623 35.6917 -59.6967 36.5524C-60.1586 36.1888 -60.7172 35.9962 -61.2793 35.9962C-61.9739 35.9962 -62.6256 36.2636 -63.1162 36.7521C-63.6067 37.2405 -63.8753 37.8893 -63.8753 38.581C-63.8753 39.1764 -63.6749 39.7432 -63.3024 40.1995C-64.6845 38.9232 -66.5323 38.1389 -68.5656 38.1389C-69.2603 38.1389 -69.9119 38.4063 -70.4025 38.8947C-70.8931 39.3831 -71.1617 40.032 -71.1617 40.7236C-71.1617 41.319 -70.9612 41.8858 -70.5888 42.3422C-71.9708 41.0659 -73.8186 40.2815 -75.852 40.2815C-76.5466 40.2815 -77.1983 40.5489 -77.6888 41.0373C-78.1794 41.5258 -78.448 42.1746 -78.448 42.8662C-78.448 43.4616 -78.2475 44.0284 -76.8751 44.4848C-78.2572 43.2085 -80.1049 42.4241 -82.1383 42.4241C-83.4927 42.4241 -84.7383 42.9491 -85.6727 43.8098C-86.1346 43.4462 -86.6932 43.2536 -87.2553 43.2536C-87.9499 43.2536 -88.6016 43.521 -89.0921 44.0094C-89.5827 44.4979 -89.8513 45.1467 -89.8513 45.8383C-89.8513 46.4337 -89.6508 47.0005 -89.2784 47.4569C-90.6605 46.1806 -92.5083 45.3962 -94.5416 45.3962C-95.2363 45.3962 -95.8879 45.6636 -96.3785 46.152C-96.8691 46.6405 -97.1377 47.2893 -97.1377 47.981C-97.1377 48.5763 -96.9372 49.1432 -96.5648 49.5995C-97.9469 48.3232 -99.7946 47.5389 -101.828 47.5389C-102.523 47.5389 -103.174 47.8063 -103.665 48.2947C-104.155 48.7832 -104.424 49.432 -104.424 50.1236C-104.424 50.2236 -104.42 50.32 -104.409 50.4164L-101.828 48.3968H-3.01139C-3.01139 48.3968 -3.01139 48.3968 -3.01139 29.3163C-3.01139 28.6282 -2.74284 27.9829 -2.25228 27.4945C-1.7653 27.0096 -1.11361 26.7386 -0.422529 26.7386C0.20768 26.7386 0.805658 26.9632 1.27474 27.3732C-0.0501258 25.9899 -0.866539 24.1182 -0.866539 22.0541C-0.866539 17.8009 2.59602 14.3534 6.86778 14.3534C10.4127 14.3534 12.3356 16.6101 12.3356 16.6101C13.3418 17.6119 14.9746 17.6119 15.9808 16.6101C16.987 15.6083 16.987 13.9826 15.9808 12.9808C15.9844 12.9772 12.6292 9.21959 6.86778 9.21959C-0.250687 9.21959 -6.02281 14.9666 -6.02281 22.0541C-6.02281 29.1415 -0.250687 34.8886 6.86778 34.8886C7.67347 34.8886 8.46487 34.7674 9.21321 34.5356C9.81483 34.3503 10.3877 34.09 10.9248 33.762C11.8379 33.2059 12.3249 32.6426 12.3284 32.6354C12.819 33.1238 13.4671 33.3912 14.1582 33.3912C14.8493 33.3912 15.501 33.1203 15.9879 32.6354C16.4785 32.147 16.7471 31.4981 16.7471 30.8065C16.7471 30.2111 16.5466 29.6443 16.1742 29.1879C17.5562 30.4643 19.404 31.2286 21.4374 31.2286C22.132 31.2286 22.7837 30.9612 23.2743 30.4728C23.7648 29.9843 24.0334 29.3355 24.0334 28.6439C24.0334 28.0485 23.8329 27.4816 23.4605 27.0253C24.8426 28.3016 26.6903 29.0859 28.7237 29.0859C29.4184 29.0859 30.07 28.8185 30.5606 28.3301C31.0511 27.8417 31.3197 27.1928 31.3197 26.5012C31.3197 25.9058 31.1192 23.339 30.7468 22.8826C32.1289 24.1589 33.9767 24.9433 36.01 24.9433C36.7047 24.9433 37.3563 24.6759 37.8469 24.1875C38.3375 23.699 38.6061 23.0502 38.6061 22.3585C38.6061 21.7631 38.4056 21.1963 38.0332 20.74C39.4152 22.0163 41.263 22.8006 43.2964 22.8006C45.2494 22.8006 47.0145 22.0756 48.3585 20.89C48.8204 21.2536 49.379 21.4461 49.9411 21.4461C50.6357 21.4461 51.2874 21.1787 51.7779 20.6903C52.2685 20.2019 52.5371 19.553 52.5371 18.8614C52.5371 18.266 52.3366 17.6991 51.9642 17.2428C53.3463 18.5191 55.194 19.3034 57.2274 19.3034C58.5818 19.3034 59.8274 18.7784 60.7618 17.9177C61.2237 18.2813 61.7823 18.4739 62.3444 18.4739C63.0391 18.4739 63.6907 18.2065 64.1813 17.7181C64.6718 17.2297 64.9404 16.5808 64.9404 15.8892C64.9404 15.2938 64.7399 14.727 64.3675 14.2706C65.7495 15.5469 67.5973 16.3312 69.6306 16.3312C70.3253 16.3312 70.9769 16.0638 71.4675 15.5754C71.958 15.087 72.2267 14.4381 72.2267 13.7465C72.2267 13.1511 72.0262 12.5842 70.6538 12.1279C72.0359 13.4042 73.8836 14.1886 75.917 14.1886C77.2713 14.1886 78.517 13.6636 79.4514 12.8029C79.9133 13.1665 80.4719 13.359 81.0339 13.359C81.7286 13.359 82.3802 13.0916 82.8708 12.6032C83.3614 12.1148 83.63 11.4659 83.63 10.7743C83.63 10.1789 83.4295 9.61208 83.0571 9.15574C84.4391 10.432 86.2869 11.2164 88.3202 11.2164C89.0149 11.2164 89.6665 10.949 90.1571 10.4606C90.6476 9.97215 90.9163 9.3233 90.9163 8.63167C90.9163 8.03628 90.7158 7.46944 90.3434 7.01309C91.7255 8.28941 93.5732 9.07374 95.6066 9.07374C96.3013 9.07374 96.9529 8.80635 97.4435 8.31793C97.934 7.8295 98.2027 7.18065 98.2027 6.48902C98.2027 5.89363 98.0022 5.32678 96.6298 4.87044C98.0119 6.14675 99.8596 6.93108 101.893 6.93108C102.588 6.93108 103.239 6.6637 103.73 6.17528C104.22 5.68685 104.489 5.03801 104.489 4.34637C104.489 4.24637 104.485 4.14995 104.474 4.05352L101.893 6.07315H11.2753C11.2753 6.07315 11.2753 6.07315 11.2753 25.1536Z" fill="#00D6C3"/>
                </g>
                <line x1="130.593" y1="2.5903e-08" x2="130.593" y2="24" stroke="#D5D5D7" stroke-width="1.18519"/>
                <path d="M147.557 18C147.367 18 147.238 17.975 147.168 17.9251C147.108 17.8653 147.078 17.7455 147.078 17.5659V7.77535C147.078 7.59571 147.108 7.48094 147.168 7.43104C147.238 7.37115 147.367 7.34121 147.557 7.34121H151C152.068 7.34121 152.876 7.57076 153.425 8.02984C153.974 8.47895 154.249 9.14762 154.249 10.0359V10.2305C154.249 10.7794 154.109 11.2484 153.829 11.6377C153.56 12.0269 153.216 12.2764 152.796 12.3862C153.266 12.5059 153.65 12.7804 153.949 13.2095C154.249 13.6287 154.399 14.2424 154.399 15.0505V15.26C154.399 16.1481 154.114 16.8217 153.545 17.2807C152.986 17.7602 152.128 18 150.97 18H147.557ZM148.425 17.1616H150.925C151.724 17.1616 152.328 16.992 152.738 16.6527C153.157 16.3134 153.367 15.7795 153.367 15.0505V14.8858C153.367 14.1673 153.157 13.6284 152.738 13.2692C152.328 12.9099 151.714 12.7303 150.895 12.7303H148.425V17.1616ZM148.425 11.8922H150.895C151.684 11.8922 152.278 11.7375 152.678 11.4282C153.087 11.1188 153.292 10.6348 153.292 9.97605V9.82635C153.292 9.16773 153.082 8.68374 152.663 8.37438C152.254 8.06503 151.674 7.91035 150.925 7.91035H148.425V11.8922ZM156.417 18C156.228 18 156.098 17.975 156.028 17.9251C155.968 17.8653 155.938 17.7455 155.938 17.5659V7.77535C155.938 7.59571 155.968 7.48094 156.028 7.43104C156.098 7.37115 156.228 7.34121 156.417 7.34121H157.449C157.639 7.34121 157.774 7.37115 157.854 7.43104C157.923 7.48094 157.958 7.59571 157.958 7.77535V17.1616H161.731C161.92 17.1616 162.05 17.1915 162.12 17.2514C162.19 17.3013 162.225 17.4111 162.225 17.5808V17.7605C162.225 17.9401 162.19 18.0549 162.12 18.1048C162.05 18.1547 161.92 18.1797 161.731 18.1797H156.417ZM163.635 12.6704C163.635 11.2334 163.885 10.0259 164.384 9.04791C164.883 8.07 165.611 7.32126 166.569 6.80234C167.537 6.27344 168.705 6.00898 170.072 6.00898C171.439 6.00898 172.607 6.27344 173.575 6.80234C174.533 7.32126 175.261 8.07 175.76 9.04791C176.259 10.0259 176.509 11.2334 176.509 12.6704V12.8651C176.509 14.3021 176.259 15.5096 175.76 16.4875C175.261 17.4655 174.533 18.2142 173.575 18.7331C172.607 19.2621 171.439 19.5265 170.072 19.5265C168.705 19.5265 167.537 19.2621 166.569 18.7331C165.611 18.2142 164.883 17.4655 164.384 16.4875C163.885 15.5096 163.635 14.3021 163.635 12.8651V12.6704ZM164.514 12.8651C164.514 14.0526 164.718 15.0206 165.127 15.7691C165.537 16.5175 166.12 17.0813 166.88 17.4606C167.638 17.8398 168.701 18.0294 170.072 18.0294C171.442 18.0294 172.506 17.8398 173.264 17.4606C174.023 17.0813 174.607 16.5175 175.016 15.7691C175.435 15.0206 175.64 14.0526 175.64 12.8651V12.6704C175.64 11.4828 175.435 10.5148 175.016 9.76634C174.607 9.01788 174.023 8.45405 173.264 8.07484C172.506 7.69563 171.442 7.50602 170.072 7.50602C168.701 7.50602 167.638 7.69563 166.88 8.07484C166.12 8.45405 165.537 9.01788 165.127 9.76634C164.718 10.5148 164.514 11.4828 164.514 12.6704V12.8651ZM185.087 18.823C184.228 18.823 183.4 18.6633 182.601 18.344C181.803 18.0146 181.169 17.5855 180.7 17.0566C180.241 16.5277 180.011 15.8691 180.011 15.0804V14.8858C180.011 14.0176 180.261 13.2991 180.76 12.7303C181.27 12.1614 181.998 11.7523 182.946 11.5028C182.178 11.2333 181.589 10.8791 181.18 10.4399C180.78 9.99086 180.58 9.39708 180.58 8.65863V8.46399C180.58 7.69558 180.8 7.07187 181.24 6.59286C181.679 6.10387 182.318 5.72965 183.156 5.47018C184.005 5.21072 185.023 5.08098 186.21 5.08098H187.677C188.735 5.08098 189.593 5.1708 190.252 5.35043C190.91 5.52008 191.43 5.80948 191.809 6.21863C192.188 6.61781 192.378 7.15647 192.378 7.83503V8.02964C192.378 8.87789 192.118 9.54652 191.599 10.0355C191.079 10.5145 190.351 10.8338 189.412 10.9935C190.27 11.1232 190.969 11.4575 191.509 11.9964C192.058 12.5253 192.333 13.2541 192.333 14.1828V14.3774C192.333 15.3454 192.053 16.1487 191.494 16.7874C190.945 17.4261 190.171 17.9151 189.173 18.2544C188.174 18.5937 186.992 18.7633 185.626 18.7633L185.087 18.823ZM181.405 8.46399C181.405 9.07274 181.574 9.54178 181.914 9.8711C182.263 10.2004 182.802 10.3651 183.531 10.3651H186.21C186.958 10.3651 187.527 10.2354 187.917 9.97589C188.316 9.71642 188.516 9.29727 188.516 8.71846V8.52382C188.516 7.94501 188.316 7.52586 187.917 7.2664C187.517 6.99695 186.958 6.86223 186.24 6.86223H185.027C183.769 6.86223 182.786 7.02688 182.077 7.3562C181.628 7.56578 181.405 7.93503 181.405 8.46399ZM180.865 15.0804C180.865 15.779 181.08 16.3278 181.509 16.727C181.938 17.1162 182.642 17.3108 183.621 17.3108H185.626C186.584 17.3108 187.323 17.1262 187.842 16.7569C188.371 16.3877 188.636 15.8239 188.636 15.0654V14.8708C188.636 14.1123 188.371 13.5436 187.842 13.1644C187.313 12.7852 186.584 12.5956 185.656 12.5956H183.621C182.682 12.5956 181.974 12.7852 181.494 13.1644C181.025 13.5436 180.79 14.1123 180.79 14.8708L180.865 15.0804Z" fill="#373739"/>
                <defs>
                  <clipPath id="clip0_2551_11583">
                    <rect width="110" height="25.6868" fill="white" transform="translate(0 0.465088)"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#D5D5D7] text-[#373739] font-bold rounded-lg h-11 px-6 hidden md:flex">
              Assinar newsletter
            </Button>
            <Button className="bg-[#535355] hover:bg-[#373739] text-white font-bold rounded-lg h-11 px-6">
              Quero ser cliente
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-white pt-14 pb-0 px-6 flex justify-center">
        <div className="max-w-[1280px] w-full relative h-[450px] rounded-2xl overflow-hidden group">
          <img 
            src="https://www.figma.com/api/mcp/asset/619772ef-696c-4b5b-b7fd-6cae33573672" 
            alt="Article Hero" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-14 gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Link href="/" className="hover:underline">Inicio</Link>
              <span>/</span>
              <span className="text-[#5AD93A]">{articleContent.category}</span>
            </div>
            <h1 className="text-white text-5xl md:text-5xl font-bold font-['Oscine'] leading-tight max-w-4xl">
              {articleContent.title}
            </h1>
            <div className="flex flex-wrap items-center gap-10 text-white text-sm opacity-90">
              <div className="flex items-center gap-2">
                <span>postado em:</span>
                <span className="font-bold">{articleContent.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Atualizado em:</span>
                <span className="font-bold">{articleContent.updatedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Por :</span>
                <span className="font-bold">{articleContent.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <main className="w-full max-w-[1280px] px-6 py-16 flex flex-col md:flex-row gap-14">
        {/* Content Column */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2 text-[#76767A] text-xs uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Tempo de leitura: {articleContent.readingTime}</span>
          </div>

          {articleContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-[#373739] text-2xl font-bold font-['Oscine'] leading-relaxed">
                {section.title}
              </h2>
              <p className="text-[#535355] text-lg leading-relaxed font-['Nunito']">
                {section.content}
              </p>
              {idx === 1 && (
                <div className="w-full h-[205px] bg-[#F5F7FA] rounded-lg overflow-hidden my-8">
                  <img src="https://www.figma.com/api/mcp/asset/94fda3bd-32ea-4530-9f15-1b5ac3c72449" alt="Section visual" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}

          {/* Article Feedback */}
          <div className="pt-10 flex items-center gap-6 border-t border-[#D5D5D7] mt-16">
            <span className="text-[#535355] font-bold text-lg">Este artigo foi util?</span>
            <button className="text-[#636D7A] text-lg hover:text-[#373739] transition-colors">Sim</button>
            <button className="text-[#636D7A] text-lg hover:text-[#373739] transition-colors">Não</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-[368px] space-y-10">
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-[#373739] text-2xl font-bold font-['Oscine']">Assuntos deste artigo</h3>
              <div className="h-px bg-[#D5D5D7] w-full" />
            </div>
            <ul className="space-y-4">
              {articleContent.subjects.map((subject, idx) => (
                <li key={idx} className={`text-base font-bold leading-tight cursor-pointer hover:opacity-80 transition-opacity ${idx === 0 ? 'text-[#06A697]' : 'text-[#76767A] font-semibold'}`}>
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box - Updated with correct SVG Illustration */}
          <div className="bg-[#F5F7FA] p-8 rounded-[16px] flex flex-col gap-8">
            <div className="space-y-2">
              <h3 className="text-[#373739] text-[32px] font-bold font-['Oscine'] leading-[40px]">
                Assine a <span className="bg-[#62E641] px-1 rounded-sm">newsletter</span> e receba conteudos exclusivos.
              </h3>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[#535355] font-semibold text-base">
                <MessageSquare className="w-6 h-6 opacity-60" />
                <span>Artigos e notícias</span>
              </div>
              <div className="flex items-center gap-3 text-[#535355] font-semibold text-base">
                <ShieldCheck className="w-6 h-6 opacity-60" />
                <span>Promoções</span>
              </div>
              <div className="flex items-center gap-3 text-[#535355] font-semibold text-base">
                <HeartPulse className="w-6 h-6 opacity-60" />
                <span>Novidades sobre os produtos</span>
              </div>
            </div>

            <div className="relative flex items-center mt-2">
              <input 
                type="email" 
                placeholder="Digite seu email" 
                className="w-full h-14 bg-white border border-[#E8E8E8] rounded-full pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-[#72F951] text-[#B6B6B9] text-base"
              />
              <button className="absolute right-2 w-10 h-10 bg-[#72F951] rounded-full flex items-center justify-center hover:bg-[#62E641] transition-colors shadow-sm">
                <ArrowRight className="w-5 h-5 text-[#373739]" />
              </button>
            </div>

            <div className="flex justify-center pt-2">
              <svg width="242" height="242" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.53516 112.377V220.154C9.53516 223.734 10.9575 227.167 13.4891 229.699C16.0208 232.23 19.4543 233.652 23.0343 233.651H219.59C227.044 233.651 233.087 227.608 233.087 220.154V112.377C233.087 107.555 230.514 103.1 226.337 100.69L128.061 43.9467C123.884 41.5372 118.74 41.5372 114.564 43.9467L16.2847 100.69C12.1088 103.1 9.53587 107.555 9.53516 112.377Z" fill="#00D6C3"/>
                <path d="M125.668 83.9485C125.489 79.546 125.974 75.1418 127.105 70.8833C127.451 69.5813 127.866 68.2746 128.592 67.1433C129.317 66.0121 130.392 65.0468 131.694 64.7029C132.502 64.5309 133.33 64.4782 134.153 64.5464C136.544 64.6318 138.97 64.7219 141.237 65.4808C142.078 65.7434 142.868 66.1494 143.571 66.6809C144.519 67.4303 145.191 68.469 145.779 69.5268C146.993 71.6944 147.949 74.1063 147.842 76.5894C147.766 78.3088 147.187 79.9642 146.919 81.6646C146.774 82.6683 146.704 83.6814 146.738 84.7088C146.772 85.7363 146.911 86.7584 147.152 87.7592C147.393 88.76 147.732 89.7237 148.158 90.6358C148.583 91.5479 149.088 92.3933 149.655 93.1593C150.222 93.9253 150.841 94.6 151.5 95.1724" stroke="#373739" stroke-width="0.77"/>
                <path d="M125.668 83.9485C125.489 79.546 125.974 75.1418 127.105 70.8833C127.451 69.5813 127.866 68.2746 128.592 67.1433C129.317 66.0121 130.392 65.0468 131.694 64.7029C132.502 64.5309 133.33 64.4782 134.153 64.5464C136.544 64.6318 138.97 64.7219 141.237 65.4808C142.078 65.7434 142.868 66.1494 143.571 66.6809C144.519 67.4303 145.191 68.469 145.779 69.5268C146.993 71.6944 147.949 74.1063 147.842 76.5894C147.766 78.3088 147.187 79.9642 146.919 81.6646C146.774 82.6683 146.704 83.6814 146.738 84.7088C146.772 85.7363 146.911 86.7584 147.152 87.7592C147.393 88.76 147.732 89.7237 148.158 90.6358C148.583 91.5479 149.088 92.3933 149.655 93.1593C150.222 93.9253 150.841 94.6 151.5 95.1724" fill="white"/>
                <path d="M125.668 83.9485C125.489 79.546 125.974 75.1418 127.105 70.8833C127.451 69.5813 127.866 68.2746 128.592 67.1433C129.317 66.0121 130.392 65.0468 131.694 64.7029C132.502 64.5309 133.33 64.4782 134.153 64.5464C136.544 64.6318 138.97 64.7219 141.237 65.4808C142.078 65.7434 142.868 66.1494 143.571 66.6809C144.519 67.4303 145.191 68.469 145.779 69.5268C146.993 71.6944 147.949 74.1063 147.842 76.5894C147.766 78.3088 147.187 79.9642 146.919 81.6646C146.774 82.6683 146.704 83.6814 146.738 84.7088C146.772 85.7363 146.911 86.7584 147.152 87.7592C147.393 88.76 147.732 89.7237 148.158 90.6358C148.583 91.5479 149.088 92.3933 149.655 93.1593C150.222 93.9253 150.841 94.6 151.5 95.1724" stroke="#373739" stroke-width="0.77"/>
                <circle cx="36.9554" cy="36.3908" r="28.0418" fill="#373739" stroke="#373739" stroke-width="0.77"/>
                <path d="M61.7338 51.8299C61.3496 51.7493 58.9163 49.7809 56.9527 51.0663C55.3779 52.0979 53.9644 53.5304 53.3787 55.3186C53.2377 55.6422 53.2377 56.0099 53.3787 56.3336C53.5901 56.6279 53.919 56.8157 54.2799 56.8483C55.7981 57.1198 57.3491 56.589 58.3827 55.4443C56.3912 56.3542 55.49 58.6873 56.3526 60.6997" fill="white"/>
                <text x="36.9554" y="46.3908" font-family="Oscine" font-size="28" font-weight="bold" fill="#00D6C3" text-anchor="middle">8</text>
                <path d="M12.0668 112.377V218.565" stroke="#373739" stroke-width="2.5"/>
                <path d="M229.555 112.377V218.565" stroke="#373739" stroke-width="2.5"/>
                <path d="M12.0668 230.119H229.555" stroke="#373739" stroke-width="2.5"/>
                <path d="M120 220 L160 180" stroke="#373739" stroke-width="2"/>
              </svg>
            </div>
          </div>
        </aside>
      </main>

      {/* Related Posts */}
      <section className="w-full bg-white px-6 py-14 flex justify-center border-t border-[#D5D5D7]">
        <div className="max-w-[1280px] w-full space-y-8">
          <h2 className="text-[#373739] text-3xl font-bold font-['Oscine']">Posts relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "https://www.figma.com/api/mcp/asset/94fda3bd-32ea-4530-9f15-1b5ac3c72449", date: "24 mai 2022" },
              { img: "https://www.figma.com/api/mcp/asset/619772ef-696c-4b5b-b7fd-6cae33573672", date: "24 mai 2022" },
              { img: "https://www.figma.com/api/mcp/asset/94fda3bd-32ea-4530-9f15-1b5ac3c72449", date: "24 mai 2022" }
            ].map((post, idx) => (
              <div key={idx} className="relative aspect-[334/366] rounded-2xl overflow-hidden group cursor-pointer">
                <img src={post.img} alt="Related post" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-sm space-y-3">
                  <div className="bg-[#373739] text-[#F5F7FA] text-xs font-bold px-3 py-1 rounded-full w-fit">
                    {post.date}
                  </div>
                  <h3 className="text-white text-xl font-bold font-['Oscine'] leading-tight line-clamp-2">
                    OMS reclassifica gravidade e altera o grupo de variantes do SARS-CoV-2
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universo Viagem Banner - Redesigned to match Figma exactly */}
      <section className="w-full bg-[#DAF7F5] px-6 py-16 flex justify-center">
        <div className="max-w-[1050px] w-full bg-[#373739] rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-12 space-y-10 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#00D6C3] tracking-[1px] font-bold uppercase text-base">
                <Plane className="w-5 h-5 rotate-45" />
                <span>Universo Viagem</span>
              </div>
              <h2 className="text-white text-[32px] font-bold font-['Oscine'] leading-[40px]">
                Você protegido nos momentos mais importantes da sua viagem
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white font-semibold text-base">
                <div className="bg-[#373739] border border-white/20 p-1 rounded-md">
                   <Clock className="w-4 h-4 text-[#00D6C3]" />
                </div>
                Atraso de voo e bagagem
              </div>
              <div className="flex items-center gap-3 text-white font-semibold text-base">
                <div className="bg-[#373739] border border-white/20 p-1 rounded-md">
                   <Headset className="w-4 h-4 text-[#00D6C3]" />
                </div>
                Atendimento 24 Horas (em português)
              </div>
              <div className="flex items-center gap-3 text-white font-semibold text-base">
                <div className="bg-[#373739] border border-white/20 p-1 rounded-md">
                   <ShieldCheck className="w-4 h-4 text-[#00D6C3]" />
                </div>
                Despesas médicas, hospitalares e muito mais
              </div>
            </div>

            <Button className="bg-[#72F951] hover:bg-[#62E641] text-[#373739] font-bold rounded-full px-12 h-14 text-lg w-fit">
              Conhecer agora
            </Button>
          </div>
          <div className="flex-1 relative min-h-[424px]">
             <img src="https://www.figma.com/api/mcp/asset/203a085a-38ae-4a77-a18b-f50c54ce2f0f" alt="Product" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[rgba(114,249,81,0.06)] pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
